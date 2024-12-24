import { createContext } from "react"

export let Context = createContext(null)

function ContextFunction({ children }) {

    let url = "https://tomato-food-web-five.vercel.app"

    let contextValue = {
        url
    }
    
    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}

export default ContextFunction
