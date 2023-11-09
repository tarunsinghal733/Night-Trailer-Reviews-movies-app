import React, { useEffect, useState } from 'react'
import ReactStars from 'react-stars'
import { useParams } from 'react-router-dom'
import { doc, getDoc} from '@firebase/firestore';
import { db } from '../../firebase/firebase'
import { ThreeCircles } from 'react-loader-spinner';
import Review from '../Review/Review';
import './Detailpage.css'

const Detailpage = () => {
    const { id } = useParams();
    const [Data, setData] = useState({
        title: "",
        year: "",
        image: "",
        description: "",
        rating: 0,
        rated:0
    })
    
    const [Loading, setLoading] = useState(false)
    useEffect(() => {
        async function getData() {
          setLoading(true);
          const _doc = doc(db, "movies", id);
          const _data = await getDoc(_doc);
          setData(_data.data());
          setLoading(false);
        }
        getData();
      },[])


    return (
        <div className='p-4 mt-4 flex flex-col md:flex-row w-full justify-center items-center md:items-start'>
            {Loading ? <div className='w-full flex items-center justify-center min-h-screen h-96'><ThreeCircles height={25} color='#ffd700' /></div> :
                <>
                    <img className='h-96 block md:sticky top-24' src={Data.image} />
                    <div className='ml-0 md:ml-4 w-full md:w-1/2'>
                        <h1 className='text-4xl font-bold mt-3 texthead'>{Data.title} <span className='text-xl' >({Data.year})</span></h1>
                        <ReactStars className='mt-2'
                            count={5}
                            size={24}
                            value={Data.rating/Data.rated}
                            half={true}
                            edit={false}
                            color={'#ffd700'}
                        />
                        <p className='mt-3'>{Data.description}
                        <Review id={id} prevRating = {Data.rating} userRated={Data.rated}/>
                        </p>
                    </div>
                </>
            }
        </div>

    )
}

export default Detailpage


