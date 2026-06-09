import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Card } from "../components/Cards";

export const Home = () => {
    const { store, dispatch } = useGlobalReducer();

    useEffect(() => {
        fetch("https://www.swapi.tech/api/planets")
            .then(res => res.json())
            .then(data => dispatch({ type: "SET_PLANETS", payload: data.results }));

        fetch("https://www.swapi.tech/api/vehicles")
            .then(res => res.json())
            .then(data => dispatch({ type: "SET_VEHICLES", payload: data.results }));

		fetch("https://www.swapi.tech/api/people")
            .then(res => res.json())
            .then(data => dispatch({ type: "SET_PEOPLE", payload: data.results }));
    }, []);

    return (
        <div className="container-fluid px-4 py-4 d-flex flex-column gap-5">
            <div className="card bg-dark border-secondary shadow-lg">
                <div className="card-body p-4">
                    <h1 className="text-warning mb-4 fw-bold border-bottom border-secondary pb-2 fs-2">
                        <i className="fa-solid fa-earth-americas me-2"></i> Planets
                    </h1>
                    <div className="d-flex gap-4 overflow-auto pb-3 w-100">
                        {store.planets && store.planets.map(item => (
                            <Card key={item.uid} item={item} type="planets" />
                        ))}
                    </div>
                </div>
            </div>
            <div className="card bg-dark border-secondary shadow-lg">
                <div className="card-body p-4">
                    <h1 className="text-warning mb-4 fw-bold border-bottom border-secondary pb-2 fs-2">
                        <i className="fa-solid fa-jedi me-2"></i> Vehicles
                    </h1>
                    <div className="d-flex gap-4 overflow-auto pb-3 w-100">
                        {store.vehicles && store.vehicles.map(item => (
                            <Card key={item.uid} item={item} type="vehicles" />
                        ))}
                    </div>
                </div>
            </div>
            <div className="card bg-dark border-secondary shadow-lg">
                <div className="card-body p-4">
                    <h1 className="text-warning mb-4 fw-bold border-bottom border-secondary pb-2 fs-2">
                        <i className="fa-solid fa-earth-americas me-2"></i> People
                    </h1>
                    <div className="d-flex gap-4 overflow-auto pb-3 w-100">
                        {store.people && store.people.map(item => (
                            <Card key={item.uid} item={item} type="people" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};