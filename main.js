function saludo(){
    console.log ("¡Hola! Bienvenido a tu punto saludable")
}
saludo()

let preguntaEdad = parseInt (prompt ("Ingrese su edad"))
console.log(preguntaEdad)
if(preguntaEdad >= 18){
  console.log (`Su edad es ${preguntaEdad} y puede entrar a nuestra tienda`)
}else{
 console.log(`Su edad es ${preguntaEdad} tiene acceso restringido. No se permite la vista a bebidas con base alcoholica de BeePure`)
}

let salirMenu = false
do{
    let opcionIngresada = parseInt(prompt (`Ingrese la opción deseada
        1- Ver productos y precio
        2- Carrito
        3- Consultar producto a granel
        4- Ingreso mayorista
        0- Salir del menú`))


    switch(opcionIngresada){
        case 1:
            console.log("Ver productos y precio")

            let nombredelproducto = prompt("Ingrese el nombre del producto que busca")
            console.log(nombredelproducto )
            let precioProducto = 600
            console.log (precioProducto)
            
            const IVA = 0.21
            
            let IVAprecio = precioProducto * IVA
            console.log(IVAprecio)
            
            let precioFinal = precioProducto + IVAprecio
            console.log(precioFinal)
            
            console.log (" el nombre del producto es: " + nombredelproducto + " su precio es: " + precioProducto+ " su suma por IVA es " + IVAprecio + " por lo tanto su precio final es " + precioFinal)           
        
            function otroProducto(){
            console.log ("¿Ver otro producto?") }
            otroProducto()   
        break
        case 2:
            console.log("Carrito - Precio final")

                function pedirNumero(){
                let num1 = parseInt(prompt("ingrese el precio del primer producto"))
                let num2 = parseInt(prompt("ingrese el precio del segundo producto"))
                suma(num1,num2)
                }
                pedirNumero()
            
                function suma(sumando1, sumando2){
                resultado = sumando1 + sumando2
                mostrarResultado(resultado)
                }
                function mostrarResultado(x){
                console.log("El resultado es" + x)
                }
        break
        case 3:
            console.log("Consultar producto a granel")
        break
        case 4:
            console.log("Ingreso mayorista")
        break9
        case 0:
            console.log("¡Gracias por elegirnos!")
            salirMenu = true
        break
        default:
            console.log("Ingrese una opción correcta")
        break
    }
}while(!salirMenu)
