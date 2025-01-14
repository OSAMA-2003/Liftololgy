/** @format */

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import ExCard from "../../components/excard/ExCard";

const Exercises = () => {


 const [exercises , setExercises] = useState([])
const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)



  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


useEffect(()=>{

  const fetchExercises = async ()=>{

    try{
      const options = {
        method:'GET',
        url:'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        headers:{
          'x-rapidapi-key': 'd8a1537264msh3f0d520464de791p1ea088jsn332ce0de98ba',
            'x-rapidapi-host': 'exercisedb.p.rapidapi.com'    
        }
      }

      const res = await axios.request(options)
      setExercises(res.data)
      setLoading(false)

    }
    catch(err){
      setError('failed to fetch exercise')
      setLoading(false)
    }

  }

  fetchExercises()

},[])

if(loading){
  return(
    <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-white">LOADING...</div>
      </div>
  )
}

if(error){
  return(
    <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-white">{error}</div>
      </div>
  )
}


  
  return (
    <>
      <div className="min-h-[100vh] pt-24">
        <h1 className=" gradient_text">Exercises</h1>


      {exercises.map((ex)=>(

        <div
        key={ex}
         className="  z-30 relative items-center justify-center w-full h-full overflow-auto">
    <div className="inset-0 h-[60vh] bg-cover bg-center " >
    </div>
    <div className="absolute inset-0 z-20 flex items-center justify-center  w-full  "></div>
    <div className="absolute inset-0  z-30  flex flex-col items-center justify-center">
        <div className="shadow-2xl rounded-lg w-4/5 h-96 bg-cover bg-center hover:scale-105 transition-transform duration-500"
           style={{
            // backgroundImage: `url(${image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
            
           }}  >

            <div className="grid grid-cols-12 gap-1">
                <div className="relative my-6 px-8 col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-7 xxl:col-span-7">
                    <div className="border-l-4 border-gray-400 py-20 px-5 mx-2 absolute left-0">
                        <p className="italic text-white text-xl md:text-4xl lg:text-6xl uppercase text-center  font-semibold ">
                            {ex}
                        </p>
                    </div>
                    {/* <div className="text-gray-400 font-semibold text-xl mb-4">{num}</div> */}
                    <div className="absolute border-gray-400 border-t-4 bottom-0 py-1 px-4 w-4/5"></div>
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-5 xxl:col-span-5">
                    <div className="relative bg-red-900 h-full md:h-96 w-full bg-opacity-50 rounded-tr-lg rounded-br-lg">
                        <div className="p-8">
                            {/* <p className="text-white text-xs md:text-sm lg:text-xl mb-4">
                               {disc}
                            </p> */}
                            <div className="bottom-0 absolute p-2 right-5">
                                <button className="btn">
                                   
                                    <Link to={`/exercise/${ex}`} >Lets GO</Link>
                                </button> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


      ))}

      </div>
    </>
  );
};

export default Exercises;
