import React, { useState, useEffect } from "react";
import axios from "axios"; 



export const Component1 = () => {
    const [datas, setDatas] = useState([])
    const postDatas = async() => {
     const axiosResponse = await axios.get('https://pokeapi.co/api/v2/pokemon/');
        setDatas(axiosResponse.data.results)
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