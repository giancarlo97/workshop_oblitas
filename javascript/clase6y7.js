class Producto {
    constructor(nombre, precio) {
    this.nombre = nombre.toUpperCase();
    this.precio = parseFloat(precio);
    this.vendido = true;
    }
    sumaFee() {
    this.precio = this.precio * 1.21;
    }
}

const productos = [];
productos.push(new Producto("transferencia1", "2800"));
productos.push(new Producto("transferencia2", "1500"));
productos.push(new Producto("transferencia3", "7000"));
productos.push(new Producto("transferencia4", "10000"));
productos.push(new Producto("transferencia5", "77000"));
productos.push(new Producto("transferencia6", "9500"));
   
for (const producto of productos){
   producto.sumaFee();
}

const resultado = productos.find((el)=>el.nombre==="TRANSFERENCIA1");

const resultado2 = productos.filter((el)=>el.precio<6000);

const resultado3 = productos.some((el)=>el.precio>100000);

const resultado4 = productos.reduce((acc,el)=>acc+el.precio,0);

const resultado5 = productos.sort((a,b)=>a.precio-b.precio);

console.log(productos);

console.log(resultado);

console.log(resultado2);

console.log("Existen tranferencias mayores a $100000: "+resultado3);

console.log("El monto total de transferencias realizadas es: $"+resultado4);

console.log(resultado5);