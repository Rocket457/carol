var btn = document.querySelector("#send")
const mylove = document.querySelector("#mylove");


btn.addEventListener("click", function(e) {
    e.preventDefault();
    const name = document.querySelector("#name");
    const value = name.value;
    console.log(value)
    if(value == "carolina"|| value == "carol"){
        
        mylove.innerHTML = value.toUpperCase() + "!! isso voce acertou :D";
    } else{
        mylove.innerHTML = "Não o nome dela não é " + value + ", voce errou o nome dela :(";
    }


});

