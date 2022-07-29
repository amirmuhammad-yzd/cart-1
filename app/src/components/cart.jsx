const Cart= ({cartData,cartCount , changeCount})=>
{
    return(
        <div className="products">
        {
            cartData.map((Element)=>{
                return(
                    <div className="cardBody " >
                    <img src={Element.image} alt={Element.title} className="image"/>
                    <h3 className="price">{Element.price}</h3>
                    <div className="additional">
                        <button className="plus" onClick={()=>{return(changeCount(Element.id,1))}}>+</button>
                        <input type="text" readOnly={true} value={()=>{return(cartCount)}}/>
                        <button className="minuse" onClick={()=>{return(changeCount(Element.id,-1))}}>-</button>
                        <i className="fas fa-trash"></i>
                    </div>
                </div>
        
                )
            })
        }
    </div>

    )
}
export default Cart ;