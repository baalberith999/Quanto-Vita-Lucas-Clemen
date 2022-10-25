function convertir() {
    var valor = parseInt(document.getElementById("valor").value);
    var resultado = 0;
    var promedio = 73;
    var var1 = 7;
    var var2 = 0;
    var var3 = 5;
    var var4 = 6;
    var var5 = 10;
    var var6 = 8;
    if (document.getElementById("var1").checked){
        resultado = promedio - valor + var1;
        alert("El estimado de años restantes es: " + resultado);
    }
    else if (document.getElementById("var2").checked){
        resultado = promedio - valor;
        alert ("El estimado de años restantes es " + resultado);
    }
    else if (document.getElementById("var3").checked){
        resultado = promedio - valor - var3;
        alert ("El estimado de años restantes es " + resultado);
    }
    else if (document.getElementById("var4").checked){
        resultado = promedio - valor + var4;
        alert ("El estimado de años restantes es " + resultado);
    }
    else if (document.getElementById("var5").checked){
        resultado = promedio - valor - var5;
        alert ("El estimado de años restantes es " + resultado);
    }
    else if (document.getElementById("var6").checked){
        resultado = promedio - valor + var6;
        alert ("El estimado de años restantes es " + resultado);
    }
    else {
        alert("Completa todos los campos solicitados");
    }
}