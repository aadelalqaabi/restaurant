import "./App.css";
import products from "./products";

function App() {
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
      <tbody>
        {products.map((product) => (
          <tr key={product.name}>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
              <img src={product.imageURL} width={300} height={300}></img>
            </td>
          </tr>
        ))}
      </tbody>
    </div>
  );
}

export default App;
