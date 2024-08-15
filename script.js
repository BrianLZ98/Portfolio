document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        themeToggle.querySelector('.fa-sun').style.display = 'block';
        themeToggle.querySelector('.fa-moon').style.display = 'none';
    } else {
        themeToggle.querySelector('.fa-sun').style.display = 'none';
        themeToggle.querySelector('.fa-moon').style.display = 'block';
    }

    themeToggle.addEventListener('click', function () {
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'light') {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeToggle.querySelector('.fa-sun').style.display = 'block';
            themeToggle.querySelector('.fa-moon').style.display = 'none';
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeToggle.querySelector('.fa-sun').style.display = 'none';
            themeToggle.querySelector('.fa-moon').style.display = 'block';
        }
    });
});




