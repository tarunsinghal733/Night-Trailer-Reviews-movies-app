import React, { useState } from 'react'
import ReactStars from 'react-stars'
import { reviewRef } from '../../firebase/firebase'
import { addDoc } from 'firebase/firestore'
import './Review.css'

const Review = () => {
    const [rating, setrating] = useState(0)
    return (
        <div className='mt-4 py-2 border-t-2 border-grey-700 w-full'>
            <ReactStars className='mt-2 mb-2'
                count={5}
                size={30}
                color={'#ffd700'}
                onChange={(rate) => setrating(rate)}
            />
            <input placeholder='Enter you Thoughts' className='text-white p-2 rounded headerbg w-full outline-none' />
            <button className='bg-green-600 w-full p-2 rounded mt-2'>Share</button>
        </div>
    )
}

export default Review