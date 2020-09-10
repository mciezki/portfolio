//MOBILE NAVIGATION
const toggleBtn = document.querySelector('.toggle');
const nav = document.querySelector('nav');

toggleBtn.addEventListener('click', function () {
    nav.classList.toggle('active');
    toggleBtn.style.opacity = '0';
    setTimeout(function () {
        if (nav.classList.contains('active')) toggleBtn.innerHTML = '<i class="fas fa-times"></i>';
        else toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
        toggleBtn.style.opacity = '1';
    }, 200);
})

//DESKTOP NAVIGATION
const buttons = document.querySelectorAll('nav ul li a');

if (window.innerWidth >= 1280) {
    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            let x = (e.clientX - e.target.offsetLeft) / 1000;
            let y = e.clientY - e.target.offsetTop;

            let wave = document.createElement('div');
            wave.style.left = x + 'px';
            wave.style.top = y + 'px';
            this.appendChild(wave);

            setTimeout(() => {
                wave.remove();
            }, 1000)
        })
    })
}


//COURTAIN
const courtain = document.querySelector('.courtaincontainer');

if (window.innerWidth >= 1280) {
    document.querySelector('body').style.height = '100vh';
    document.querySelector('body').style.overflow = 'hidden';
    buttons.forEach(button => button.addEventListener('click', () => {
        courtain.classList.toggle('active');
        setTimeout(() => {
            courtain.classList.toggle('active');
        }, 500)
    }))
}


//HEADER 

const createSquare = () => {
    const header = document.querySelector('header');
    const square = document.createElement('div');
    square.classList.add('flying');

    let size = Math.random() * 30;

    square.style.width = `${10 + size}px`;
    square.style.height = `${10 + size}px`;

    square.style.top = `${Math.random() * innerHeight}px`;
    square.style.left = `${Math.random() * innerWidth}px`;

    header.appendChild(square);

    setTimeout(() => {
        square.remove();
    }, 5000)
}

setInterval(createSquare, 200);