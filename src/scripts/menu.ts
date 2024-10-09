document.querySelector('.hamburger')?.addEventListener('click', () => {
    document.querySelector('.nav-links')?.classList.toggle('expanded');
    document.querySelector('.hamburger')?.classList.toggle('hamburger-toogle');
});

document.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', () => {
        document.querySelector('.nav-links')?.classList.toggle('expanded');
        document.querySelector('.hamburger')?.classList.toggle('hamburger-toogle');
    })
);