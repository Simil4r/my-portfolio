const initState = {
    cart: []
}

const cartReducer = (state = initState, action) => {
    switch(action.type){
        case 'ADD_PRODUCT':
            let newCart = [...state.cart, {id: action.id, amount: 1}]
            return{
                ...state,
                cart: newCart
            }
        case 'SET_PRODUCTS':
            return{
                ...state,
                cart: [...action.elements]
            }
        case 'DELETE_PRODUCT':
            return {
                ...state,
                cart: state.cart.filter(elem=>elem.id!==action.id)
            }
        case 'UPDATE_AMOUNT':
            let index; 
            state.cart.filter((elem, i)=>{if(elem.id===action.id)index=i; return 0})
            return {
                ...state,
                cart: state.cart.map((elem, i)=>{
                    if(index!==i)
                    return elem
                    return {id: action.id, amount: action.amount}
                }
                )
            }
        default: return{
            ...state
        }
    }
}

export default cartReducer