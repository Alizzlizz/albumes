const productos = [
    { 
        nombre: 'Butter',
        descripcion: 'Este álbum sencillo incluye los éxitos "Butter" y "Permission to Dance", mostrando el lado más brillante y pop del grupo. Es una celebración del verano y la alegría, con una estética vibrante y juvenil.',
        precio: 624.00,
        imagen: 'butter.jpg'
    },
    {
        nombre: 'The Most Beautiful Moment in Life Pt.1',
        descripcion: 'Este mini álbum marca el inicio de la era HYYH, explorando la juventud, el crecimiento y la melancolía. Incluye temas como “I Need U” y “Hold Me Tight”.',
        precio: 547.00,
        imagen: 'hyyh_pt1.jpg'
    },
    {
        nombre: 'O!RUL8,2?',
        descripcion: 'Este es el segundo mini álbum de BTS, cuyo título se pronuncia “Oh! Are You Late, Too?”. Explora temas de autodescubrimiento, rebelión juvenil y la búsqueda de identidad. Con una mezcla de hip-hop y R&B, canciones como “N.O” y “Attack on Bangtan” transmiten un mensaje de resistencia frente a las normas sociales.',
        precio: 499.00,
        imagen: 'o_rul8_2.jpg'
    },
    {
        nombre: 'You Never Walk Alone',
        descripcion: 'Este álbum es una extensión del álbum “WINGS”, con temas adicionales como “Spring Day” y “Not Today”. Refleja esperanza, consuelo y unidad.',
        precio: 1367.00,
        imagen: 'you_never_walk_alone.jpg'
    }
];

const catalogo = document.getElementById('catalogo');

function crearTarjetaProducto(producto) {
    const card = document.createElement('div');
    card.className = 'producto-card';

    const imagen = document.createElement('img');
    imagen.src = producto.imagen;
    imagen.alt = producto.nombre;

    const titulo = document.createElement('h2');
    titulo.textContent = producto.nombre;

    const descripcion = document.createElement('p');
    descripcion.textContent = producto.descripcion;

    const precio = document.createElement('span');
    precio.className = 'precio';
    precio.textContent = `$${producto.precio.toFixed(2)}`;

    const boton = document.createElement('button');
    boton.className = 'btn-comprar';
    boton.textContent = 'Comprar';

    card.appendChild(imagen);
    card.appendChild(titulo);
    card.appendChild(descripcion);
    card.appendChild(precio);
    card.appendChild(boton);

    // ✨ Animación suave al aparecer
    card.style.opacity = 0;
    setTimeout(() => card.style.opacity = 1, 100);

    return card;
}

function renderizarCatalogo() {
    productos.forEach(producto => {
        const tarjeta = crearTarjetaProducto(producto);
        catalogo.appendChild(tarjeta);
    });
}

window.onload = renderizarCatalogo;
