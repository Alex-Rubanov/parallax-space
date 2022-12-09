function parallax(e) {
    document.querySelectorAll('.space').forEach(el => {
        let movingValue = el.getAttribute('data-value');

        console.log(e.clientX, e.clientY);
        let x = e.clientX * movingValue /150;
        let y = e.clientY * movingValue /150;

        el.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}

document.addEventListener('mousemove', parallax);
