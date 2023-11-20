let btnOpen = document.querySelector('.btnOpen');
let container = document.querySelector('.container');

btnOpen.addEventListener('click', () => {
    container.classList.toggle('active');
    btnOpen.classList.toggle('active');
    if(btnOpen.classList == 'btnOpen active'){
        btnOpen.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        
    }else{
        btnOpen.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
})

console.log(screen.availWidth);
console.log(screen.width);
console.log(screen.width);