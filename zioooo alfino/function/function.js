
function greeting () {
    console.log ("good morning!")
}
greeting();

function greeting ( cepot, language) {
    if(language === "indonesia") {
        console.log('Selamat Pagi ${cepot}!');
    }else if (language === "english") {
        console.log ('Good moorning ${cepot}!');
    }else {
        console.log ('Bonjour ${cepot}!');
    }
    }

greeting ("cepot", "english")

function multiply(a, b){
    return a*b;
}
let result = multiply(10, 2)
console.log(result)

const welting = function (zio, language) {
    if(language === "english"){
    return "goog morning " +zio + "!";
    }else if (language === "french") {
        return "bonjour " + zio + "!";
    }else{
        return "selamat pagi" + zio + "!"
    }

}

console.log(welting('ron', 'english'));