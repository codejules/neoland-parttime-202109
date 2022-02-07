import { useState } from 'react'
import Login from './Login'
import Register from './Register'
import PostRegister  from './PostRegister'
import Home from './Home'
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {
    const [view, setView] = useState(sessionStorage.token ? 'home' : 'login') //al cambiar de vista se añade View
    const [token, setToken] = useState(sessionStorage.token ? sessionStorage.token : null)

const onRegister = () => setView('register')

const onLogin = token => {
    setToken(token)
    setView('home')
    }
    
const goLogin = () => setView('login')


const logOut = () => {
    setView('login')
    setToken(null)
}


return <Routes>
<Route path="*" element={token ? <Home token={token} onLoggedOut={logOut} /> : <Navigate to="login" />} />
<Route path="login" element={!token ? <Login onRegisterClick={onRegister} onLoggedIn={onLogin} /> : <Navigate to="/" />} />
<Route path="register" element={!token ? (view !== 'register-success' ? <Register onLoginClick={goLogin} onRegistered={onRegister} /> : <PostRegister onLoginClick={goLogin} />) : <Navigate to="/" />} />
</Routes>

        // if (view === 'login')
        //     return <Login
        //         onRegisterClick={onRegister}
        //         onLoggedIn={onLogin}
        //     />

        // else if (view === 'register')
        //     return <Register
        //         onLoginClick={goLogin}
        //         onRegistered={onRegister}
        //     />

        // else if (view === 'PostRegister')
        //     return <PostRegister
        //         onLoginClick={goLogin} />

        // else if (view === 'home')
        //     return <Home token={token}
        //     onLoggedOut={logOut}    
        //     />
}

export default App