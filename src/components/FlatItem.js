import { Link } from "react-router-dom";

const FlatItem = ({slug}) => {
    return (
        <div className="text-center col-lg-4 col-12 col-md-6 ">
            <div className="item">
                <div className="item-image">
                    <img className="img-fluid" src="/img/product1.jpeg" alt="flat" />
                </div>
                <div className="item-description">
                    <div className="d-flex justify-content-between mb-3">
                        <span className="item-title">109-2350 Westerly Street Abbotsford BC</span>
                        <span className="item-price">$500000</span>
                    </div>
                    <div className="item-icon d-flex alig-items-center justify-content-between">
                        <div>
                            <i className="fas fa-check-circle"></i> <span> 3 Beds </span>
                        </div>
                        <div>
                            <i className="fas fa-check-circle"></i> <span>3 Baths </span>
                        </div>
                        <Link to={`/flat/${slug}`} className="item-title">
                            <button className="btn btn-detail">View</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlatItem