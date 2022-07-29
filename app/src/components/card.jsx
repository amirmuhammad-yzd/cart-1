import "./style.css"
const Card = ({items , cardHovered , addToCart , addToLike}) =>
{
    const {image , title , price , id ,count} = items
    return(
        <div className="cardBody " onMouseEnter={cardHovered} onMouseLeave={cardHovered}>
            <img src={image} alt={title} className="image"/>
            <h3 className="price">{price}</h3>
            <div className="iconsInCart showHide">
                <span><i className="fas fa-cart-plus" onClick={()=>{return(addToCart(items))}}></i></span>
                <span><i className="fas fa-heart" onClick={()=>{return(addToLike(items))}}></i></span>
            </div>
        </div>
    )
}
export default Card;