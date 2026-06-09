import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Card = ({ item, type }) => {
    const { dispatch } = useGlobalReducer();

    return (
        <div className="card bg-dark text-light border border-warning shadow-lg h-100 rounded-4" style={{ minWidth: "18rem" }}>

            <img
                src={`/src/assets/img/${type}/${item.uid}.jpg`}
                alt={item.name}
                className="card-img-top"
                style={{
                    height: "220px",
                    objectFit: "cover",
                    objectPosition: "center"
                }}
            />

            <div className="card-body d-flex flex-column justify-content-between p-4">
                <h5 className="card-title text-warning text-uppercase fw-bold mb-3">{item.name}</h5>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                    <button
                        className="btn btn-outline-warning btn-sm px-3"
                        onClick={() => dispatch({ type: "ADD_FAVORITE", payload: { name: item.name, uid: item.uid, type: type } })}
                    >
                        <i className="fa-regular fa-star"></i>
                    </button>

                    <Link to={`/single/${type}/${item.uid}`} className="btn btn-warning btn-sm px-4 fw-bold text-dark">
                        Read more...
                    </Link>
                </div>
            </div>
        </div>
    );
};