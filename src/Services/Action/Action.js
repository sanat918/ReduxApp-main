import { ADD_TO_CART, REMOVE_TO_CART } from "../Constant"
export const addToCart =(data) =>{
    // console.log("action",data);
 return {
    type: ADD_TO_CART,
    data:data
 }
}

export const removeToCart =(data) =>{
    // console.log("call remove to cart action");
return {
    type:REMOVE_TO_CART,
    data:data
}
}


