import { useEffect, useState } from 'react'
import { retrieveAllSpaces } from '../logic';
import CardItem from './CardItem';
import { useNavigate, Route, Routes } from 'react-router-dom'

export default function Cards() {

    const navigate = useNavigate()
    const [spaces, setSpaces] = useState()

    useEffect(() => {
        getAllSpaces()
    }, [])

    const getAllSpaces = () => {
        try {
            retrieveAllSpaces()
                .then(spaces => {
                    setSpaces(spaces)
                })
        } catch (error) {
            alert({ error: error.message })
        }
    }

    const [count, setCount] = useState(2)


    return (

        <>
            <section className='bg-color-spaces pb-20'>
                <h1 className='nav__font black text-4xl py-8 pl-14'>Our Spaces</h1>
                <div className='grid grid-cols-2'>
                    {spaces ? spaces.slice(0, count).map(space => {
                        return <li className='list-none justify-center' key={space.id}>
                            <CardItem space={space} />
                        </li>
                    })
                        : <p>Not found spaces</p>
                    }
                </div>
            </section>
        </>
    )
}