// eslint-disable-next-line react/prop-types
const Cart = ({ cart, handelRemoveToClick }) => {
  console.log(cart);
  return (
    <div>
      <h4>This is cart section : {cart.length}</h4>
      {cart.map((tShart) => (
        <p key={tShart._id}>
          {tShart.name}
          <button onClick={() => handelRemoveToClick(tShart._id)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default Cart;
