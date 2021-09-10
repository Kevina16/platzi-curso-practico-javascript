
function calcularMediaAritmetica(lista) {

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}


function esPar(numero) {
    if(numero % 2 === 0){
        return true;
    } else {
        return false;
    }
}

function comparar ( a, b ){ 
    return a - b;
}


function ordenarLista(lista) {
    return lista.sort( comparar );
}

let mediana;

function calcularMediana(lista){

    listaOrdenada = ordenarLista(lista);

    mitadLista = parseInt(listaOrdenada.length / 2);

    if (esPar(listaOrdenada.length)){

        const elemento1 = listaOrdenada[mitadLista - 1];
        const elemento2 = listaOrdenada[mitadLista];
    
        const priomedioElimento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2
        ]);
    
        mediana = priomedioElimento1y2;
    } else {
    
        mediana = lista[mitadLista1];
    
    }
}




