function PizzaItem(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.price}</h2>
      <img src={props.imageURL} width={300} height={300}></img>
    </div>
  );
}
export default PizzaItem;
