
const productos = [Book1, Book2, Book3, Book4, Book5, Book6, Book7, Book8, Book9, Book10, Book11, Book12, Book13, Book14, Book15]

const cardContainer = document.querySelector('#cardContainer')

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





let carrito = []

const agregarProducto = (e) => {
    const productoElegido = e.target.getAttribute('data-id')
    // console.log(productoElegido)
    const producto = productos.find((producto) => producto.id == productoElegido)
    carrito.push(producto)
     console.log(carrito)
    localStorage.setItem('listaDeCarrito', JSON.stringify(carrito))
}


const botonesCompra = document.querySelectorAll('.buttonCTA')



botonesCompra.forEach((botonCompra) => {
    botonCompra.addEventListener('click', agregarProducto)
})


// --------------------------------------------------------------------------
 
//carrito




















































 

// const LibrosListContainer = document.querySelector('.cardContainer')


// //Funciones

// const renderizarListaDeLibros = () => {
//   productos.forEach((producto) => {
//       const BookButton = document.createElement('button')
//       BookButton.className = 'cardCTA'
//       BookButton.innerHTML = `
//           <div class="imgBx">
//              <img src="${producto.img}" alt="">
//              <span class= "cardID">${producto}</span>
//           </div>
//         <div class="content">
//           <div class="details">
//                 <h2 class="cardname">${producto.name}<br><span class="autor">${producto.autor}</span></h2>
//                <div class="data">
//                      <h3 class="date">${producto.date}<br><span>Fecha de publicación</span></h3>
//                      <h3 class="format">${producto.format}<br><span>Formato</span></h3>
//                      <h3 class="price">$${producto.price}<br><span>Precio</span></h3>
//                </div>
//                <div class="actionBtn">
//                    <button class="cardCTA">Añadir al carrito</button>
//                    <button class="info"><a href="${producto.url}"> Más info</a></button>
//                </div>
//           </div>
//         </div>

//      `
    
//      LibrosListContainer.append(BookButton)

//     })
    
// }

// // Ejecuciones

// renderizarListaDeLibros()


