import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export const Single = () => {
  const { type, theId } = useParams();
  const [details, setDetails] = useState({});
  const imageType = type === "people" ? "characters" : type;



  useEffect(() => {
    if (!theId || theId === "undefined" || !type) return;

    fetch(`https://www.swapi.tech/api/${type}/${theId}`)
      .then(res => res.json())
      .then(data => {
        if (data && data.result) {
          setDetails(data.result.properties);
        }
      })
      .catch(err => console.error(err));
  }, [type, theId]);

  return (
    <div className="container py-5 bg-dark ">
      <div className="row">
        <div className="col-md-6">
          <img
            src={`/src/assets/img/${type}/${theId}.jpg`}
            alt={item.name}
            className="card-img-top"
          />
        </div>

        <div className="col-md-6">
          <h1>{details.name}</h1>
          <Link to="/" className="btn btn-outline-warning mb-4">Back home</Link>
          <hr />
          {Object.entries(details).map(([key, value]) => (
            <p key={key}><strong>{key}:</strong> {String(value)}</p>
          ))}
        </div>
      </div>
    </div>
  );
};