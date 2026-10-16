const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];

const mathLabels = {
  addition: ['➕', 'Addition', 'Quick mental sums'],
  subtraction: ['➖', 'Subtraction', 'Sharpen focus'],
  multiplication: ['✖️', 'Multiplication', 'Build fluency'],
  division: ['➗', 'Division', 'Perfect pairs'],
  mixed: ['🎯', 'Mixed', 'Ultimate calculation challenge']
};

const mathSymbols = {
  addition: '+',
  subtraction: '−',
  multiplication: '×',
  division: '÷'
};

const aptitudeCategoriesList = [
  'All Categories',
  'Percentage',
  'Profit and Loss',
  'Ratio and Proportion',
  'Average',
  'Simple Interest',
  'Time and Work',
  'Time, Speed and Distance',
  'Number System',
  'Simplification',
  'Basic Data Interpretation'
];

let settings = {
  mode: 'math', // 'math' or 'aptitude'
  operation: 'addition',
  category: 'All Categories',
  difficulty: 'easy',
  count: 10,
  time: 10
};

let game = null;
let timer = null;
let locked = false;

// Helper to switch active screen
function showScreen(id) {
  $$('.screen').forEach(el => el.classList.toggle('active', el.id === id));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Display toast notifications
function showToast(text) {
  const toast = $('#toast');
  toast.textContent = text;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2000);
}

// Render user progress stats & history from LocalStorage
function updateProfileDisplay() {
  const p = Storage.profile();
  $('#heroBest').textContent = p.bestScore || 0;
  $('#heroStreak').textContent = p.currentStreak || 0;
  $('#statBest').textContent = p.bestScore || 0;
  $('#statStreak').textContent = (p.currentStreak || 0) + ' days';
  $('#statAccuracy').textContent = (p.accuracy || 0) + '%';
  $('#statMathAcc').textContent = (p.mathAccuracy || 0) + '%';
  $('#statAptAcc').textContent = (p.aptitudeAccuracy || 0) + '%';
  $('#statSpeed').textContent = (p.averageTime || 0) + 's';

  const history = Storage.history();
  const historyContainer = $('#historyList');
  if (history.length > 0) {
    historyContainer.innerHTML = history.slice(0, 4).map(item => `
      <article class="history-card">
        <span>${item.date} · ${item.operation || item.mode}</span>
        <b>${item.score} pts</b>
        <span>${item.accuracy}% accuracy</span>
      </article>
    `).join('');
  } else {
    historyContainer.innerHTML = '<div class="empty-history muted">Your completed challenges will appear here.</div>';
  }
}

// Update UI options according to selected mode & settings
function renderSetup() {
  const isAptitude = settings.mode === 'aptitude';

  $('#mathMode').classList.toggle('selected', !isAptitude);
  $('#aptitudeMode').classList.toggle('selected', isAptitude);

  $('#selectorTitle').textContent = isAptitude ? 'Choose Aptitude Category' : 'Choose Math Operation';
  $('#selectorSub').textContent = isAptitude
    ? 'Select a topic to focus on or choose All Categories.'
    : 'Select an operation to begin your mental sprint.';

  const opGrid = $('#operationGrid');
  const catContainer = $('#categoryContainer');

  if (isAptitude) {
    opGrid.hidden = true;
    catContainer.hidden = false;
    $('#categoryGrid').innerHTML = aptitudeCategoriesList.map(cat => `
      <button type="button" class="category-chip ${settings.category === cat ? 'selected' : ''}" data-cat="${cat}">
        ${cat}
      </button>
    `).join('');

    $$('#categoryGrid .category-chip').forEach(btn => {
      btn.onclick = () => {
        settings.category = btn.dataset.cat;
        renderSetup();
      };
    });
  } else {
    opGrid.hidden = false;
    catContainer.hidden = true;
    opGrid.innerHTML = Object.entries(mathLabels).map(([key, [icon, title, desc]]) => `
      <button type="button" class="operation ${settings.operation === key ? 'selected' : ''}" data-op="${key}">
        <i>${icon}</i>
        <b>${title}</b>
        <span>${desc}</span>
      </button>
    `).join('');

    $$('#operationGrid .operation').forEach(btn => {
      btn.onclick = () => {
        settings.operation = btn.dataset.op;
        renderSetup();
      };
    });
  }

  // Count choices
  $('#countChoices').innerHTML = [10, 20, 50, 100].map(n => `
    <button type="button" class="chip ${settings.count === n ? 'selected' : ''}" data-count="${n}">${n}</button>
  `).join('');

  $$('#countChoices .chip').forEach(btn => {
    btn.onclick = () => {
      settings.count = Number(btn.dataset.count);
      renderSetup();
    };
  });

  // Time choices
  $('#timeChoices').innerHTML = [5, 10, 15, 30, 0].map(n => `
    <button type="button" class="chip ${settings.time === n ? 'selected' : ''}" data-time="${n}">${n ? n + 's' : 'No Limit'}</button>
  `).join('');

  $$('#timeChoices .chip').forEach(btn => {
    btn.onclick = () => {
      settings.time = Number(btn.dataset.time);
      renderSetup();
    };
  });

  // Difficulty section
  const diffSection = $('#difficultySection');
  if (isAptitude) {
    diffSection.hidden = true;
    $('#setupTitle').textContent = '🧠 Aptitude Challenge';
    $('#setupSummary').textContent = `Aptitude · ${settings.category} · Easy`;
  } else {
    diffSection.hidden = false;
    $('#setupTitle').textContent = '⚙️ Math Sprint Setup';
    const opTitle = mathLabels[settings.operation][1];
    $('#setupSummary').textContent = `Math · ${opTitle} · ${settings.difficulty.toUpperCase()}`;

    $$('#difficultyChoices .difficulty-btn').forEach(btn => {
      btn.classList.toggle('selected', btn.dataset.difficulty === settings.difficulty);
      btn.onclick = () => {
        settings.difficulty = btn.dataset.difficulty;
        renderSetup();
      };
    });
  }
}

