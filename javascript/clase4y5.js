function convertir() {
    let valore = parseInt(document.getElementById("valor").value);
    let resultado = 0;
    let dolar = 320;
    let euro = 400;
    if (document.getElementById("uno").checked){
        resultado = valore / dolar;
        alert("El cambio de Pesos a Dolares es: U$D" + resultado.toFixed(2));
    }
    else if (document.getElementById("dos").checked){
        resultado = valore / euro;
        alert("El cambio de Pesos a Euros es: EUR$" + resultado.toFixed(2));
    }
    else{
        alert("Por favor, complete los casilleros");
    }
}

function tabla() {
    let entrada =prompt("Cuantos dolares quiere comprar, use 'ESC' para salir");

    while(entrada != "ESC"){
        switch (entrada){
            case "100":
                alert("Son $34000");
                break;
            case "200":
                alert("Son $68000");
                break;
            case "300":
                alert("Son $102000");
                break;
            case "400":
                alert("Son $136000");
                break;
            case "500":
                alert("Son $170000");
                break;
            case "600":
                alert("Son $204000");
                break;
            case "700":
                alert("Son $238000");
                break;
            case "800":
                alert("Son $272000");
                break;
            case "900":
                alert("Son $306000");
                break;
            case "1000":
                alert("Son $340000");
                break;
            default:
                alert("Ingrese multiplos de 100, muchas gracias");
                break;
        }
        entrada = prompt("Cuantos dolares quiere comprar, use 'ESC' para salir"); 
    }
}
