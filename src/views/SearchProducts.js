import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Products from './Products'
import Navbar from '../components/Navbar/Navbar';

function SearchProducts(){

    const params = useParams()
    const [products, setProducts] = useState([])
    const [searchList, setSearchList] = useState([])

    console.log(params.productName)

    function filterItems(query){
        return products.filter(function(el){
            return el.product_name.toLowerCase().indexOf(query.toLowerCase()) > -1
        })
    }

    useEffect(() => {
        axios.get('https://ecomerce-master.herokuapp.com/api/v1/item')
            .then(({data}) => {
                setProducts(data)
                const array = filterItems(params.productName)
                console.log(array)
                setSearchList(array)
            }) 

        
        
        
    }, [searchList])

    


    return(
        
        <div>
            <Navbar/>
            <Products products={searchList}/>
        </div>
        
    )


}

export default SearchProducts;