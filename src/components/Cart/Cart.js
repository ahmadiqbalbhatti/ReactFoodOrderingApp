import classes from './Cart.module.css'
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItem = (
      <ul className={classes['cart-items']}>
        {[{id: 'c1', name: 'Sushi', amount: 2, price: 12.99}].map((item) => (
            <li>{item.name}</li>
        ))}
      </ul>
  )
  return (
      <Modal onHideCart={props.onHideCart}>
        {cartItem}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>35.63</span>
        </div>
        <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
          <button className={classes.button}>Order</button>
        </div>
      </Modal>
  )
}

export default Cart;
