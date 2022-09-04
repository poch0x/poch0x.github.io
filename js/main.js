let pantallaVacia = document.getElementById('pantallaVacia')
let pantallaFormulario = document.getElementById('pantallaFormulario')
let pantallaListado = document.getElementById('pantallaListado')
let pantallaDetalles = document.getElementById('pantallaDetalles')
let form = document.getElementById('form-items')
let botoncito = document.getElementById('btnFormularioCerrarDetalle')
let vDetalle = document.getElementsByName('listado-btn-verDetalle')


const listado_compra = {

}

let pantallaVaciaBtn = document.getElementById('btnFlot').addEventListener('click', mostrarFormulario = () => {
    pantallaVacia.style.display = "none"
    pantallaFormulario.style.display = "flex"
    pantallaListado.style.display = "none"
    pantallaDetalles.style.display = "none"
    form.reset()
    document.getElementById('btnFlot').style.visibility = "hidden"
})

let cont = 1
let pantallaFormularioBtn = document.getElementById('button-pantallaVaciaAdd').addEventListener('click', mostrarListado = () => {
    /*pantallaFormulario.style.display = "none"*/
    /*alert("La resolución de tu pantalla es: " + screen.width + " x " + screen.height)*/

    let pantalla = screen.width;
    /*alert(pantalla)*/

    if (pantalla > 768 ) {
        pantallaFormulario.style.display = "flex"
        pantallaListado.style.display = "flex"
        document.getElementById('btnFlot').style.display = "hidden"
    
        let titu = document.getElementById('formularioTitulo').value;
        let cod = document.getElementById('tipo').value;
        let combo = document.getElementById('tipo');
        let select = combo.options[combo.selectedIndex].text;
        let descri = document.getElementById('descripcion').value;
    
        if (select == "Viveres") {
            var imagencita = "viveres.png";
        }else if (select == "Lacteos"){
            var imagencita = "lacteos.png";
        }else if(select == "Verduras") {
            var imagencita = "verduras.png";
        }else if(select == "Electronica") {
            var imagencita = "electronica.png"
        }
    
        let modelo = `<li>
                            <img src="/images/${imagencita}" alt="">
                            <h3>${titu}</h3>
                            <button onClick=ver(${cont}) id="listado-btn-verDetalle">ver detalle</button>
                        </li>`
    
        let padre = document.getElementById('contenedor');
        padre.innerHTML += modelo ;
        
        listado_compra[cont] = {
            titu,
            imagencita,
            descri    
        }
    
        cont ++;
        form.reset()


    } else {
        pantallaFormulario.style.display = "none"
        pantallaListado.style.display = "flex"
        document.getElementById('btnFlot').style.visibility = "hidden"
    
        let titu = document.getElementById('formularioTitulo').value;
        let cod = document.getElementById('tipo').value;
        let combo = document.getElementById('tipo');
        let select = combo.options[combo.selectedIndex].text;
        let descri = document.getElementById('descripcion').value;
    
        if (select == "Viveres") {
            var imagencita = "viveres.png";
        }else if (select == "Lacteos"){
            var imagencita = "lacteos.png";
        }else if(select == "Verduras") {
            var imagencita = "verduras.png";
        }else if(select == "Electronica") {
            var imagencita = "electronica.png"
        }
    
        let modelo = `<li>
                            <img src="/images/${imagencita}" alt="">
                            <h3>${titu}</h3>
                            <button onClick=ver(${cont}) id="listado-btn-verDetalle">ver detalle</button>
                        </li>`
    
        let padre = document.getElementById('contenedor');
        padre.innerHTML += modelo ;
        
        listado_compra[cont] = {
            titu,
            imagencita,
            descri    
        }
    
        cont ++;
        form.reset()

    }
    
}) 

botoncito.addEventListener('click', (e) => {
    console.log(e)
    pantallaDetalles.style.display = "none"
    pantallaListado.style.display = "flex"
    document.getElementById('btnFlot').style.visibility = "visible"
})


let pantalla = screen.width;
if (pantalla > 768) {
    document.getElementById('btnFlot').style.display = "none"

    function ver(id) {
        /*alert('probando')*/
    
        const objeto = listado_compra[id] 
        /*pantallaFormularioBtn.style.display = "flex"*/
        pantallaListado.style.display = "none";
        pantallaDetalles.style.display = "flex"

        let modelo2 = ` <img src="/images/${objeto.imagencita}" alt="">
                        <h3>${objeto.titu}</h3>
                        <p>${objeto.descri}</p>
                        `
        let padre2 = document.getElementById('detalles');
    
        padre2.innerHTML = modelo2;
    
    }
    
} else {
    function ver(id) {
        /*alert('probando')*/
    
        const objeto = listado_compra[id] 
        
        pantallaListado.style.display = "none";
        pantallaDetalles.style.display = "flex"

        let modelo2 = ` <img src="/images/${objeto.imagencita}" alt="">
                        <h3>${objeto.titu}</h3>
                        <p>${objeto.descri}</p>
                        `
        let padre2 = document.getElementById('detalles');
    
        padre2.innerHTML = modelo2;
    
    }
}










