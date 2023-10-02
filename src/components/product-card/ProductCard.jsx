import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {

    const { id, name, release_date } = product;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src="../banner.jpeg" alt={name} className="w-full"/></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{release_date}</p>
                <div className="card-actions justify-end">
                    <Link to={`/product/${id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;