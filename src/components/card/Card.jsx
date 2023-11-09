import React, { useState, useEffect } from 'react'
import ReactStars from 'react-stars'
import { getDocs } from '@firebase/firestore';
import { moviesRef } from '../../firebase/firebase';
import { InfinitySpin } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import './Card.css'

const Card = () => {
    const [Data, setData] = useState([]);
    const [Loading, setLoading] = useState(false)

    useEffect(() => {
        async function getData() {
            setLoading(true)
            const _data = await getDocs(moviesRef)
            _data.forEach((doc) => {
                setData((prv) => [...prv, { ...(doc.data()), id: doc.id }])
            })
            setLoading(false)
        }
        getData();
    }, [])

    return (
        <div className='flex flex-wrap justify-between p-2 mt-2'>
            {Loading ? <div className='w-full flex items-center justify-center min-h-screen h-96'><InfinitySpin
                height={40} color="white" /></div> :
                Data.map((e, index) => {
                    return (
                        <Link to={`/detail/${e.id}`}>
                            <div key={index} className='Cardbg text-lg font-medium p-2 rounded-md mt-2 hover:-translate-y-3 cursor-pointer transition-all ease-in-out 1s mt-6'>
                                <img className='mb-4 h-60 w-64 md:h-72 w-80 rounded' src={e.image}></img>
                                <h1><span className='card-heading'>Name: </span>{e.title}</h1>
                                <h1 className='flex items-center'><span className='card-heading pr-1'>Rating: </span>
                                    <ReactStars count={5} size={"20px"} value={e.rating/e.rated} half={true} edit={false}
                                        color2={'#ffd700'} /></h1>
                                <h1><span className='card-heading'>Year: </span>{e.year}</h1>
                            </div>
                        </Link>
                    );
                })
            }
        </div>
    )
}

export default Card




