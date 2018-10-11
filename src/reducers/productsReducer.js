const initialState ={
    productArr:[],
    error:"",
    masterArr:[]
};

export const ProductReducer = (state=initialState,action)=>{
    if(action.type === "ADD_DEFAULT_PRODUCTS_FULFILLED"){
        return {
            ...state,
            productArr:state.productArr.concat(action.payload)
        }
    }
    else if(action.type === "ADD_DEFAULT_PRODUCTS_REJECTED"){
           return{
               ...state,
               error:"LOOKS LIKE YOUR INTERNET IS DOWN......."
           }
    }
    else if(action.type ==="INITIAL_ADD"){
           return {
               ...state,
                masterArr:state.masterArr.concat(action.payload.tempProduct)
           }
    }
    else if(action.type === "COMMIT_CHANGES"){
           return{
               ...state,
               masterArr:[],
               productArr:state.productArr.concat(action.payload)
           }
    }
return state;
}