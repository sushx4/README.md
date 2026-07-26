function showMessage(){
    alert("Welcome Sushant!");
}

function darkMode(){
    document.body.classList.toggle("dark");
}

let count=0;

function increase(){
    count++;
    document.getElementById("count").innerHTML=count;
}
