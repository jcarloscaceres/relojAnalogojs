function reloj() {
    time = new Date();
    horas = time.getHours();
    minutos = time.getMinutes();
    segundos = time.getSeconds();

    if(horas <= 12){
        porcentajehoras = horas / 12 * 360;

    }else{
        porcentajehoras = horas /24 * 360;
    }

    porcentajehoras += minutos / 60 * 30;
    porcentajeminutos = minutos / 60 * 360;
    porcentajesegundos = segundos / 60 * 360;

    document.getElementById("horas").style.transform = "rotate("+ porcentajehoras +"deg)";
    document.getElementById("minutos").style.transform = "rotate("+ porcentajeminutos +"deg)";
    document.getElementById("segundos").style.transform = "rotate("+ porcentajesegundos +"deg)";
}

setInterval(reloj, 1000);