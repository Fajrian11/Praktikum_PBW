const app = document.getElementById("app");
const btn = document.getElementById("btn");
const input = document.getElementById("input");
// const output = document.getElementById("output");
// text = input.value.toLowerCase();

// let text = "Hello World!";
// let result = text.toLowerCase();
// document.getElementById("demo").innerHTML = result;

var myImage = new Image(300, 300);


const search = () => {
    if (input.value.toLowerCase() == "burung") {
        myImage.src = 'img/burung.jpg';
        x = document.getElementById("gambar");
        x.appendChild(myImage);	
    }else if(input.value.toLowerCase() == "harimau"){
        myImage.src = 'img/harimau.jpg';
        x = document.getElementById("gambar");
        x.appendChild(myImage);	
    }else if(input.value.toLowerCase() == "kucing"){
        myImage.src = 'img/kucing.jpg';
        x = document.getElementById("gambar");
        x.appendChild(myImage);	
    }else{
        myImage.src = 'img/manusia.jpg';
        x = document.getElementById("gambar");
        x.appendChild(myImage);	
    }
}

btn.addEventListener("click", search);