let prev = document.getElementById("prev");
let next = document.getElementById("next");

let container = document.querySelector(".container");

let imageArray = []
for (let index = 1; index <= 4; index++) {
    let image = new Image();
    image.src = index + ".jpg";
    imageArray.push(image);
}

let num = 0;
next.addEventListener("click",function(){
    num++;
    if (num >= imageArray.length) { 
        num = 0;
      }
    let img = document.createElement("img"); 
    img.src = imageArray[num].src; 
    img.style.width = "250px";
    img.style.height = "250px";
    container.innerHTML = "";
    container.appendChild(img); 

})

prev.addEventListener("click",function(){
    num--;
    if (num < 0) { 
        num = imageArray.length - 1;
    }
    let img = document.createElement("img"); 
    img.src = imageArray[num].src; 
    img.style.width = "250px";
    img.style.height = "250px";
    container.innerHTML = "";
    container.appendChild(img);
})





