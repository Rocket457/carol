var btn = document.querySelector("#send")
const mylove = document.querySelector("#mylove");


btn.addEventListener("click", function(e) {
    e.preventDefault();
    const name = document.querySelector("#name");
    var value = name.value;
    console.log(value)
    value = value.toUpperCase();
    if(value == "CAROLINA"||value == "CAROL"){
        mylove.innerHTML = value.toUpperCase() + "!! isso voce acertou :D";
    } else{
        mylove.innerHTML = "Não o nome dela não é " + value + ", voce errou o nome dela :(";
    }


});

