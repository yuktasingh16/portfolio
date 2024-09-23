import { useDispatch } from "react-redux";
import { remove } from "../../store/redux/WishListSlice";
import "./WishListProductPage.css";
import { toast } from "react-hot-toast";

const WishListProductPage = ({item, itemIndex}) => {
    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.success("Item Removed");
    }

    return (
        <div className="wishListCard">
            <div>
            <img src={item.image} alt = "WishList Item" className="productImage" />
            </div>
            <div>
            <h3 className="productName"> {item.name}</h3>
            <h1>{item.description}</h1>
            <div className="display">
                <p className="productPrice" > ₹ {item.price}</p>
                <button onClick={removeFromCart} className="delete-button">
                    Delete
                </button>
            </div>

            </div>

        </div>
    );
};

export default WishListProductPage;