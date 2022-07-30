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
const [totalPrice,setTotalPrice] = useState( 0 )



const addToCartFunction = (items) =>
{
  if(!cart.includes(items))
  {
    cart.push(items)
    setCart([...cart])
  }
  totalPriceFunction();
}
const addToLikeFunction=(items)=>{
  if(!like.includes(items))
  {
    like.push(items)
    setLike([...like])
  }
}
const changeCount=(id,num)=>
{
  cart.map((item,index)=>{
    if(item.id===id)
    {
      item.count=item.count+num;
      setCart([...cart])
      if(item.count===0)
      {
        item.count=1;
      }
    }
    totalPriceFunction();
  })
}
const delCartFunction = (id)=>
{
  cart.map(item=>{
    if(item.id===id)
    {
      cart.splice(item,1)
    }
    setCart([...cart])
  })
  totalPriceFunction();
}
const delLikeFunction=(id)=>
{
  like.map(item=>{
    if(item.id===id)
    {
      like.splice(item,1)
      setLike([...like])
    }
  })
}
const totalPriceFunction=()=>{
  var z=0;
  cart.map(item=>{
    z=item.count*item.price+z
  })
  setTotalPrice(z)
}
  return(
      <div>
        <Navbar cartLength={cart.length} likeLength={like.length}/>
          <Routes>
            <Route path="/" element={<Products addToCart={addToCartFunction} addToLike={addToLikeFunction}/>}/>
            <Route path="/cart" element={<Cart cartData={cart} changeCount={changeCount} totalPrice={totalPrice} delCart={delCartFunction} />}/>
            <Route path="/liked" element={<Liked likeData={like} delLike={delLikeFunction}/>}/>
          </Routes>
      </div>      
    )
  
}
export default App ;