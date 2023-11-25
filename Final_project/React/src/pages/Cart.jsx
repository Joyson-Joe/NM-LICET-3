import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseQty,
  deleteProduct,
  resetCart,
} from "../app/features/cart/cartSlice";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Cart.css"; 

const Cart = () => {
  const { cartList } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [showSuccess, setShowSuccess] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [formData, setFormData] = useState({
    address: '',
    phoneNumber: '',
  });

  useEffect(() => {
    setTotalPrice(
      cartList.reduce((price, item) => price + item.qty * item.price, 0)
    );
  }, [cartList]);

  const handleCheckout = () => {
    if (cartList.length === 0) {
      toast.warn("Cart is empty. Add items before checking out.");
    } else {
      setShowCheckoutForm(true);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Perform any necessary processing with the form data
    const { address, phoneNumber } = formData;

    // Dispatch an action or perform further processing with the form data
    // For example, you can send the data to a server for order processing

    // Reset the cart and close the form
    dispatch(resetCart());
    setShowCheckoutForm(false);
    setShowSuccess(true);
    toast.success("Order has been placed");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section className="cart-items">
      <Container>
        <Row className="justify-content-center">
        <Col md={8}>
            {cartList.length === 0 && (
              <h1 className="no-items product">No Items are added to the Cart</h1>
            )}
            {cartList.map((item) => {
              const productQty = item.price * item.qty;
              return (
                <div className="cart-list" key={item.id}>
                  <Row>
                    <Col className="image-holder" sm={4} md={3}>
                      <img src={item.imgUrl} alt="" />
                    </Col>
                    <Col sm={8} md={9}>
                      <Row className="cart-content justify-content-center">
                        <Col xs={12} sm={9} className="cart-details">
                          <h3>{item.productName}</h3>
                          <h4>
                            ${item.price}.00 * {item.qty}
                            <span>${productQty}.00</span>
                          </h4>
                        </Col>
                        <Col xs={12} sm={3} className="cartControl">
                          <button
                            className="incCart"
                            onClick={() =>
                              dispatch(addToCart({ product: item, num: 1 }))
                            }
                          >
                            <i className="fa-solid fa-plus"></i>
                          </button>
                          <button
                            className="desCart"
                            onClick={() => dispatch(decreaseQty(item))}
                          >
                            <i className="fa-solid fa-minus"></i>
                          </button>
                        </Col>
                      </Row>
                    </Col>
                    <button
                      className="delete"
                      onClick={() => dispatch(deleteProduct(item))}
                    >
                      <ion-icon name="close"></ion-icon>
                    </button>
                  </Row>
                </div>
              );
            })}
          </Col>
          <Col md={4}>
            <div className="cart-total">
              <h2>Cart Summary</h2>
              <div className="d_flex">
                <h4>Total Price :</h4>
                <h3>${totalPrice}.00</h3>
              </div>
              <button className="checkout-button" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </Col>
        </Row>
      </Container>

      {showCheckoutForm && (
  <div className="checkout-form-container">
    <div className="checkout-form">
      <h2>Enter Your Details</h2>
      <br></br><form onSubmit={handleFormSubmit}>
      <label htmlFor="Name">Name:</label>&nbsp;&nbsp;&nbsp;
        <input
          type=""
          id="Name"
          name="Name"
          value={formData.Name}
          onChange={handleInputChange}
          required
        />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label htmlFor="address">Address:</label>&nbsp;&nbsp;&nbsp;
        <input
          type=""
          id="address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          required
        />

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label htmlFor="phoneNumber">Phone Number:</label>&nbsp;&nbsp;&nbsp;
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          required
        />
        <br></br><br></br><input type="checkbox" id="COD" name="COD" value="COD"></input>&nbsp;&nbsp;
        <label for="checkbox">Cash on delivery (only available payment method in your region)</label>
        <br></br><br></br><button type="submit" class="po">Place Order</button>
      </form>
    </div>
  </div>
)}
    </section>
  );
};

export default Cart;
