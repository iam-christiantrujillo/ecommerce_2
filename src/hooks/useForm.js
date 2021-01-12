// REGLAS PARA CREAR MIS PROPIOS HOOKS
// 1. Siempre llamarlo useLoQueSea ej useForm
// 2. SIEMPRE deben ser funciones !!!!!
// 3. Tienes que utilizar hooks de react, y no deben estar loops, condiciones o funciones anidadas
// LOS HOOKS TIENEN QUE SER UNIVERSALES

import {useState} from 'react'

function useForm(callback, defaults){

    const [inputs, setInputs] = useState(defaults)  //aqui vamos ha estar gusrdando los valores de mis formularios
    
    // useEffect(() => {
    //     console.log("Valor de datos", defaults)
    //     //useEffect escuha cambios en los props o en el estado
    //     setInputs({...defaults}) // ... cree una copia de defaults

    // },[defaults]) //Escuchar los cambios en alguna parte del componenete
    
    
    
    // {
    //     "nombre": "jkbkjbkjnbknlnlk"
    //     "apellidos": "bcdjhbcjhsbc"
    //     ...
    // }

    // const objeto = {
    //     "12-12-2020":{
    //         dsvvdv
    //     }
    // }
    // objeto["12-12-2020"]

    const handleSubmit = (event) => {
        //HandleSubmit va a ser ocupada en el submit de mis forms
        event.preventDefault(); //Evite el refresh al enviar mi form 
        callback(inputs);
    }

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        // const name = event.target.name;
        // const value = event.target.value;
        console.log(name,value)
        setInputs({...inputs, [name]:value})
    }

    return{ // los hooks no regresan jsx
        inputs,
        handleInputChange,
        handleSubmit 
    }

}

export default useForm;