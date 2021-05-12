const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  counter.innerText = '0';

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const counterText = +counter.innerText;

    const increment = target / 250;

    if (counterText < target) {
      counter.innerText = `${Math.ceil(counterText + increment)}`;
      setInterval(updateCounter, 1);
    }
  }
  updateCounter()
})