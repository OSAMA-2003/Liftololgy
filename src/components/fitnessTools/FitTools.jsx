
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import icon4 from '../../assets/icon4.png'

import MyCard from '../card/MyCard'

// eslint-disable-next-line react/prop-types
function FitTools( ) {
  return (
    <section className=' container section flex flex-col justify-center items-center  '>
    
    <h1 className=' gradient_text  ' >Our Fitness Tools </h1>
    <p className=" text-gray-500 my-10 text-center">Access a variety of tools to help you reach your fitness goals more effectively</p>
        
 <div className='cards-container grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-4 gap-10 lg:gap-28 p-10'>
 <MyCard title="Calories Calculator" imgSrc={icon1} />
  <MyCard title="BMI Calculator" imgSrc={icon2} />
  <MyCard title="Goal Setting Tool" imgSrc={icon4} />
  <MyCard title="Food Calculator" imgSrc={icon3} />


 </div>

    
    </section>
  )
}

export default FitTools