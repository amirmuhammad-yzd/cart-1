import "./style.css"
import { Link } from 'react-router-dom';
const Navbar = ({goToHome,cartLength,likeLength}) => {
    return (
        <div className="navBody">
            <div className="logo">
                <Link to="/"><h1><span className="name">A <span className="m">M</span> Y</span> Store</h1></Link>
            </div>
            <div className="icons">
                <div className="shop">
                <Link to="/cart"><i className="fas fa-store" onClick={goToHome}></i></Link>
                <span className="badg">{cartLength}</span>
                </div>
                <div className="like">
                    <Link to="/liked"><i className="fas fa-heart" onClick={goToHome}></i></Link>
                    <span className="badg">{likeLength}</span>
                </div>
            </div>
        </div>
    )
}
export default Navbar;