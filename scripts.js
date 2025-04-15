  const faqItems = document.querySelectorAll('.item');

  faqItems.forEach(item => {
    const h1 = item.querySelector('h1');
    const img = h1.querySelector('img');
    const p = item.querySelector('p');

    h1.addEventListener('click', () => {
      item.classList.toggle('active');

      const value = item.classList.contains('active');
      img.src = value
        ? 'assets/images/icon-minus.svg' 
        : 'assets/images/icon-plus.svg';
    });
  });
