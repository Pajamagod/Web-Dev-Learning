var submit = document.querySelector(".btn-primary");

const result = document.querySelector('#Result');

const kilometers = document.getElementById('number')

submit.addEventListener('click', function(){
    result.textContent = convertLength(kilometers);
});

function convertLength(kilometers) {
    var miles = kilometers.value * .62137;
    try{
        if (isNaN(kilometers)) throw "not a number"
    }

    catch(err){
        result.innerHTML = "Not a Number";
    }   
    return miles.toFixed(3);

}