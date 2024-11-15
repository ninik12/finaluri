let column =document.querySelectorAll(".column")
let products =document.querySelectorAll(".product-name")
console.log(products)
let input =document.querySelector("#inp")

input.addEventListener('input', ()=>{
    input.value.toLowerCase();
    display(products)


})
function display (product){
    product.forEach(el =>{
        column.textContent = `${el.products} `
        

    })

}