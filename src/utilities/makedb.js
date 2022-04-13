const addToDb =(id) =>{

    let ShoppingCart={};

    const storeCart =localStorage.getItem('shopping-cart')
    if(storeCart){
    ShoppingCart=JSON.parse(storeCart)
    }
    else{
        ShoppingCart={}
    }
  

    const quantity=ShoppingCart[id];
    if(quantity){
       
        const newQuantity=(quantity) +1;
        ShoppingCart[id]=newQuantity;
        // localStorage.setItem(id,newQuantity)
    }else{
        ShoppingCart[id]=1;
        // localStorage.setItem(id,1)
    }
   
    localStorage.setItem('shopping-cart',JSON.stringify(ShoppingCart))
}

const getStoreCart=() =>{
    let ShoppingCart={};

    const storeCart =localStorage.getItem('shopping-cart')
    if(storeCart){
    ShoppingCart=JSON.parse(storeCart)
    
    }
    return(ShoppingCart)

  
}

const removeFromDb=id=>{
    const storeCart=localStorage.getItem('shopping-cart')
    if(storeCart){
        const shoppingCart=JSON.parse(storeCart)
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.getItem('shopping-cart',JSON.parse(shoppingCart))
        }
    }
    
}
const deleteShoppingCart =()=>{
    localStorage.removeItem('shopping-cart')
}
export {addToDb,
    getStoreCart,
  deleteShoppingCart,
    removeFromDb}