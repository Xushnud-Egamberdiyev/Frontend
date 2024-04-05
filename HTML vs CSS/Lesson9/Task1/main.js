document.getElementById("random1").innerHTML = Math.floor(Math.random() * 10)
document.getElementById("random2").innerHTML = Math.floor(Math.random() * 10)

function random(){
    document.getElementById("random1").innerHTML = Math.floor(Math.random() * 10)
    document.getElementById("random2").innerHTML = Math.floor(Math.random() * 10)
}

function check() {
    var round1 = parseInt(document.getElementById("random1").innerHTML)
    var round2 = parseInt(document.getElementById("random2").innerHTML)
    var user_guest = parseInt(document.querySelector("input").value)

    var sum = round1 + round2

    if(round1 + round2 == user_guest){
        alert("Congratultions!")
    }
    else{   
        alert("Incorrect!" + sum)    
    }

}