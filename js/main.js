const productos = [
    {nombre: 'ordenaor PC', precio: 699, departamento:'Tecnologia' },
    {nombre: 'Sartenes verdes', precio: 39, departamento:'Hogar' },
    {nombre: 'Reloj calculadora', precio: 75, departamento:'Tecnologia' },
    {nombre: 'Maquina de palomitas', precio: 33, departamento:'Hogar' },
    {nombre: 'Mueble TV', precio: 120, departamento:'Hogar' },
    {nombre: 'Tupper', precio: 10, departamento:'Hogar' },

]

//todas las funciones reciben por parametro una funcion anonima cuyo parametro de esa funciion anonima es cada una son los elementos del array  
// todos los metodos son sobre el array 




//metodo find encuentra la primera aparicion dentro de este array  (encontrar un valor)
const muebleTV = productos.find(item =>{
    return item.nombre === 'Mueble TV' //busca cosas dentro de arrays
    //exprecion regular metodo test
    return (/Mueble/g).test(item.nombre) //busca cosas dentro de arrays de una manera mas flexibles 
})
console.log(muebleTV)


//funcion map ejecuta una serie de sentencias o metodos de cada una de los elementos del array (sumarle el va a los objetos)

const productosIva = productos.map(item =>{
    //con esto le pone el iva a todo incluyendo las funciones anteriores (modifica el objeto origina)
    item.precio = item.precio + item.precio * 0.16
    return item
    //se puede crear una nueva variable y usar el metodo assign y solo modifica la funcion que hicimos (modifica el objeto que creamos)
    let newPrecio = item.precio + item.precio * 0.16
    return {...item, precio: newPrecio}
    
})
console.log(productosIva)


//funcion filter nos permite recuperar un nuevo array con todos aquelos elementos que cumplan con el filtro que nosotros le especificamos dentro de la funcion 
//nos permite hacr filtrado de informacion 

//const productosHogar = productos.filter(item => item.departamento === 'Hogar')

const productosHogar = productos.filter(item => {
    return item.departamento === 'Hogar'
})
console.log(productosHogar)


//funcion every nos permite mediente una condicion aplicarsela a los elementos del array y si todos cumplen con esa condicion nos regresa true y si no false 

const productosCheck = productos.every(item =>{
    return item.precio >= 1
})
console.log(productosCheck)


//funcion some hace comprobaciones si alguno de ellos cumple con la condicion que le pasamos dentro de la funcion anonima nos regresa true o false 

const productosComprobacion = productos.some(item =>{
    return item.precio >= 1
})
console.log(productosComprobacion)


//metodo reduce nos ayudar a sumar elementos dentro diferentes objetos dentro de diferentes arrays

const precioTotal = productos.reduce((total, item)=> {
     return total + item.precio
}, 0)
console.log(precioTotal)