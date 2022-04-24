const circle = document.querySelector('.circle');

circle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    circle.classList.toggle('bright');
})