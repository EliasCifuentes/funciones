const color1 = document.getElementById("color1")
const color2 = document.getElementById("color2")
const color3 = document.getElementById("color3")
const color4 = document.getElementById("color4")
const keys = document.getElementById("key")

/* Cambiar colores a negro al hacer click */ 

const cambiarColor = (id, color) =>  id.style.backgroundColor = color


color1.addEventListener("click", () => {
    cambiarColor (color1, 'black')
})

color2.addEventListener("click", () => {
    cambiarColor (color2, 'black')
})

color3.addEventListener("click", () => {
    cambiarColor (color3, 'black')
})

color4.addEventListener("click", () => {
    cambiarColor (color4, 'black')
})

/* Cambiar colores al div al presionar una tecla */ 

document.addEventListener("keydown", function (opcion) {
    if(opcion.key === "a" || opcion.key === "A"){
        cambiarColor (keys, 'pink')
    }
    else if (opcion.key === "s" || opcion.key === "S"){
        cambiarColor (keys, 'orange')
    }
    else if (opcion.key === "d" || opcion.key === "D"){
        cambiarColor (keys, '#80DAEB')
    }  
})

/* Agregar Div y cambiar colores */

const agregarElemento = () => {
    contenedor = document.getElementById("contenedor"); 
    nuevoElemento = document.createElement("div");
    nuevoElemento.style.border = "1px solid black"
    nuevoElemento.style.height = "200px";
    nuevoElemento.style.width = "200px";
    nuevoElemento.style.margin = "5px";

    contenedor.appendChild(nuevoElemento);
    }

document.addEventListener("keydown", function (opcion) {
    if(opcion.key === "q" || opcion.key === "Q"){
        agregarElemento ()
        cambiarColor(nuevoElemento, 'purple')
    }
    else if (opcion.key === "w" || opcion.key === "w"){
        agregarElemento ()
        cambiarColor(nuevoElemento, 'grey')
    }
    else if (opcion.key === "e" || opcion.key === "E"){
        agregarElemento ()
        cambiarColor(nuevoElemento, 'brown')
    }  
})


    

  





