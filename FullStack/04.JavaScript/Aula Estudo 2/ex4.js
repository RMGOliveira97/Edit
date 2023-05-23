const date = new Date();
date.getHours

function changeImg(){
    const imageElement = document.querySelector("img")
    if(date.getHours >= 20){
        imageElement.setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/330px-FullMoon2010.jpg")
    }else (imageElement.setAttribute("src", "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQh-AxJRcDz5yLgVfFA_uPIl6gww1aeEmAWM7DGaHTucBrN5JmPYkFGlVjrfQuWd_60"))
}