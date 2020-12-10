$(document).ready(function(){
    $(".navbar__toggler").click(function(){
        
        $(".header__navbar_toggler-list").slideToggle("Slow");
    });
});


const search = document.querySelector('.search-item');
const searchInput = document.querySelector('.header__search-input');
const closeModalBtn = document.querySelector('.main__btn-close')
const modal = document.getElementById('modal');
const account = document.querySelector('.account-item');
console.log(account);

search.addEventListener('click',()=>{
    searchInput.classList.toggle('header__search-input-animate');    
});

account.addEventListener('click',()=>{
    
    modal.classList.remove('hide');
})

closeModalBtn.addEventListener('click',()=>{
    modal.classList.add('hide');
})