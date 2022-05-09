import products from "../products";
import PizzaItem from "./PizzaItem";

function PizzaList() {
  const productsList = products.map((item) => (
    <PizzaItem
      name={item.name}
      price={item.price}
      imageURL={item.imageURL}
      id={item.id}
    />
  ));
  return <div>{productsList}</div>;
}
export default PizzaList;
