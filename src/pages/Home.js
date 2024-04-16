import React, { useState, useEffect } from "react";
import Pic from '../media/bob-brewer-UIcvBLwPq24-unsplash.jpg'
import axios from "axios";
import { motion } from "framer-motion";
let Home = () => {
    let [count, setCount] = useState(0)
    let [load, setLoad] = useState(true)
    let [search,setSearch]=useState('')
    let increament = () => {
        setCount(count++)
    }
    let [data, setData] = useState([])
    let getData = async () => {
        // const options = {
        //     method: 'GET',
        //     url: 'https://hapi-books.p.rapidapi.com/nominees/romance/2020',
        //     headers: {
        //         'X-RapidAPI-Key': '18eb7b1b5cmshde40c2990db421ep1f38f4jsndc0720be4a79',
        //         'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
        //     }
        // };

        // try {
        //     const response = await axios.request(options);
        //     console.log(response.data);
        //     setData(response.data)
        //     //   setLoad(false)
        // } catch (error) {
        //     console.error(error);
        // }
        try {
            let {data}=await axios.request('https://jsonplaceholder.typicode.com//users')
            console.log(data)
            setData(data)
        } catch (error) {
            
        }
    }
    useEffect(() => {
        setTimeout(() => {
            setLoad(false)
        }, 3000)
        getData()
    }, [])
    return (<>
        {load ? <div className="loadBar"><div class="bars"></div></div> : <div>
            <motion.h1
                animate={{ y: [0, -10, 10, 0] }}
                viewport={{ once: true }}
                transition={{
                    repeat: Infinity,
                    duration: 1
                }} className="cen">Home</motion.h1>
            <motion.img src={Pic} width="100%" height="400px"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                // viewport={{ once: true }}
                transition={{ duration: 1 }}
            />
            <h4>{count === 0 ? "zero" : count}</h4>
            <button onClick={increament}>Increament</button>
            <form className="search">
                <input type="text" placeholder="Search Comics" onChange={(e)=>setSearch(e.target.value)}/>
                <input type="submit" value='search'/>
            </form>
            <div className="mainCard">
            {data.filter((item)=>item.name===search||search==='').map((v, k) => {
                    return (<motion.div className="Card" initial={{ x:-100 }}
                    whileInView={{ x:0 }}
                transition={{ duration: 1 }}
                >
                        <a href={v.url}>
                            <h1 key={k}>{v.name}</h1>
                            {/* <img src={v.cover} /> */}
                        </a>
                    </motion.div>)
                })}
            </div></div>}
    </>)
}

export default Home