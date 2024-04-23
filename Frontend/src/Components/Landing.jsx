import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import favicon from "../Assets/favicon.ico";
import "../Components/Landing.css"
import {motion} from "framer-motion"

const blackBox = {
    initial: {
      height: "100vh",    
    },
    animate: {
        height: 0,
        transition: {
          when: "afterChildren",
          duration: 3,
          ease: [0.87, 0, 0.13, 1],
        },
      },
  };

const Landing = () => {
    const [count, setCount] = useState(2);
    const navigate = useNavigate();
    useEffect(() => {
      const interval = setInterval(() => {
        // update the state after 1000ms
        setCount((currentCount) => currentCount - 1);
      }, 1000);
      // when count is 0, navigate
      count === 0 && navigate("/login");
      // clean up the interval
      return () => clearInterval(interval);
    }, [count, navigate]);
    return (

        <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative z-50 w-full bg-black"
          initial="initial"
          animate="animate"
            variants={blackBox}
            
        >
            <motion.rect
  className="w-full h-full text-gray-600 fill-current"
/>
       <div className='text-center landing h-100 '>

      <img src={favicon} style={{width:"30vw",height: "40vh", marginTop:"10%"}} />
</div>
            </motion.div>     

      </div>
  
    //          <motion.div
    //   className="card-container landing"
    //   initial="offscreen"
    //   whileInView="onscreen"
    //   viewport={{ once: true, amount: 0.8 }}
    // >
    //   <div className="splash" />
    //   <motion.div>
    //   <div className='text-center landing h-100 '>

    //   <img src={favicon} style={{width:"30vw",height: "40vh", marginTop:"10%"}} />
    //   </div>
        
    //   </motion.div>
    // </motion.div>

            
    );
  };
export default Landing