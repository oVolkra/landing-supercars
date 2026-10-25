// Array de autos premium
const AUTOS_PREMIUM = [
    {
        modelo: "Aston Martin DB11",
        descripcion: "Elegancia británica y potencia pura en un gran turismo.",
        imagen: "assets/premiums-y-superdeportivos/aston-martin-db11.png",
    },
    {
        modelo: "Audi R8",
        descripcion: "Ingeniería de competición y aerodinámica extrema.",
        imagen: "assets/premiums-y-superdeportivos/audi-r8.png",
    },
    {
        modelo: "Chevrolet Corvette",
        descripcion: "Diseño agresivo, motor central y adrenalina pura.",
        imagen: "assets/premiums-y-superdeportivos/chevrolet-corvette.png",
    },
    {
        modelo: "Ford Mustang",
        descripcion: "Músculo, actitud y el rugido inconfundible de un clásico.",
        imagen: "assets/premiums-y-superdeportivos/ford-mustang.png",
    },
    {
        modelo: "Mercedes-Benz AMG",
        descripcion: "Lujo ejecutivo, tecnología de punta y furia deportiva.",
        imagen: "assets/premiums-y-superdeportivos/mercedes-benz-amg.png",
    },
    {
        modelo: "Porsche 911",
        descripcion: "Diseño atemporal y deportividad en su estado más puro.",
        imagen: "assets/premiums-y-superdeportivos/porsche-911.png",
    },
];

// Array de autos nobles
const AUTOS_NOBLES = [
    {
        modelo: "Audi A3",
        descripcion: "Sofisticación premium, tecnología y agilidad en un formato compacto.",
        imagen: "assets/nobles-y-deportivos/audi-a3.png",
    },
    {
        modelo: "Chevrolet Cruze",
        descripcion: "Confort moderno, eficiencia turbo y un andar suave todos los días.",
        imagen: "assets/nobles-y-deportivos/chevrolet-cruze.png",
    },
    {
        modelo: "Fiat Cronos",
        descripcion: "El sedán confiable, espacioso y económico ideal para la rutina diaria.",
        imagen: "assets/nobles-y-deportivos/fiat-kronnos.png",
    },
    {
        modelo: "Nissan Sentra",
        descripcion: "Elegancia ejecutiva, marcha silenciosa y máxima seguridad urbana.",
        imagen: "assets/nobles-y-deportivos/nissan-sentra.png",
    },
    {
        modelo: "Toyota Corolla",
        descripcion: "Calidad insuperable, durabilidad legendaria y el balance perfecto en cada viaje.",
        imagen: "assets/nobles-y-deportivos/toyota-corolla.png",
    },
    {
        modelo: "Volkswagen Golf",
        descripcion: "Dinámica impecable, versatilidad y la precisión alemana de una referencia indiscutida.",
        imagen: "assets/nobles-y-deportivos/volkswagen-golf.png",
    },
];

/* Crea el HTML de la tarjeta de un auto.
Recibe un objeto auto (modelo, descripcion, imagen).
Devuelve un string con el HTML armado con los datos del auto. */
function crearTarjeta(auto) {
    return `
        <div class="col-12 col-md-6 col-lg-4">
            <article class="tarjeta-auto">
                <img src="${auto.imagen}" alt="${auto.modelo}" loading="lazy">
                <div class="tarjeta-auto-cuerpo">
                    <h4>${auto.modelo}</h4>
                    <p>${auto.descripcion}</p>
                </div>
            </article>
        </div>
    `;
}

/* Carga las tarjetas de los autos en la página.
Recibe un array de autos y el id del contenedor de las tarjetas. */
function cargarTarjetas(lista, idGrid) {
    const grid = document.getElementById(idGrid);
    const tarjetas = lista.map(crearTarjeta);
    grid.innerHTML = tarjetas.join("");
}

// Creación de las tarjetas de autos
cargarTarjetas(AUTOS_PREMIUM, "grid-premium");
cargarTarjetas(AUTOS_NOBLES, "grid-noble");

// Selector del catálogo, paneles de cada categoría y botones "Volver".
const selectorCatalogo = document.getElementById("catalogo-selector");
const panelPremium = document.getElementById("premium");
const panelNoble = document.getElementById("noble");
const botonesVolver = document.getElementsByClassName("catalogo-volver"); // Como hay un boton por panel, los traigo con una clase

// Muestra la vista que elige el usuario y oculta las demás.
function mostrarVista(vista) {
    selectorCatalogo.classList.add("oculto");
    panelPremium.classList.add("oculto");
    panelNoble.classList.add("oculto");

    vista.classList.remove("oculto");
}

document.getElementById("boton-premium").addEventListener("click", () => mostrarVista(panelPremium));
document.getElementById("boton-noble").addEventListener("click", () => mostrarVista(panelNoble));

// Recorro los botones "Volver" y les asigno el mismo listener.
for (let i = 0; i < botonesVolver.length; i++) {
    botonesVolver[i].addEventListener("click", () => mostrarVista(selectorCatalogo));
}

// Contacto
const formulario = document.getElementById("contacto-formulario");
const mensajeConfirmacion = document.getElementById("mensaje-confirmacion-formulario");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault(); // Para que el navegador no envíe el formulario y recargue la página.
    mensajeConfirmacion.classList.remove("oculto");
    formulario.reset();
});
