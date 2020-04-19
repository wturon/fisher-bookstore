import React, { useState, useEffect } from "react";
import "./Authors.css";
import AuthorDisplay from "./AuthorDisplay";

export default function Authors(props) {
   const [data, setData] = useState([]);

   useEffect(() => {
       fetch("https://localhost:5001/api/authors/")
       .then(response => response.json())
       .then(data => setData(data));
   },[])
   
    return(
        <div className="Author">
            <div className="lander">
                <AuthorDisplay author={data} />
            </div>
        </div>
    );
};