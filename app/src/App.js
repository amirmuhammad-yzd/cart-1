import Navbar from "./components/navbar";
import { useState } from "react";
import Products from "./components/products";
import Cart from "./components/cart";
import Liked from "./components/liked";
import { Route, Routes } from "react-router-dom";
const App = () =>
{
const [cart, setCart] = useState([]);
const [like,setLike]=useState([]);
const [cartCount,setCartcount] = useState(0)



const addToCartFunction = (items) =>
{
  if(!cart.includes(items))
  {
    cart.push(items)
    setCart([...cart])
    console.log(cart[0].image)
  }
}
const addToLikeFunction=(items)=>{
  if(!like.includes(items))
  {
    like.push(items)
    setLike([...like])
  }
}
var x=0;
const changeCount=(id,num)=>
{
  cart.map((item,index)=>
  {
    if(item.id===id)
    x=
    console.log(x)
  })
  return(x)
}



  return(
      <div>
        <Navbar cartLength={cart.length} likeLength={like.length}/>
          <Routes>
            <Route path="/" element={<Products addToCart={addToCartFunction} addToLike={addToLikeFunction}/>}/>
            <Route path="/cart" element={<Cart cartData={cart} cartCount={()=>{return(changeCount())}} changeCount={changeCount}/>}/>
            <Route path="/liked" element={<Liked likeData={like}/>}/>
          </Routes>
      </div>      
    )
  
}
export default App ;