
//1.Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. Mostrar en consola el resultado del array.
/*
    let numeros = [];
    for (let i = 0; i < 10; i++) {
    let numero = Math.floor(Math.random() * 100); 
    numeros.push(numero); 
    }
    console.log(numeros);
*/

//2. El usuario deberá ingresar un string con varias palabras separadas por coma en un popup y se deben convertir en un array. Mostrar en consola dicho resultado.
/*
    let inputString = prompt("Ingresa palabras separadas por coma: (,)");
    let palabras = inputString.split(",");
    console.log(palabras);
*/

//3. De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado de menor a mayor, muestra el número menor y el número mayor.

    let numerosarray = [10, 40, 30, 20, 15, 5];
    numerosarray.sort((a, b) => a - b);
    console.log("El arreglo ordenado de menor a mayor:", numerosarray);
    console.log("Número menor:", numerosarray[0]);
    console.log("Número mayor:", numerosarray[numerosarray.length - 1]);


