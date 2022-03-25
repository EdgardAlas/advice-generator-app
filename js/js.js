(function () {
  const text = document.querySelector('.card__text');
  const adviceNumber = document.getElementById('advice-number');
  const nextAdvice = document.getElementById('next-advice');

  nextAdvice.addEventListener('click', async function () {
    try {
      const resp = await fetch('https://api.adviceslip.com/advice');
      const {
        slip: { id, advice },
      } = await resp.json();
      text.innerText = advice;
      adviceNumber.innerText = id;
    } catch (error) {
      console.error(error);
    }
  });
})();
