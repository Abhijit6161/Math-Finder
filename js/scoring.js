const Storage = (() => {
  const profileKey = 'math-finder-profile';
  const historyKey = 'math-finder-history';
  const defaults = {
    bestScore: 0,
    currentStreak: 0,
    accuracy: 0,
    averageTime: 0,
    mathAccuracy: 0,
    mathCount: 0,
    aptitudeAccuracy: 0,
    aptitudeCount: 0
  };

  const profile = () => ({
    ...defaults,
    ...JSON.parse(localStorage.getItem(profileKey) || '{}')
  });

  const history = () => JSON.parse(localStorage.getItem(historyKey) || '[]');

  const record = result => {
    const old = profile();
    const isApt = result.mode === 'aptitude';

    let mathAcc = old.mathAccuracy || 0;
    let mathCnt = old.mathCount || 0;
    let aptAcc = old.aptitudeAccuracy || 0;
    let aptCnt = old.aptitudeCount || 0;

    if (isApt) {
      aptCnt += 1;
      aptAcc = aptCnt === 1 ? result.accuracy : Math.round((aptAcc * (aptCnt - 1) + result.accuracy) / aptCnt);
    } else {
      mathCnt += 1;
      mathAcc = mathCnt === 1 ? result.accuracy : Math.round((mathAcc * (mathCnt - 1) + result.accuracy) / mathCnt);
    }

    const totalRuns = mathCnt + aptCnt;
    const overallAcc = totalRuns ? Math.round((mathAcc * mathCnt + aptAcc * aptCnt) / totalRuns) : result.accuracy;

    const next = {
      bestScore: Math.max(old.bestScore, result.score),
      currentStreak: old.currentStreak + 1,
      accuracy: overallAcc,
      averageTime: old.averageTime === 0 ? result.averageTime : +((old.averageTime + result.averageTime) / 2).toFixed(1),
      mathAccuracy: mathAcc,
      mathCount: mathCnt,
      aptitudeAccuracy: aptAcc,
      aptitudeCount: aptCnt
    };

    localStorage.setItem(profileKey, JSON.stringify(next));
    localStorage.setItem(historyKey, JSON.stringify([
      { ...result, date: new Date().toLocaleDateString() },
      ...history()
    ].slice(0, 10)));

    return next;
  };

  return { profile, history, record };
})();
