
/** @format */


import "./header.css";
import headerPic from '../../assets/headerPic.png'
import { motion } from "framer-motion";

const Header = () => {
  const motionContainer = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
  });

  return (
 <>
    <header className=" header_container pt-40  flex h-fit  justify-center">
    <div className=" header flex items-center lg:items-end justify-between w-[80%]  "  id="home">
      <div className="content   ">
      <motion.p
      variants={motionContainer(0)}
          initial="hidden"
          animate="visible"
       className="body_yellow">
        Sweat Today, Shine Tomorrow
      </motion.p>
        <motion.h1
          variants={motionContainer(0.10)}
          initial="hidden"
          animate="visible"
          className=""
        >
          ACHIEVE YOUR <br/> <span className=" different_p gradient_text" > FITNESS GOALS</span><br/>WITH <br/> <span className=" different_p gradient_text" > LIFTOLOGY</span>  
        </motion.h1>


        <motion.p
         variants={motionContainer(0.2)}
          initial="hidden"
          animate="visible"
         className=" text-white text-opacity-30 max-w-80 " >
            where fitness meets inspiration, and every drop of sweat tells a story of determination
        </motion.p>      

        <motion.div
         variants={motionContainer(0.3)}
          initial="hidden"
          animate="visible"
         className="flex gap-16 mt-5 flex-col md:flex-row">
            <button className="btn dif_btn">
                Get Started
            </button>
            <button className="btn">
               How it Works
            </button>
        </motion.div>

        <motion.div
         variants={motionContainer(0.4)}
          initial="hidden"
          animate="visible"
         className="statics flex gap-5 lg:gap-0  justify-between items-start text-center pb-5 mt-5 gradient_text" >
            <div>
                <h5>1200+</h5>
                <p>Members</p>
            </div>
            <div>
                <h5>10+</h5>
                <p>Trainers</p>
            </div>
            <div>
                <h5>20+</h5>
                <p>Years</p>
            </div>
        </motion.div>

      
      </div>
      <div className="header_image  justify-end items-end p-0 m-0  " >
        <motion.img
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          src={headerPic}
          alt="logo"
          className="hidden  lg:flex "
        />
      </div>
    </div>
    </header>

 </>
  );
};

export default Header;
