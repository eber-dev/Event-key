const insert = document.getElementById("insert")

window.addEventListener("keydown",(tecla_presionada)=>{
    //inner.Html = nos permite modificar el contenido del texto dentro de un elemento id
    //condición ? expresión_si_verdadero : expresión_si_falso
    // recordad cerrar bien la intruccion html <div></div>
    insert.innerHTML=`
    <div class = "tecla">
        ${tecla_presionada.key === " "  ? 'Space': tecla_presionada.key}
        <small>Tecla</small>
    </div>
    
    <div class = "tecla">
        ${tecla_presionada.keyCode}
        <small>Tecla.keyCode</small>
    </div>

    <div class = "tecla">
        ${tecla_presionada.code}
        <small>Tecla.code</small>
    </div>
    `
})