
import brand1 from '../../assets/brand1.png'
import brand2 from '../../assets/brand2.png'
import brand3 from '../../assets/brand3.png'
import brand4 from '../../assets/brand4.png'
import './brands.css'

const Brands = () => {
  return (
    <  >

        {/* Brands Container */}
        <div className=" w-full brands_container flex items-center  justify-between  flex-wrap  py-1 lg:px-28">
          {/* Brands Images */}
         <img src={brand1 }  />
         <img src={brand2 } />
         <img src={brand3 } />
         <img src={brand4 }  />
        </div> 

      {/* Brands Text */}

    </>
  )
}

export default Brands