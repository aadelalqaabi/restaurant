import "./App.css";
import products from "./products";

function PizzaProduct(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.price}</h2>
      <img src={props.imageURL} width={300} height={300}></img>
    </div>
  );
}

function App() {
  const productsList = products.map((product) => (
    <PizzaProduct
      name={product.name}
      price={product.price}
      imageURL={product.imageURL}
    />
  ));
  return (
    <div>
      <h1>The most delicious pizza in K-town</h1>
      <p>
        We serve the pizza that you most crave. Come to us and have a slice!
      </p>
      <img
        src="https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900"
        width={300}
        height={300}
      ></img>
      {productsList}
    </div>
  );
}

export default App;
