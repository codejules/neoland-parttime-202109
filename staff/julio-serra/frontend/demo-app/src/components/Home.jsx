import { useState, useEffect } from 'react'
import retrieveUser from '../logic/retrieve-user'
import Search from './Search'
import Results from './Results'
import Detail from './Detail'
import Cart from './Cart'
import Favs from './Favs'


function Home({ token, onLoggedOut }) {
    const [name, setName] = useState(null)
    // const [city, setCity] = useState(null) // forecast app
    const [query, setQuery] = useState(null)
    const [vehicleId, setVehicleId] = useState(null)
    const [view, setView] = useState(null)

    // const apiKey = '73KP3CVXGQF33DT6QHF9JVD7B' // forecast app

    useEffect(() => {

        try {
            retrieveUser(token, (error, user) => {
                if (error) {
                    alert(error.message)

                    delete sessionStorage.token

                    onLoggedOut()

                    return
                }

            const { name } = user

                setName(name)
                // setCity(city)
            })
        } catch (error) {
            alert(error.message)

            delete sessionStorage.token

            onLoggedOut()
        }
    }, [])

    const showFavs = () => {
        setView('favs')
    }

    const showCart = () => {
        setView('cart')
    }

    const logout = () => {
        delete sessionStorage.token

        onLoggedOut()
    }

    const showResults = query => {
        setView('results')
        setQuery(query)
    }

    const showDetail = vehicleId => {
        setVehicleId(vehicleId)
        setView('detail')
    }


    if (name)
        return <div>
            <h1>Hello, {name}!</h1>

            <button onClick={showFavs}>Favs</button>

            <button onClick={showCart}>Cart</button>

            <button onClick={logout}>Logout</button>

            {/* {city && <Forecast apiKey={apiKey} city={city} />} */}

            <Search query={query} onQueryChange={showResults} />

            {view === 'results' && <Results
                query={query}
                onItemClick={showDetail}
            />}

            {view === 'detail' && <Detail itemId={vehicleId} />}

            {view === 'favs' && <Favs onItemClick={showDetail} />}

            {view === 'cart' && <Cart onItemClick={showDetail} />}
        </div>
    else return null
}

export default Home