import React, { useEffect, useState,  } from "react"
import { Route, Redirect } from 'react-router-dom'


// const fakeAuth = {
//     isAuthenticated: false,
//     authenticate(cb) {
//       this.isAuthenticated = true
//       setTimeout(cb, 100) // fake async
//     },
//     signout(cb) {
//       this.isAuthenticated = false
//       setTimeout(cb, 100) // fake async
//     }
// }



function PrivateRoute({ children, ...rest }) {

    const [fakeAuth, setFakeAuth] = useState({ isAuthenticated: false })

    useEffect(() => {
        
        console.log('render', {fakeAuth})
        
        setFakeAuth(fakeAuth.isAuthenticated = true)
          
        // return() =>{
        //     console.log('unmount')
        //     console.log({fakeAuth})
            
        // }

    }, [fakeAuth]);

    return (
        <Route {...rest} render={({ location }) => {
            return fakeAuth.isAuthenticated === true
                ? children
                : <Redirect to={{
                    pathname: '/login',
                    state: { from: location }
                }} />
        }} />
    )

}



export default PrivateRoute;