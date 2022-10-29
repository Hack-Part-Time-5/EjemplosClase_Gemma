

// Every

let starWars = [
    ["luke", 20],
    ["anakin", 5],
    ["Yoda", 50]
]

// comprobar que cada uno de los personajes tengan una fuerza superior a 10.

// entrar dentro del array
// recorremos cada uno de los elementos
    // si el elemento de la segunda posición del array es superior a 10  devuelve true
    // si no, devuelve false.


    // programación imperativa

    /* for (let i = 0; i < starWars.length; i++) {
        
        if (starWars[i][1] > 10) {
            console.log(true);
        } else {
            console.log(false);
        }
        
    } */

    // Programación funcional

    /* let fuerza = starWars.every(el => el[1] > 10);

    console.log(fuerza); */

    // FIND --> nos devuelve el primer elemento del array que satisface nuestras condiciones.

   /*  let numeros = [2, 8, 1, 1];

    let num8 = numeros.find(el => el < 2);

    console.log(num8);

    let nombres = ["Ema", "Clara", "Manu"];

    let nombre = nombres.find((el) => {
        el.length < 4
    });

    console.log(nombre); */

    // CALLBACK --> es una función que se pasa como parámetro de otra función.

   /*  function nombre(callback()){

    }
 */

    /* function vamosPedir(callback){

        setTimeout(()=>{
           let petición = (Math.random() * 10) <=5 ? "café" : "té";
           callback(petición)

        }, 2000)

       

    }

    vamosPedir(petición => console.log(`El pedido es ${petición}`)) */

  /*   let moviles = [
        {
            tipo: "samsung",
            precio: 100
        },
        {
            tipo: "nokia",
            precio: 50
        }
    ];

    function mostrarMoviles(){
        setTimeout(()=>{
            moviles.forEach(el => console.log(el.tipo))
        }, 1000)
    }

   


    function agregaUnMovil(movil, callback){
        setTimeout(()=>{
           
            moviles.push(movil)
            callback()
 
         }, 2000)
    }


    agregaUnMovil({tipo: "huawei", precio:500},  mostrarMoviles); */


    // MAP --> nos devuelve un array con todos los elementos del array origianl transformados según lo que le hemos pedido. 

    /* let array = [20, 10, 4, 50, 2];
 */
    /* let arrayMap = array.map(el => el * 2);

    console.log(arrayMap);

    let nombres = ["Miquel", "Chechu", "Leudys"];// [6, 6, 6]

    let length = nombres.map(el => el.length);

    console.log(length); */


    /* for (let i = 0; i < array.length; i++) {
        array[i] = array[i] * 2;
        
    }

    console.log(array);

    
    let arrayMap = array.map(el => el * 2); */

    /* let users = [
        {
            nombre : "Susana",
            apellidos : "Martínez"
        },
        {
            nombre : "Mario",
            apellidos : "García"
        },
        {
            nombre : "Manu",
            apellidos : "Cots"
        }
    ] */

   /*  let fullName = users.map(el => console.log(`${el.nombre} ${el.apellidos}`)); */

/* 
 let fullName = users.map(el => `${el.nombre.toUpperCase()} ${el.apellidos.toUpperCase()}`);


console.log(fullName); */



// FILTER


/* let array = [20, 10, 4, 50, 2];

let filtro1 = array.filter(el => el > 10);

console.log(filtro1);


let users = [
    {
        nombre : "Susana",
        apellidos : "Martínez",
        nota : 6
    },
    {
        nombre : "Mario",
        apellidos : "García",
        nota : 2
    },
    {
        nombre : "Manu",
        apellidos : "Cots",
        nota : 10
    },
    {
        nombre : "Laura",
        apellidos : "Balaguer",
        nota : 8
    },
    {
        nombre : "Sandra",
        apellidos : "López",
        nota : 4
    }
] 

let aprobados = users.filter(el => el.nota >= 5)

console.log(aprobados); */


// REDUCE

/* let array = [20, 10, 4, 50, 2];

let arrayReduce = array.reduce(( accumulator, currentValue)=> accumulator * currentValue, 1);

console.log(arrayReduce); */

// acc, cur

/* let partesDelCoche = ["asientos", "volante", "ruedas", "marchas"]


let coche = partesDelCoche.reduce((acc, cur)=> `${acc} ${cur},`, `Mi coche tiene: `)



console.log(coche); */


// forEach
let partesDelCoche = ["asientos", "volante", "ruedas", "marchas"];

partesDelCoche.forEach(el => el);

console.log(partesDelCoche);


partesDelCoche.forEach((el, i)=> el)




