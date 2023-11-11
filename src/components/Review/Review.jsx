import React, { useEffect, useState, useContext } from 'react'
import ReactStars from 'react-stars'
import { useNavigate } from 'react-router-dom'
import { reviewRef, db } from '../../firebase/firebase'
import { addDoc, doc, updateDoc, query, where, getDocs } from '@firebase/firestore'
import { TailSpin, ThreeDots } from 'react-loader-spinner'
import { Appstate } from '../../App'
import swal from 'sweetalert'
import './Review.css'


const Review = ({ id, prevRating, userRated }) => {
    const useAppstate = useContext(Appstate)
    const navigate = useNavigate()
    const [rating, setrating] = useState(0)
    const [loading, setloading] = useState(false)
    const [form, setform] = useState("")
    const [ReviewLoading, setReviewLoading] = useState(false)
    const [Data, setData] = useState([])
    const [addNew, setaddNew] = useState(0)

    const sendReview = async () => {
        setloading(true);
        try {
                await addDoc(reviewRef, {
                    movieid: id,
                    name: useAppstate.userName,
                    rating: rating,
                    thought: form,
                    timestamp: new Date().getTime()
                })
                const ref = doc(db, "movies", id)
                await updateDoc(ref, {
                    rating: prevRating + rating,
                    rated: userRated + 1
                })
                setrating(0)
                setform("")
                setaddNew(addNew +1)
                swal({
                    title: "Review Sent",
                    icon: "success",
                    buttons: false,
                    timer: 3000
                })
           
        } catch (error) {
            swal({
                title: error.message,
                icon: "error",
                buttons: false,
                timer: 3000
            })
        }
        setloading(false);
    }

    useEffect(() => {
        async function getData() {
            setReviewLoading(true)

            let query1 = query(reviewRef, where('movieid', '==', id))
            const querySnapshot = await getDocs(query1);
            querySnapshot.forEach((doc) => {
                setData((prev) => [...prev, doc.data()])
            })
            setReviewLoading(false)
        }
        getData()
    }, [addNew])


    return (
        <div className='mt-4 py-2 border-t-2 border-grey-700 w-full'>
            <ReactStars className='mt-2 mb-2'
                count={5}
                size={30}
                color={'#ffd700'}
                value={rating}
                onChange={(rate) => setrating(rate)}
            />
            <input value={form}
                onChange={(e) => setform(e.target.value)}
                placeholder='Enter you Thoughts' className='text-white p-2 rounded headerbg w-full outline-none' />
            <button onClick={sendReview} className='bg-green-600 w-full p-2 flex justify-center rounded mt-2'>
                {loading ? <TailSpin height={20} color="white" /> : 'Share'}</button>

            {ReviewLoading ? <div className='flex justify-center mt-8'><ThreeDots height={15} color="white" /></div> :
                <div className='mt-4'>
                    {Data.map((e, index) => {
                        return (
                            <div className='reviewbg border-b border-grey-700 mb-1 mt-4 w-full rounded p-4' key={index}>
                                <div className='reviewhead flex items-center'>
                                    <p>{e.name}</p>
                                    <p className='ml-2 text-xs'>({new Date(e.timestamp).toLocaleString()})</p>
                                </div>
                                <ReactStars className='mt-2 mb-2'
                                    count={5}
                                    size={20}
                                    color={'#ffd700'}
                                    value={e.rating}
                                    edit={false}
                                />
                                <p>{e.thought}</p>
                            </div>
                        )
                    })
                    }
                </div>
            }
        </div>


    )
}

export default Review