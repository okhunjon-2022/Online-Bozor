const cart = []

const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADD_TO_CART":
            //Check if Product is Already Exist
            const exist = state.find((i) => i.id === product.id)
            if (exist) {
                // Increase The Quantity
                return state.map((i) => i.id === product.id ? { ...i, qty: i.qty + 1 } : i)
            } else {
                const product = action.payload
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1
                    }
                ]
            }
            break;
        case "DELETE_FROM_CART":
            const exist1 = state.find((i) => i.id === product.id)
            if (exist1.qty === 1) {
                return state.filter((x) => x.id !== exist1.id)
            } else {
                return state.map((x) => x.id === product.id ? { ...x, qty: x.qty - 1 } : x)
            }
            break
        default:
           return state
            break;
    }
}

export default handleCart