const cartContainer = document.querySelector('#cartContainer')

const vaciarCarritoBtn = document.querySelector('#vaciarCarrito')


const imprimirCarrito = () =>{
    cartContainer.innerHTML =  ''
    const productoAlmacenados = JSON.parse(localStorage.getItem('listaDeCarrito'))
    productoAlmacenados.forEach((producto) => {
        const cartRow = document.createElement('div')
        cartRow.className = 'cartRow'
        cartRow.innerHTML = 
        `
        <div class="cartImg">
        <img src="${producto.img}">
        </div>
        <div class="cartTitle"><span> Libro ${producto.name}</span></div>
        <div class="cartDesc"><span> ${producto.format} Formato</span></div>
        <div class="cartPrice"><span> $${producto.price}</span></div>
        `
        cartContainer.append(cartRow)
    })




}





if (localStorage.getItem('listaDeCarrito')) {
    carrito = JSON.parse(localStorage.getItem('listaDeCarrito'))
    imprimirCarrito()
}


const vaciarCarrito = () => {
    if (localStorage.getItem('listaDeCarrito')) {
        localStorage.removeItem('listaDeCarrito')
    }
    carrito = []
    imprimirCarrito()
    
}


vaciarCarritoBtn.addEventListener('click', vaciarCarrito)


document.querySelector('.RealizarCompra').addEventListener('click', () => {
    Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Saved!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })

})





