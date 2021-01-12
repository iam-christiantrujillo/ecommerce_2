import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios'
import Products from './Products'
import Navbar from '../components/Navbar/Navbar';

function CategoryInd(){

    const params = useParams()

    const [products, setProducts] = useState([])

    useEffect(() => {

        axios.get(`https://ecomerce-master.herokuapp.com/api/v1/item/?category=${params.name}`)
        .then(({data}) => {
            setProducts(data)
        })

    },[])

    return(
        <div>
            <Navbar/>
            <Products products={products}/>
        </div>
       
    )

}

export default CategoryInd;