// Start game challenge
function startGame() {
  game = new MathGame(settings);
  showScreen('practice');
  renderNextQuestion();
}

// Render current question
function renderNextQuestion() {
  if (game.complete()) {
    return finishGame();
  }

  locked = false;
  const q = game.current();
  const isAptitude = settings.mode === 'aptitude';

  $('#practiceModeTag').textContent = isAptitude ? `🧠 ${q.category || 'Aptitude'}` : `🧮 ${mathLabels[settings.operation][1]}`;
  $('#questionCount').textContent = `Question ${game.index + 1} / ${game.questions.length}`;
  $('#progressFill').style.width = `${(game.index / game.questions.length) * 100}%`;

  if (isAptitude) {
    $('#questionText').textContent = q.question;
    $('#answerForm').hidden = true;
    $('#optionGrid').hidden = false;
    const optionLetters = ['A', 'B', 'C', 'D'];
    $('#optionGrid').innerHTML = q.options.map((opt, i) => `
      <button type="button" class="option-btn" data-answer="${opt}">
        <span class="option-letter">${optionLetters[i]}</span>
        <span class="option-text">${opt}</span>
      </button>
    `).join('');

    $$('.option-btn').forEach(btn => {
      btn.onclick = () => respondAnswer(btn.dataset.answer);
    });
  } else {
    $('#questionText').textContent = `${q.a} ${mathSymbols[q.operation]} ${q.b} = ?`;
    $('#optionGrid').hidden = true;
    $('#answerForm').hidden = false;
    $('#answerInput').value = '';
    setTimeout(() => $('#answerInput').focus(), 100);
  }

  $('#feedback').textContent = '';
  $('#feedback').className = 'feedback-banner';
  $('#explanation').textContent = '';

  updateGameStats();
  game.startQuestion();
  timer.start(settings.time);
}

function updateGameStats() {
  $('#scoreValue').textContent = game.score;
  $('#streakValue').textContent = game.streak;
}

// Handle answer submission
function respondAnswer(givenValue, isTimeout = false) {
  if (locked) return;
  locked = true;
  timer.stop();

  const isAptitude = settings.mode === 'aptitude';
  const result = game.answer(givenValue, isTimeout);
  const q = result.question;
  const correctAnswer = isAptitude ? q.correctAnswer : q.answer;
  const feedback = $('#feedback');

  if (result.correct) {
    feedback.textContent = `✓ Correct! +${result.points}`;
    feedback.className = 'feedback-banner good';
    if ([3, 5, 10, 15, 20].includes(game.streak)) {
      showToast(`🔥 ${game.streak} QUESTION STREAK!`);
    }
  } else if (isTimeout) {
    feedback.textContent = `TIME'S UP! Correct: ${correctAnswer}`;
    feedback.className = 'feedback-banner bad';
  } else {
    feedback.textContent = `✕ Incorrect · Correct: ${correctAnswer}`;
    feedback.className = 'feedback-banner bad';
  }

  if (isAptitude && q.explanation) {
    $('#explanation').textContent = q.explanation;
  }

  updateGameStats();
  setTimeout(renderNextQuestion, result.correct ? 750 : 1600);
}

