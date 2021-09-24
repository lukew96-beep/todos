const memeForm = document.querySelector('form');
const imageInput = document.querySelector('#imgUrl');
const topText = document.querySelector('#topText');
const bottomText = document.querySelector('#bottomText');
const results = document.querySelector('#results');
memeForm.addEventListener('submit', function(){
    const memeImg = document.createElement('img');
    memeImg.src = imageInput.value;
    results.appendChild('memeImg');
})