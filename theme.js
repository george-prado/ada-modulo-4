document.addEventListener('DOMContentLoaded', function () {
    const themeBtn = document.querySelector('#btnTheme');
    const themeName = document.querySelector('#themeName');
    const body = document.body;

    themeBtn.addEventListener('change', function () {
        if (themeBtn.checked) {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            themeName.innerText = 'Tema Escuro';
        } else {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            themeName.innerText = 'Tema Claro';
        }
    });
});