class MathGame {
  constructor(settings) {
    this.settings = settings;
    this.questions = settings.mode === 'aptitude'
      ? AptitudeQuestions.pick(settings.count, settings.category)
      : Questions.pick(settings);
    this.index = 0;
    this.score = 0;
    this.streak = 0;
    this.bestStreak = 0;
    this.correct = 0;
    this.reviews = [];
    this.times = [];
    this.started = 0;
  }

  current() {
    return this.questions[this.index];
  }

  startQuestion() {
    this.started = Date.now();
  }

  answer(value, timedOut = false) {
    const question = this.current();
    if (!question) return { question: null, correct: false, points: 0, timedOut };

    const answer = this.settings.mode === 'aptitude' ? question.correctAnswer : question.answer;
    const correct = !timedOut && String(value).trim() !== '' && String(value).trim() === String(answer).trim();
    const elapsed = Math.min((Date.now() - this.started) / 1000, this.settings.time || 999);

    this.times.push(elapsed);
    this.reviews.push({
      question,
      correct,
      given: timedOut ? "Time's up" : (value || "No Answer"),
      elapsed: +elapsed.toFixed(1)
    });
    this.index++;

    if (correct) {
      this.correct++;
      this.streak++;
      this.bestStreak = Math.max(this.bestStreak, this.streak);
      this.score += 10 + Math.max(0, this.streak - 1) * 2;
    } else {
      this.streak = 0;
    }

    return {
      question,
      correct,
      points: correct ? 10 + Math.max(0, this.streak - 1) * 2 : 0,
      timedOut
    };
  }

  complete() {
    return this.index >= this.questions.length;
  }

  results() {
    const totalCount = this.questions.length || 1;
    const accuracy = Math.round((this.correct / totalCount) * 100);
    const sumTime = this.times.reduce((a, b) => a + b, 0);
    const averageTime = this.times.length ? sumTime / this.times.length : 0;

    return {
      score: this.score,
      correct: this.correct,
      count: totalCount,
      accuracy,
      averageTime: +averageTime.toFixed(1),
      bestStreak: this.bestStreak,
      reviews: this.reviews,
      mode: this.settings.mode,
      operation: this.settings.mode === 'aptitude' ? (this.settings.category || 'Aptitude') : this.settings.operation
    };
  }
}
