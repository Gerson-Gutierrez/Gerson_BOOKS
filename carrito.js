const cartContainer = document.querySelector('#cartContainer')



let productoAlmacenados

const imprimirCarrito = () => {
  productoAlmacenados = JSON.parse(localStorage.getItem('listaDeCarrito'))
  cartContainer.innerHTML = ''
  productoAlmacenados.forEach((producto) => {
    const cartRow = document.createElement('div')
    cartRow.className = 'cartRow'
    cartRow.innerHTML =
      `
        <div class="cartImg">
        <img class="imagenCarrito" src="${producto.img}">
        </div>
        <div class="cartTitle"><span> Libro ${producto.name}</span></div>
        <div class="cartDesc"><span> ${producto.format} Formato</span></div>
        <div class="cartPrice"><span> $${producto.price}</span></div>
        `
    cartContainer.append(cartRow)
  })
}


productoAlmacenados = JSON.parse(localStorage.getItem('listaDeCarrito')) || []


const vaciarCarrito = () => {
  localStorage.getItem('listaDeCarrito') &&  localStorage.removeItem('listaDeCarrito')
  carrito = []
  imprimirCarrito()
}

const vaciarCarritoBtn = document.querySelector('#vaciarCarrito')

vaciarCarritoBtn.addEventListener('click', vaciarCarrito)


document.querySelector('.RealizarCompra').addEventListener('click', () => {
  Swal.fire({
    showClass: {
        popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
    },


    icon: 'success',
    text: 'compra confirmada',
    background: ' url(https://miro.medium.com/max/3200/0*FjaSRbWIAyCEhIci.jpeg)  ',
    title: 'Gracias por su Compra',
    color: '#fff',
    
})

})





imprimirCarrito()