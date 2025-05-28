import Products from "../../components/products/Products";
import { useFetch } from "../../hooks/usaFetch";

const Home = () => {
  const { data, loading, error } = useFetch("/products");

  return <div id="home">{data && <Products data={data} />}</div>;
};

export default Home;
