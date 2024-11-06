document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-icon');
    const mobileMenu = document.querySelector('.menu-links');

    hamburger.addEventListener('click', function() {
        this.classList.toggle('open');
        mobileMenu.classList.toggle('open');
    });

    // Parallax effect for background
    // window.addEventListener('scroll', function() {
    //     const scrollPosition = window.pageYOffset;
    //     document.querySelector('#home').style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    // });

    // Button ripple effect
    // document.querySelectorAll('.btn_color').forEach(button => {
    //     button.addEventListener('click', function(e) {
    //         const x = e.clientX - e.target.offsetLeft;
    //         const y = e.clientY - e.target.offsetTop;

    //         const ripple = document.createElement('div');
    //         ripple.classList.add('ripple');
    //         ripple.style.left = `${x}px`;
    //         ripple.style.top = `${y}px`;
    //         this.appendChild(ripple);

    //         setTimeout(() => ripple.remove(), 600);
    //     });
    // });

    // For mousemove effect on profile picture
    const profilePic = document.querySelector('.section_pic_container img');
    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth / 2 - e.clientX) / 50;
        const y = (window.innerHeight / 2 - e.clientY) / 50;
        profilePic.style.transform = `translate(${x}px, ${y}px)`;
    });

    // Attach the scrollToContact function to the button
    document.querySelector('.btn_color').addEventListener('click', scrollToContact);

    // Scroll reveal animations
    // const observerOptions = {
    //     root: null,
    //     rootMargin: '0px',
    //     threshold: 0.5
    // };

    // const observer = new IntersectionObserver(entries => {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             entry.target.style.animation = `fadeIn 1s forwards`;
    //             observer.unobserve(entry.target);
    //         }
    //     });
    // }, observerOptions);

    // document.querySelectorAll('section').forEach(section => {
    //     observer.observe(section);
    // });
});