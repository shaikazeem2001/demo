document.addEventListener('DOMContentLoaded',()=>{

    const products=[
        {'name':'milk','price':20},
        {'name':'chocolates','price':30},
        {'name':'pepsi','price':40},
    ]

    let productdiv=document.querySelector('.products');
    let totaldiv=document.querySelector('.total')
    let cart={};
    let totalprice=0;

    products.forEach(product=>{
        let div=document.createElement('div');
        div.className='productdiv';
        div.innerHTML=`<span>${product.name} - $ ${product.price}</span> 
        <button>Add to cart</button>
        `;
        div.querySelector('button').addEventListener('click',function(){
            addtocart(product);
        })
      
        productdiv.appendChild(div)
    });

function addtocart(product){
    if(!cart[product.name]){
        cart[product.name]={
            price:product.price,
            quantity:1,
        }
    }
        else{
            cart[product.name].quantity++;
        }
        totalprice+=product.price;
        rendercart();
    }
function rendercart(){
totaldiv.innerHTML= `<h2>cart</h2>`;
for(let item in cart){
    const p=document.createElement('p');
    p.textContent = `${item} x ${cart[item].quantity}`;
    totaldiv.appendChild(p);
};
const total = document.createElement('h3');
total.textContent = `Total: $${totalprice}`;
totaldiv.appendChild(total);

}
})