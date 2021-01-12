import React from 'react';
import './Products.css';
import { useHistory } from 'react-router-dom';


function Products({products}){

    const history = useHistory()
    

    const renderProducts = () => {
        const render = products.map(product => {
            
            return(

                <div className="card" onClick= {() => { history.push(`/id/${product._id}`) }}>

                    {
                        product.image ? 
                        <div className="cardInfo">
                            <img className="image" src={product.image} alt="product_image"/>
                            <h4 className="description">{product.product_name}</h4>
                            <h5 className="description">$ {product.price}</h5>
                            <h5 className="description">{product.brand}</h5>
                            <h5 className="description">Category: {product.category}</h5>



                        </div>
                        
                        :
                        <div className="cardInfo">
                            
                            <h4 className="description">{product.product_name}</h4>
                            <h5 className="description">$ {product.price}</h5>
                            <h5 className="description">{product.brand}</h5>
                            <h5 className="description">Category: {product.category}</h5>

                            

                        </div>
                    }

                   

                </div>

            )
        })
        return render
    }

    return(
        <div className="cards">
            {renderProducts()}
        </div>
    )

}

export default Products;