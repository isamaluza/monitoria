//Exercício 1 

function compareTriplets(a, b) {
    var i = 0;
    var numA = 0;
    var numB = 0;
    var output = [0, 0];
    while (i < 3) {
        if (a[i] > b[i]) {
            numA += 1;
            output[0] = numA;
        } else if (a[i] < b[i]) {
            numB += 1;
            output[1] = numB;
        }
        i++;
    }
    return output;
}

//Exercício 2

function simpleArraySum(ar) {
    var total = 0;
    var i = 0;
    while (i < ar.length) {
        total += ar[i];
        i++;
    }
    return total;
}

//Exercício 3

function aVeryBigSum(ar) {
    var i = 0;
    var total = 0;
    while (i < ar.length) {
        total += ar[i];
        i++;
    }
    return total;
}

//Exercício 4

function diagonalDifference(arr) {
    
    var diagonal1 = 0;  //itens mesmo valor
    var diagonal2 = 0;  //itens com valores diferentes

    for (var i = 0; i < arr.length; i++){
        for (var j = 0; j < arr[i].length; j++ )
            if (i == j) {
                diagonal1 += arr[i][j];
                diagonal2 += arr[arr.length - 1 -i][i];
            }
    }
    var difDiagonal = diagonal1 - diagonal2;

    if (difDiagonal < 0) { return difDiagonal * (-1) } else { return difDiagonal };

}

//Exercício 5

function staircase(n) {

    var linha = Array(n).fill(' ');

    for (var i = n - 1; i >= 0; i--){ 
        linha[i] = "#"; //define espaço da linha 
        console.log(linha.join(''));
    }
}
