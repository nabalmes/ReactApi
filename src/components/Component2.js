import React, { useState, useEffect } from "react";
import axios from "axios";



export const Component2 = () => {
    const [axiosData, setAxiosData] = useState([])
    const postAxiosData = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/').then((response) => {
            setAxiosData(response.data.results)
        }

        );
    }

    return (
        <section>
            <h1>Component2</h1>
            <button onClick={postAxiosData}>search</button>

            {
                axiosData.map((data, index) =>
                    <div key={index}>{data.name} ... {data.url}</div>
                )
            }

        </section>
    )
}