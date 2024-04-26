import { createContext, useEffect, useState, useReducer } from "react"

export const AuthContext = createContext();

// export const authReducer = (state, action) => {
//     switch (action.type) {

//         case "LOGIN":
//             return { user: action.payload }
//         case "LOGOUT":
//             return { user: null }
//         default:
//             return state

//     }
// }


// export const AuthContextProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(authReducer, {
//         user: null
//     })

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(localStorage.getItem("user"))


    // useEffect(() => {

    //     const user = JSON.parse(localStorage.getItem("user"));

    //     if (user) {
    //         dispatch({ type: "LOGIN", payload: user })
    //     }
    // }, [])



    // console.log("Authcontext: ", state)

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )

}

