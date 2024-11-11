
import { Link } from 'react-router-dom';
import './card.css'
// eslint-disable-next-line react/prop-types
function MyCard({imgSrc , title ,toLink }) {
    // const navigate =useNavigate();
  return (
    <>


<div className="max-w-sm CARD  w-full  flex justify-center flex-col max-h-[360px]   md:max-h-[360px] md:hover:scale-105  bg-transparent border border-gray-200 rounded-lg  text-center ">
    
    <div className="flex justify-center pt-5 pb-2 ">
    <a href="#">
        <img className="rounded-t-lg w-28 pt-5" src={imgSrc}  alt="" />
    </a>
    </div>

    <div className="p-5 mb-5">
        <a href="#">
            <h5 className="text-2xl font-bold tracking-tight gradient_text mb-5">{title}</h5>
        </a>
       
       <Link to={toLink}>
       <button className="btn outline"  
         
         >LEARN MORE</button>
       </Link>

       
    </div>
</div>


    </>
  )
}

export default MyCard