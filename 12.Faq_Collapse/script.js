const buttons = document.querySelectorAll('.faq-toggle');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const faq = button.closest('.faq');
    faq.classList.toggle('active');
  });
});
