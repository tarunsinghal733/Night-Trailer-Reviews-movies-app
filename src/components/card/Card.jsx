import React, { useState } from 'react'
import ReactStars from 'react-stars'
import './Card.css'

const Card = () => {
    const [Data, setData] = useState([
        {
            Name: "Pathan",
            Rating: 5,
            Year: "2023",
            img: "https://m.media-amazon.com/images/I/91uzbH0vmcL._AC_UF1000,1000_QL80_.jpg",
        },
        {
            Name: "Tiger3",
            Rating: 4.5,
            Year: "2023",
            img: "https://akm-img-a-in.tosshub.com/indiatoday/styles/medium_crop_simple/public/2023-09/img_5529_0.jpeg?VersionId=.x_SZiU6.fvTwwIoz4fnUQ0f8XgMgqCL",
        },
        {
            Name: "War",
            Rating: 3.5,
            Year: "2023",
            img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/a1d95586386965.5d97886ac225d.jpg",
        },
        {
            Name: "Mission Impossible 8",
            Rating: 4.5,
            Year: "2023",
            img: "https://m.media-amazon.com/images/M/MV5BYzFiZjc1YzctMDY3Zi00NGE5LTlmNWEtN2Q3OWFjYjY1NGM2XkEyXkFqcGdeQXVyMTUyMTUzNjQ0._V1_.jpg",
        },

    ]);

    return (
        <div className='flex flex-wrap justify-between p-3 mt-3'>
            {Data.map((e, index) => {
                return (
                    <div key={index} className='Cardbg text-lg font-medium p-2 rounded-md hover:-translate-y-3 cursor-pointer transition-all ease-in-out 1s mt-6'>
                        <img className='h-72 w-64 rounded' src={e.img}></img>
                        <h1><span className='card-heading'>Name: </span>{e.Name}</h1>
                        <h1 className='flex items-center'><span className='card-heading pr-1'>Rating: </span><ReactStars count={5} size={24} value={e.Rating} half={true} edit={false}
                            color2={'#ffd700'} /></h1>
                        <h1><span className='card-heading'>Year: </span>{e.Year}</h1>
                    </div>
                );
            })}
        </div>
    )
}

export default Card




