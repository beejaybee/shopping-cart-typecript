import CartItem from '../CartItem';

//styles
import { Wrapper } from './Cart.styles';

//types
import { CartItemType } from '../api';

type Props = {
    cartItems: CartItemType[];
    addTocart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}

const Cart: React.FC<Props> = ({cartItems, addTocart, removeFromCart}) => {
    
    const calculateTotal = (items: CartItemType[]) => {
        return items.reduce((ack: number, item) => ack + item.amount * item.price, 0); 
    }

    return (
        <Wrapper>
            <h2>Your Shopping Cart</h2>
            {cartItems.length === 0 ? <p>No Items in cart.</p> : null}
            {cartItems.map(item => (
                <CartItem 
                key={item.id}
                item={item}
                addToCart={addTocart}
                removeFromCart={removeFromCart}
                />
            ))}
            <h2> {`$${calculateTotal(cartItems).toFixed(2)}`} </h2>
        </Wrapper>
    )
}


export default Cart
