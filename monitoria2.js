//ex1
function plusMinus(arr) {
    var positivo = 0;
    var negativo = 0;
    var zero = 0;

    for (var i = 0; i < arr.length; i++){
        if (arr[i] > 0) {
            positivo++;
        } else if (arr[i] < 0) {
            negativo++;
        } else { zero++ };
    }
    var total = arr.length;
    var totalPositivo = (positivo / total).toFixed(6);
    var totalNegativo = (negativo / total).toFixed(6);
    var totalZero = (zero / total).toFixed(6);

    console.log(totalPositivo);
    console.log(totalNegativo);
    console.log(totalZero);
}

//ex2
function gradingStudents(grades) {
    for (var i = 0; i < grades.length; i++){
        var multiplo = Math.ceil(grades[i] / 5) * 5;

        if (grades[i] <= 37) {
            ;                                       
        } else if (multiplo - grades[i] < 3) {
            grades[i] = multiplo;
        } 
    }
    return grades;
}

//ex3
function countingValleys(n, s) {
    var nivel_mar = 0;
    var vales = 0;

    for (var i = 0; i < n; i++){
        if(s[i] == 'U'){
            nivel_mar++;
        }
        if(s[i] == 'D'){
            nivel_mar--;
        }
        if(nivel_mar == 0 && s[i] == 'U'){
            vales++
        }
    }
    return vales;
}

//ex 4
function breakingRecords(scores) {

    var comparadorHighest = scores[0]; 
    var comparadorLowest = scores[0];

    var highestArray = [];
    var lowestArray = [];

    for (var i = 0; i < scores.length; i++){
        if (scores[i] > comparadorHighest){
            comparadorHighest = scores[i];
            highestArray.push(comparadorHighest);
        } 
        if(scores[i] < comparadorLowest){
            comparadorLowest = scores[i];
            lowestArray.push(comparadorLowest);
        }
    }

    var resultados = [highestArray.length, lowestArray.length]

    return resultados;
}

//ex 5
function divisibleSumPairs(n, k, ar){
    var count = 0;
    for(var i = 0; i < n; i++){
        var sum = 0;
        for(var j = 0; j < n; j++){
            if(i == j){continue}
            
            sum = ar[i] + ar[j]
            if (sum % k == 0){
                count++
            }
        }
    } 
    return count/2;
}