//For Add Item to Cart
export const addCart = (product)=>{
    return{
        type:"ADD_TO_CART",
        payload:product
    }
}


//For Delete Item to Cart
export const delCart=(product)=>{
    return{
        type:"DELETE_FROM_CART",
        payload:product
    }
}