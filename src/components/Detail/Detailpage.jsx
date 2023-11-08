import React from 'react'
import ReactStars from 'react-stars'
import './Detailpage.css'

const Detailpage = () => {
    return (
        <div className='p-4 mt-4 flex flex-col md:flex-row w-full justify-center items-center md:items-start'>
            <img className='h-96 block md:sticky top-24' src='https://cdn.bollywoodmdb.com/fit-in/movies/largethumb/2022/pathan/pathan-poster-10.jpg' />
            <div className='ml-0 md:ml-4 w-full md:w-1/2'>
                <h1 className='text-4xl font-bold mt-3 texthead'>Pathaan <span className='text-xl'>(2023)</span></h1>
                <ReactStars className='mt-2'
                    count={5}
                    size={"24px"}
                    value={5}
                    half={true}
                    edit={false}
                    color2={'#ffd700'} 
                />
                <p className='mt-3'>Pathaan, an exiled RAW agent, works with ISI agent Rubina Mohsin to take down Jim, a
                    former RAW agent, who plans to attack India with a deadly virus. Principal photography commenced in November
                    2020 in Mumbai.“Pathaan” is in some ways a save-the-world superhero movie without suits, and while less
                    self-serious, the hefty length can lag. More is not always better — though the gusto of Padukone speedskating
                    to the rescue at one point goes a long way.
                    
                </p>
            </div>
        </div>

    )
}

export default Detailpage