import React, { useState, useEffect } from "react";
import axios from "axios"; 
import { json } from "react-router-dom";



export const Component1 = () => {
    const [datas, setDatas] = useState([])
    const postDatas = () => {
     fetch(`https://pokeapi.co/api/v2/pokemon/`).then(response => response.json()).then((json) => setDatas(json.results));
    }

    useEffect(() => {
        postDatas()
    }, [])
    return(
        <section>
            <h1>Component1</h1>
            {
                datas.map((data, index) =>
                <h1 key={index}>{data.name}</h1>
                )
            }         
        </section>
    )
}