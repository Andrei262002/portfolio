const btnDark = document.querySelector('.dark-mode')

if (localStorage.getItem('darkMode') === 'dark'){
    btnDark.classList.add('dark-mode--active');
    document.body.classList.add('dark')
} 

btnDark.onclick = function () {
    btnDark.classList.toggle('dark-mode--active')
    const isDark = document.body.classList.toggle('dark')



    if (isDark) {
        localStorage.setItem('darkMode', 'dark')

    } else {
        localStorage.setItem('darkMode', 'light')
    }

}