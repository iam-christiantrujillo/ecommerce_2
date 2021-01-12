import React, {useState} from 'react';


const ProductContext = React.createContext();

function ProductProvider(props){

    
    const [selectedProduct, setSelectedProduct] = useState({});

    const value = {
        selectedProduct,
        setSelectedProduct
    }


    return(
        // value es un objeto que indica que datos son globales
        <ProductContext.Provider value={value} {...props} />
    )

}


const useProductContext = () => {

    const context = React.useContext(ProductContext);
    return context
}


export{
    ProductProvider,
    useProductContext
}