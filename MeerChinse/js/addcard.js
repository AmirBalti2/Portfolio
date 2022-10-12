let cart=document.querySelectorAll("add-cart")


for(let i=0; i<cart.length;i++){

    cart[i].addEventListener('click',()=>{
        cartNumber();
    })

    function cartNumber(){
        let productNumber=localStorage.getItem
        localStorage.setItem('cartNumber',1)
    }
}
