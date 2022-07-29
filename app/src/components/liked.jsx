const Liked= ({likeData})=>
{
    return(
        <div className="products">
        {
            likeData.map((Element)=>{
                return(
                    <div className="cardBody " >
                    <img src={Element.image} alt={Element.title} className="image"/>
                    <h3 className="price">{Element.price}</h3>
                </div>
        
                )
            })
        }
    </div>

    )
}
export default Liked ;