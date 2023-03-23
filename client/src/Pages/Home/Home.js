import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from '../../Components/MovieCard/MovieCard';
import PosterCarousel from '../../Components/PosterCarousel/PosterCarousel'
import { setMovies } from '../../Redux/Action';
import { getMovies } from '../../utils/api';
import { checkRated } from '../../utils/commonFunction';
import './Home.css';


const Home = () => {

    const {movies,auth} = useSelector(store=>store);
    console.log(movies);
    const dispatch = useDispatch();

    useEffect(()=>{
        getMovies()
        .then(res=>{
            setMovies(res.data,dispatch)
        });
    },[])


    return (
        <div>
            <div id='posterDiv'>
                <PosterCarousel/>
            </div>
            <h1 id='moviesHeading'>Rate Movies</h1>
            <div id='displayMovies'>
                {
                    movies.map((ele)=>{
                        return <MovieCard showRatingIcon={checkRated(auth.details?.ratedMovies,ele['_id'])} key={ele['_id']} data={ele}/>
                    })
                }
            </div>
            
        </div>
    )
}

export default Home