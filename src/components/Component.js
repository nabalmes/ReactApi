import React, { useState, useEffect } from "react";
import axios from "axios";

export const Component = () => {
    const [data1, setData1] = useState([])
    const postData1 = async () => {
        const axiosData = axios.get(`https://pokeapi.co/api/v2/pokemon/`)
        setData1(axiosData.data.results)

        useEffect(() => {
            postData1()
        }, [])


        return (
            <section>
                <h1>Component</h1>
                {
                    data1.map((data, index) =>
                        <div key={index}>{data.url}</div>
                    )
                }
            </section>
        )
    }