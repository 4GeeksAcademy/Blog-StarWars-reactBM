import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
    const { store, dispatch } = useGlobalReducer();

    return (
        <div className="container-fluid mt-3 bg-dark  ">
            <div className="navbar navbar-expand-lg navbar-dark bg-dark card shadow-lg flex-row px-4 py-3 ">
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    
                    <Link to="/" className="navbar-brand fw-bold fs-2 text-warning text-decoration-none m-0">
                        STAR WARS BLOG
                    </Link>
                    
                    
                    <div className="dropdown">
                        <button className="btn btn-warning dropdown-toggle fw-semibold d-flex align-items-center gap-2" data-bs-toggle="dropdown">
                            <i className="fa-regular fa-star"></i>
                            <span>Favorites</span>
                            <span className="badge bg-dark text-warning">{store.favorites.length}</span>
                        </button>
                        
                        <ul className="dropdown-menu dropdown-menu-end shadow-lg border-secondary bg-dark p-2" style={{ minWidth: "240px" }}>
                            {store.favorites.length === 0 ? (
                                <li className="dropdown-item text-secondary text-center py-2">Your favorites list is empty</li>
                            ) : (
                                store.favorites.map(fav => (
                                    <li key={fav.name} className="dropdown-item d-flex justify-content-between align-items-center rounded my-1 bg-transparent text-white">
                                        <Link to={`/single/${fav.type}/${fav.uid}`} className="text-decoration-none text-light text-truncate me-2">
                                            {fav.name}
                                        </Link>
                                        <button 
                                            className="btn btn-sm btn-outline-danger border-0 p-1" 
                                            onClick={() => dispatch({
                                                type: "DELET_FAVORITE",
                                                payload: fav.name
                                            })}
                                        >
                                        <i className="fa-solid fa-xmark"></i>
                                        </button>
                                    </li>
                                ))
                            )}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};