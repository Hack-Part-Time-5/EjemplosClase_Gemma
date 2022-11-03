// 41. Genera un array de números aleatorios dado un mínimo y un máximo.

/* --> filtramos sólo los números pares, 
   --> duplicamos los números obtenidos y sumamos 10,
   --> filtramos estos números para valores mayores de 10 y menos de 100
   --> y hacemos la suma final.  */

   /* function getRandomArray(min, max, num){

        let arr = [];

        for (let i = 0; i < num; i++) {
            let numRandom = Math.floor(Math.random() * (max - min) + min);

            arr.push(numRandom);
            
        }

        return arr;

   }


   function operaciones(array){

        let pares = array.filter(el => el % 2 == 0)
                         .map(el => el * 2 + 10)
                         .filter(el => el > 10 && el < 100)
                         .reduce((acc, curr) => acc + curr, 0);
        
        return pares;

   }


   console.log(operaciones(getRandomArray(0, 10, 5))); */



// 42.- A partir de 2 array, compararlos y devolver un array sin duplicados a través de una función. 
    // Ejemplo: a = [1,2,3,4], b = [1,2] ==> Resultado: [3,4]

   /*   let a  = [1,2,3,4];
        let b = [1,2]; */

   /*  function difArray(array1, array2){
        let filtrado = array1.filter(el => !array2.includes(el));
        return filtrado;
    }

    console.log(difArray([1,2,3,4],[1,2]));  */




// 43.- A partir de un array, escribir una función que encuentre el único elemento distinto. 
//      Ejemplo: [5,5,5,5,4,5,5] => 4, [2,2,2,2,3,2,2,2,2] => 3



/* function unico(array){
    array.sort((a, b) => a - b); //  2, 3
    if (array[0] == array[1]) {
        return array.pop();
    } else {
        return array[0];
    }
}


console.log(unico([5,5,5,5,4,5,5]));
console.log(unico([2,2,2,2,3,2,2,2,2])); */