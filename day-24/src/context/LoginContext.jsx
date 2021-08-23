import React, {useReducer} from 'react'

const Context = React.createContext();
export {Context};

function reducer(state, action){
    switch (action.type) {
        case 'login':
            return {
                loading: true,
                loggedin: false,
            }
        
        case 'loading':
            return{
                loading: false,
                loggedin : !(state.loggedin),
            }
        
        case 'logout':
            return {
                loading: true,
                loggedin: true,
            }
        
        default:
            break;
    }
}

const LoginContext = ({children}) => {
    const [state, dispatch] = useReducer(reducer, {loading: false, loggedin: false});
    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}

export default LoginContext
