window.onload = function () {

    document.querySelector('.loader-wrapper').classList.remove('loader--hidden');
    setTimeout(function () {
        document.querySelector('.loader-wrapper').classList.add('loader--hidden');
    }, 2000); 
};