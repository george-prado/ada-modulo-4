document.addEventListener('DOMContentLoaded', function () {
    const themeBtn = document.querySelector('#btnTheme');
    const body = document.body;

    themeBtn.addEventListener('change', function () {
        if (themeBtn.checked) {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
        } else {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
        }
    });

    if (themeBtn.checked) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    }
});