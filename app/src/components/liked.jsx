const Liked= ({likeData , delLike})=>
{
    return(
        <div className="products">
        {
            likeData.map((Element)=>{
                return(
                    <div className="cardBody " >
                    <img src={Element.image} alt={Element.title} className="image"/>
                    <h3 className="price" title="price">{Element.price}</h3>
                    <i className="fas fa-trash tarashInLike" onClick={()=>{delLike(Element.id)}} title="delete"></i>
                </div>
        
                )
            })
        }
    </div>

    )
}
export default Liked ;