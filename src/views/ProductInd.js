import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios'
import Navbar from '../components/Navbar/Navbar';
import InfoProduct from './InfoProduct'

function ProductInd(){

    const params = useParams()

    const [product, setProduct] = useState([])

    useEffect(() => {

        axios.get(`https://ecomerce-master.herokuapp.com/api/v1/item/${params.idProduct}`)
            .then(({data}) => {
                setProduct(data)
            })

    },[])

    return(
        <div>
            <Navbar/>
            <InfoProduct product={product} />
        </div>
    )

}

export default ProductInd;