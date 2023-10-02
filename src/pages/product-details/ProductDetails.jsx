import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {

    const [product, setProduct] = useState({});
    const {id} = useParams();
    const a = useLoaderData();

    useEffect(() => {
        const _ = a.find(temp => temp.id == id);
        setProduct(_);
    }, [])
    const { name, release_date, description, img } = product;
    return (
        <div className="card card-compact w-1/3 mx-auto my-24 bg-base-100 shadow-xl">
            <figure><img src={img} alt={name} className="w-full"/></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p>{release_date}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;