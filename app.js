let productos


let carrito = JSON.parse(localStorage.getItem('listaDeCarrito')) || []


const cardContainer = document.querySelector('#cardContainer')



const renderizarProductos = () => {
    productos.forEach((producto) => {
        const card = document.createElement('div')
        card.className = 'card'
        card.innerHTML = `
       
             <div class="imgBx">
                 <img src="${producto.img}" alt="">
             </div>
           <div class="content">
               <div class="details">
                    <h2 class="cardname">${producto.name}<br><span class="autor">${producto.autor}</span></h2>
                 <div class="data">
                       <h3 class="date">${producto.date}<br><span>Fecha de publicación</span></h3>
                       <h3 class="format">${producto.format}<br><span>Formato</span></h3>
                       <h3 class="price">$${producto.price}<br><span>Precio</span></h3>
                 </div>
                  <div class="actionBtn">
                        <button data-id="${producto.id}" class="buttonCTA">Añadir al carrito</button>
                        <button class="info"><a href="${producto.url}"> Más info</a></button>
                  </div>
               </div>
           </div>
     
        `

        cardContainer.append(card)

    })


    const botonesCompra = document.querySelectorAll('.buttonCTA')

    botonesCompra.forEach((botonCompra) => {
        botonCompra.addEventListener('click', agregarProducto)
    })



    botonesCompra.forEach(btn => btn.addEventListener('click', () =>{
        Toastify({
            text: "En Tu Carrito",
            duration: 3000,
            destination: "",
            newWindow: true,
            close: false,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            className: "toa",
            onClick: function () {} // Callback after click
        }).showToast();


    }))

}



const cargarListaProductos = async () => {
    const res = await fetch('./data/book.json')
    const {
        data
    } = await res.json()
    productos = data
    renderizarProductos(productos)
}




const agregarProducto = (e) => {
    const productoElegido = e.target.getAttribute('data-id')
    const producto = productos.find((producto) => producto.id == productoElegido)
    carrito.push(producto)
    localStorage.setItem('listaDeCarrito', JSON.stringify(carrito))
}


cargarListaProductos()