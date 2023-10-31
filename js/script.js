let images = document.querySelectorAll('.small_img');
let overlay = document.querySelector('.overlay');
let popup_img = document.querySelector('.popup_img');
let icon = document.querySelector('.icon');

images.forEach((item)=>{
    item.addEventListener('click',function(){
        overlay.style.display = 'flex';
        popup_img.src = item.src;
    })
    icon.addEventListener('click',function(){
        overlay.style.display = 'none';
    })
})