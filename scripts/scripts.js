var btnShare = document.querySelector('.share-icon');
var pop_up = document.querySelector('.pop-up')
var deskView = document.querySelector('.desktop-view');
var mobileView = document.querySelector('.mobile-view')
var mobileShareBtn = document.querySelector('.mbl-share-btn')






btnShare.addEventListener('click', () => {
    var width = window.screen.width;
    if (width > 800) {
        pop_up.classList.toggle('active'); 
    }else{
        deskView.style.display = 'none';
        mobileView.style.display = 'flex';
        
    };
});

mobileShareBtn.addEventListener('click', () => {
    deskView.style.display = 'flex';
    mobileView.style.display = 'none';
})


