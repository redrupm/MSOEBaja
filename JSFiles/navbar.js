window.onload = () => {
    let dropdowns = document.querySelectorAll('ul');
    dropdowns.forEach(element => {
        let parentDiv = element.parentNode;
        element.style.width = `${parentDiv.clientWidth}px`;
    })
    let links = document.querySelectorAll('.clickable');
    links.forEach(link => {
        if(link.id.endsWith(".html")){
            link.onclick = () => {
                let embed = document.getElementById('body');
                embed.src = "HTMLFiles/" + link.id;
                embed.width  = embed.contentWindow.document.body.scrollWidth;
                embed.height = embed.contentWindow.document.body.scrollHeight;
            }
        }
    })
}

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {

    if (document.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("header").style.height = "2em";
        document.getElementById("logo").style.fontSize = "25px";
    } else {
        document.getElementById("header").style.height = "4em";
        document.getElementById("logo").style.fontSize = "35px";
    }
}