import React, {useContext} from 'react'
import {Context} from '../context/LoginContext'


const Home = () => {
    
    const {state, dispatch} = useContext(Context);

    function buttonClick(){
        if(!state.loggedin){
            dispatch({type: 'login'});
        }
        else{
            dispatch({type: 'logout'});
        }
        setTimeout(() => {
            dispatch({type: 'loading' })
        }, 2000);
    }

    return (
        <div>
            <h1>Home </h1>
            <br/>
            you can access profile and dashboard only if you're logged in
            <br/>
            <br/>
            {
            state.loading? 'Loading.... ' : 
                <button onClick={buttonClick}>
                {
                    state.loggedin?
                        'Logout'
                    :
                        'Login'
                }
                </button>
            }
        </div>
    )
}

export default Home
