import Card from './card';
import Data from './data';
import "./style.css";
const Products =({addToCart,addToLike}) =>
{
    const cardHoveredFunction=(card,index)=>
    {
        const j=document.querySelector(".products").children
        j[index].children[2].classList.toggle("showHide")
    }
    return(
        <div className="products">
            {
                Data.map((Element,index)=>{
                    return(
                        <Card items={Element} cardHovered={()=>{cardHoveredFunction(Card,index)}} addToCart={addToCart} addToLike={addToLike}/>
                    )
                })
            }
        </div>
    )
}
export default Products;