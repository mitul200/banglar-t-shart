import { useLoaderData } from "react-router-dom";
import Tshart from "../../Layout/Tshart/Tshart";
import Cart from "../Cart/Cart";
import './Home.css'
import { useState } from "react";

// import {  toast } from 'react-toastify';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const tSharts = useLoaderData();
    const [cart , setCart] = useState([])

    const handelToClick = tSharts =>{
        // const exiests = cart.find(ts => ts._id === tSharts._id)
        // if(exiests){
        //     toast("already added in the cart!");
        //     <ToastContainer/>
        // }
        // else{

            // }

            const exiests = cart.find(shart =>shart._id === tSharts._id)
            if(exiests){
                toast('Already have this Products !');
                <ToastContainer />

            }
            else{
                const newCart = [...cart,tSharts]
                setCart(newCart)
            }
    }
    const handelRemoveToClick =(id)=>{
        const remining = cart.filter(ts => ts._id !== id)
        setCart(remining)
    }
   

//   console.log(tSharts);
  return (
    <div className="home-container">
      <div className="t-Shart-container">
        {tSharts.map((tShart) => (
          <Tshart 
          key={tShart._id}
          handelToClick={handelToClick}
           tShart={tShart}
           ></Tshart>
        ))}
      </div>
      <div className="cart-container">
            <Cart 
            cart={cart}
            handelRemoveToClick={handelRemoveToClick}></Cart>
        </div>
    </div>
  );
};

export default Home;
