import React, { useState, useEffect } from "react";
import axios from "axios";



export const Component2 = () => {
    const [search, setSearch] = useState('')

    const [axiosData, setAxiosData] = useState([])
    const postAxiosData = async () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/`).then(response => response.json()).then((json) => setAxiosData(json.results))
    }

    useEffect(() => {
        postAxiosData()
    }, [])

    return (
        <section>
            <h1>Component2</h1>
            <input type="text" onChange={(e) => setSearch(e.target.value)} />

            {
                axiosData
                    .filter((item) => {
                        return search === 1
                            ? item
                            : item.name.toLowerCase().includes(search)
                    })
                    .map((data, index) =>
                        <div key={index}>{data.name} ... {data.url}</div>
                    )
            }

        </section>
    )
}