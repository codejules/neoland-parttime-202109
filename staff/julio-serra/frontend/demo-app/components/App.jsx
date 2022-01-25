const { useState } = React

function App() {
    const [view, setView] = useState(sessionStorage.token ? 'home' : 'login') //al cambiar de vista se añade View
    const [token, setToken] = useState(sessionStorage.token ? sessionStorage.token : 'null')

const onRegister = () => setView('register')
const onLogin = () => {
    setView('home')
    setToken(token)
    }
const onLoginClick = () => setView('login')
const logOut = () => {
    setView('login')
    setToken(null)
}
        if (view === 'login')
            return <Login
                onRegisterClick={onRegister}
                onLoggedIn={onLogin}
            />

        else if (view === 'register')
            return <Register
                onLoginClick={onLoginClick}
                onRegistered={onRegister}
            />

        else if (view === 'PostRegister')
            return <PostRegister
                onLoginClick={onLoginClick} />

        else if (view === 'home')
            return <Home token={token}
                logOut={logOut}    
            />
}