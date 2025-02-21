let slideIndex = 1;
// Next/previous controls
function slides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";

    let background = document.getElementById("background");
    background.src = slides[slideIndex-1].src;
    let leftAlign = ((window.innerWidth - slides[slideIndex-1].width) / 2) - 30;
    slides[slideIndex-1].style.left = `${leftAlign}px`;
}

window.onload = () => {
    showSlides(slideIndex);
    let loaded = false
    document.getElementById('readMore').onclick = () => {
        if(!loaded){
            document.getElementById('moreGroups').style.display = "block";
            loaded = true;
        } else {
            document.getElementById('moreGroups').style.display = "none";
            loaded = false;
        }

    }
}
