// Código del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {

    return lado * 4;

}

//console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado * lado;
}
//console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

// Código del triángulo
console.group("Triangulos")
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;


// console.log(
//     "Los lados del triángulo miden: " 
//     + ladoTriangulo1
//     + "cm, "
//     + ladoTriangulo2
//     + "cm, "
//     + baseTriangulo
//     + "cm."
// );

//console.log("La altura del triángulo es de: " + alturaTriangulo)

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

//console.log("El perímetro del triangulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
    return  (base * altura) / 2;
}

//console.log("El área del triangulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

// Código del Círculo
console.group("Círculos")
// Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}

//console.log("El diámetro del circulo es: " + diametroCirculo + "cm");

// PI
const PI = Math.PI;
//console.log("PI es: " + PI + "cm");

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio)
    return diametro * PI;
}

//console.log("El perímetro del circulo es: " + perimetroCirculo + "cm");

// Área
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

//console.log("El Área del circulo es: " + areaCirculo + "cm^2");

console.groupEnd()





// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = (perimetroCuadrado(value));

    alert(perimetro);
}

function calcularAreaCuadrado() {

}