import { useReducer } from "react"
// import ChildComponent from "./ChildComponent"

const initialState =  {
    cart: [],
    totalItems: 0,
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_CARD':
            const addItems = [...state.cart || [], action.payload]
            return {
                cart: addItems,
                totalItems: addItems.length
            }
        case 'REMOVE_FROM_CARD':
            const removeItems = [...state.cart.filter((item, index) => item !== action.payload)]
            return {
                cart: removeItems,
                totalItems: removeItems.length
            }
        default:
            throw new Error()
    }
}

const ParentComponent = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const addToCart = (item) => {
        dispatch({ type: 'ADD_TO_CARD', payload: item })
    }

    const removeFromCart = (index) => {
        dispatch({ type: 'REMOVE_FROM_CARD', payload: index })
    }
    
    return (
        <div>
            <h1>SHOP</h1>
            <div>
            <div>
                Leon <button onClick={ () => addToCart('Leon') }>Add to Cart</button>
            </div>
            <div>
                Nike <button onClick={ () => addToCart('Nike') }>Add to Cart</button>
            </div>
            <div>
                Hanfast <button onClick={ () => addToCart('Hanfast') }>Add to Cart</button>
            </div>
        </div>
            <h1>CART <h2>Total Items { state.totalItems }</h2></h1>
            <ul>
                {state.cart.map((item, index) => (
                    <li key={index}>{ item } <button onClick={() => removeFromCart(index)}>Remove from Cart</button></li>
                ))}
            </ul>
        </div>
    )
}

export default ParentComponent