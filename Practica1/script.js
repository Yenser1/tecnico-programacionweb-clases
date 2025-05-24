let num = 28;
let num2 = 2;
let raiz =  Math.sqrt(num);

let numero = 123123
let texto = "Se me van a confundi"
let estaCasado = true
let estudiantes = ["Sebastian", "Erik", "Yenser", `${3}`]
let estudiantes2 = ["Sebastian", "Erik", "Yenser", 3, () => {return `KLK`}]
const pi =  Math.PI

function diHola(){
    console.log("Hola")
}
function diAdios(){
    return "Adios"
}

let sumar = (x,y) => {
    console.log(x+y)
}
function restar(){
    return "KLK";
}

sumar(1,2)
setTimeout(restar, 1000);