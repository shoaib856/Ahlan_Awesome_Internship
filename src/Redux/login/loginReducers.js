const initialState = {
    email: ""
    , password: ""
}
const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state
                , email: action.payload.email
                , password: action.payload.password
            }
        default:
            return state
    }
}
export default loginReducer