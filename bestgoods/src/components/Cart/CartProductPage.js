import './CartProductPage.css';

const CartProductPage = (props) => {
  const price = `${props.price.toFixed(2)}`;

  return (
    <li className="cart-item">
      <div className="details">
        <h2>{props.name}</h2>
        <div className="summary">
          <span className="price">₹ {price}</span>
          <span className="amount"> {props.amount}</span>
        </div>
      </div>
      <div className="actions">
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartProductPage;