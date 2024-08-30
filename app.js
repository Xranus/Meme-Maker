let caption1 = document.getElementById('caption1-el');
let caption2 = document.getElementById('caption2-el');
const caption1Input = document.getElementById('caption1-input');
const caption2Input = document.getElementById('caption2-input');
const submitBtm = document.getElementById('submit-btn');
let imgDiv = document.getElementById('img-div');
let inputFile = document.getElementById('fileInput');

let imageUrl;

inputFile.addEventListener('change', function(event) {
    const file = event.target.files[0]; 
    if (file) {
        const reader = new FileReader(); 
        reader.onload = function(e) {
            imageUrl = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

submitBtm.addEventListener('click', function() {
    caption1.textContent = caption1Input.value;
    caption2.textContent = caption2Input.value;

    if (imageUrl) {
        imgDiv.style.backgroundImage = `url(${imageUrl})`;
        imgDiv.style.backgroundSize = 'cover'; 
        imgDiv.style.backgroundPosition = 'center'; 
    } else {
        alert('Please upload an image first.');
    }
});
