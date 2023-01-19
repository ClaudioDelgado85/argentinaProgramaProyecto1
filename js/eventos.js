function cambiarColor(){ 
    
    var color1=document.getElementById("fcolor1").value;
    document.getElementById("id_perfil").style.backgroundColor=color1;
    if (color1 =="red"){
    document.getElementById("id_seccion_izquierda").style.backgroundColor="green";
    document.getElementById("id_contenedor_redes_sociales").style.backgroundColor="pink";
    } else if (color1 =="blue"){
        document.getElementById("id_seccion_izquierda").style.backgroundColor="yellow";
        document.getElementById("id_contenedor_redes_sociales").style.backgroundColor="blue"; 
    }else {
        document.getElementById("id_seccion_izquierda").style.backgroundColor=color1;
        document.getElementById("id_contenedor_redes_sociales").style.backgroundColor=color1; 
    }
    
    
}