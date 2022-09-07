
import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";


export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      {/* Header */}
      <Header />
      <div className="max-w-screen-xl mx-auto">
        {/* Banner */}
        <Banner />
        {/* item feeds */}
        <ProductFeed
          products={products}
        />
      </div>


    </div>
  );
}


export async function getServerSideProps(context) {

  const API_ENDPOINT = "https://fakestoreapi.com/products";

  const products = await fetch(API_ENDPOINT)
    .then((res) => res.json());

  return {
    props: {
      products
    },
  };

};