// Complete game session & show results
function finishGame() {
  const r = game.results();
  Storage.record(r);

  const isAptitude = settings.mode === 'aptitude';
  $('#resultEyebrow').textContent = isAptitude ? '🎉 Aptitude Challenge Complete!' : '🎉 Math Sprint Complete!';
  $('#accuracyRing').style.setProperty('--pct', r.accuracy);
  $('#accuracyValue').textContent = `${r.accuracy}%`;
  $('#finalScore').textContent = r.score;
  $('#correctValue').textContent = `${r.correct} / ${r.count}`;
  $('#averageValue').textContent = `${r.averageTime}s`;
  $('#bestStreakValue').textContent = r.bestStreak;

  let encouragementMsg = "Good effort! Keep practicing to improve! 🚀";
  if (r.accuracy >= 90) {
    encouragementMsg = isAptitude ? "Excellent! Your aptitude skills are strong! 🔥" : "Outstanding calculation speed & accuracy! 🚀";
  } else if (r.accuracy >= 70) {
    encouragementMsg = "Great job! Keep practicing to push higher! 💪";
  }
  $('#encouragement').textContent = encouragementMsg;

  // Render question reviews
  const reviewList = $('#reviewList');
  reviewList.innerHTML = r.reviews.map(item => {
    const question = item.question;
    const qText = isAptitude ? question.question : `${question.a} ${mathSymbols[question.operation]} ${question.b}`;
    const correctAns = isAptitude ? question.correctAnswer : question.answer;

    return `
      <div class="review-item ${item.correct ? 'yes' : 'no'}">
        <div class="review-question">${item.correct ? '✓' : '✕'} ${qText}</div>
        <div class="review-meta">
          Your answer: <b>${item.given}</b> · Correct: <b>${correctAns}</b>
          ${question.explanation ? `<br><span>${question.explanation} · ${item.elapsed}s</span>` : ''}
        </div>
      </div>
    `;
  }).join('');

  updateProfileDisplay();
  showScreen('results');
}

// Initialize Timer
timer = new QuestionTimer(
  seconds => {
    const badge = $('#timerBadge');
    if (seconds === null) {
      badge.textContent = '⏱ ∞';
      badge.classList.remove('urgent');
    } else {
      badge.textContent = `⏱ ${String(seconds).padStart(2, '0')}s`;
      badge.classList.toggle('urgent', seconds <= 3);
    }
  },
  () => respondAnswer('', true)
);

// Event Listeners
$('#brandLink').onclick = e => {
  e.preventDefault();
  showScreen('home');
};

$('#answerForm').onsubmit = e => {
  e.preventDefault();
  respondAnswer($('#answerInput').value);
};

$('#startButton').onclick = startGame;
$('#againButton').onclick = startGame;
$('#changeButton').onclick = () => showScreen('home');
$('#homeButton').onclick = () => showScreen('home');

$('#mathMode').onclick = () => {
  settings.mode = 'math';
  renderSetup();
};

$('#aptitudeMode').onclick = () => {
  settings.mode = 'aptitude';
  settings.difficulty = 'easy';
  renderSetup();
};

// Keyboard Shortcuts support
document.addEventListener('keydown', e => {
  const activeScreen = document.querySelector('.screen.active');
  if (activeScreen && activeScreen.id === 'practice' && settings.mode === 'aptitude' && !locked) {
    const keyMap = { '1': 0, '2': 1, '3': 2, '4': 3, 'a': 0, 'b': 1, 'c': 2, 'd': 3, 'A': 0, 'B': 1, 'C': 2, 'D': 3 };
    if (e.key in keyMap) {
      const idx = keyMap[e.key];
      const buttons = $$('.option-btn');
      if (buttons[idx]) {
        buttons[idx].click();
      }
    }
  }
});

// Dark / Light Theme Toggle
const themeBtn = $('#themeButton');
themeBtn.onclick = () => {
  const isDark = document.documentElement.dataset.theme === 'dark';
  const newTheme = isDark ? 'light' : 'dark';
  document.documentElement.dataset.theme = newTheme;
  localStorage.setItem('math-finder-theme', newTheme);
};

// Load saved theme
const savedTheme = localStorage.getItem('math-finder-theme');
if (savedTheme === 'dark') {
  document.documentElement.dataset.theme = 'dark';
}

// Initial setup render & load profile
renderSetup();
updateProfileDisplay();
