document.querySelectorAll('.plan button').forEach(button => {
  button.addEventListener('click', () => {
    const plan = button.closest('.plan');
    plan.innerHTML = '<p>Checking payment...</p>';

    setTimeout(() => {
      let seconds = 60; // عد تنازلي 60 ثانية مبدأياً
      let earned = 0;
      const earningsRate = 0.0001; // ربح وهمي كل ثانية

      plan.innerHTML = \`
        <p>Mining activated!</p>
        <p>Time left: <span id="countdown">\${seconds}</span>s</p>
        <p>Earnings: <span id="earnings">\${earned.toFixed(5)}</span> LTC</p>
      \`;

      const countdown = setInterval(() => {
        seconds--;
        earned += earningsRate;
        plan.querySelector('#countdown').textContent = seconds;
        plan.querySelector('#earnings').textContent = earned.toFixed(5);
        if (seconds <= 0) {
          clearInterval(countdown);
          plan.innerHTML += "<p>Session ended. Start again to earn more!</p>";
        }
      }, 1000);
    }, 2000);
  });
});

// إشعارات حيّة وهمية كل دقيقة
setInterval(() => {
  const msg = document.createElement('div');
  msg.style.position = 'fixed';
  msg.style.bottom = '20px';
  msg.style.left = '20px';
  msg.style.background = '#111';
  msg.style.color = '#0f0';
  msg.style.padding = '10px';
  msg.style.borderRadius = '6px';
  msg.style.zIndex = 9999;
  msg.innerText = 'User from Germany just earned 0.002 LTC!';
  document.body.appendChild(msg);
  setTimeout(() => msg.remove(), 4000);
}, 60000);