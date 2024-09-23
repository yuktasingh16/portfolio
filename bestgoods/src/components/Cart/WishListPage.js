import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import WishListProductPage from "./WishListProductPage";
import "./WishListPage.css";

const WishListPage = () => {
    const {cart} = useSelector((state) => state);

    return (
        <div>
    {
        cart.length > 0  ? 
        (<div className="wishlist-container">
        <h1 className="heading">Wish List</h1>

        <div className="wishlist-items">
            {
            cart.map( (item,index) => {
                return <WishListProductPage key={item.id} item={item} itemIndex={index} />
            } )
            }
        </div>

        <Link to={"/"} className="link">
            <button className="button">
                Shop Now
            </button>
        </Link>

        </div>) : 
        (<div className="empty-wishlist">
        <h1>Wish List Empty</h1>
        <Link to={"/"} className="link">
            <button className="button">
                Shop Now
            </button>
        </Link>
        </div>)
    }
        </div>
    );
};

export default WishListPage;