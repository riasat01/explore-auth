import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "../../components/product-card/ProductCard";

const Products = () => {

    const [anime, setAnime] = useState([]);
    useEffect(() => {
        fetch(`../anime.json`)
        .then(res => res.json())
        .then(data => setAnime(data))
    }, [])
    // const products = useLoaderData();
    // console.log(products);
    return (
        <section className="mx-6">
            <h1 className="text-5xl text-center my-12">Products</h1>
            <section className="grid grid-cols-4 gap-6">
                {
                    anime?.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                }
            </section>
        </section>
    );
};

export default Products;