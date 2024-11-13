import { ADD_CARD_ACTION, REMOVE_STORE_ACTION, CATEGORY_STORE_ACTION } from "./actionType"


const initialState = {
    products: [
        { id: 0, name: "Tufli", price: "12$", category: "tufli" },
        { id: 1, name: "Bosh kiyim", price: "5$", category: "bosh-kiyim" },
        { id: 2, name: "Shim", price: "20$", category: "shim" }
    ],
    card: [],
    categoryFilter: "All",
}


export const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CARD_ACTION:
            return {
                ...state,
                card: [...state.card, action.payload]
            }
        case REMOVE_STORE_ACTION:
            return {
                ...state,
                card: state.card.filter(item => item.id !== action.payload)
            }
        case CATEGORY_STORE_ACTION:
            return {
                ...state,
                categoryFilter: action.payload
            }

        default:
            return state
    }
}
