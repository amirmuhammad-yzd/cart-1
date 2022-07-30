const Cart= ({cartData , changeCount ,delCart , totalPrice})=>
{
    return(
        <div className="cartBody">
        <h1 className="t-price">Total Price : {totalPrice}</h1>
            <div className="productsCart">
        {
            cartData.map((Element)=>{
                return(
                    <div className="cardBody " >
                    <img src={Element.image} alt={Element.title} className="image"/>
                    <h3 className="price">{Element.price}</h3>
                    <div className="additional">
                        <button className="plus" onClick={()=>{changeCount(Element.id,1)}}>+</button>
                        <input type="text" readOnly={true} value={Element.count}/>
                        <button className="minuse" onClick={()=>{changeCount(Element.id,-1)}}>-</button>
                        <i className="fas fa-trash" onClick={()=>{delCart(Element.id)}}></i>
                    </div>
                </div>
        
                )
            })
        }
    </div>
        </div>

    )
}
export default Cart ;