import React, { useRef } from 'react'

const Add = (props) => {

    const inputville = useRef("")

    const addVille= ()=>{
        let input_value = inputville.current.value;
        inputville.current.value="";  
        //alert(input_value) 
        props.addListville(input_value)
        
    }
    return (
        <div className="d-grid gap-2 col-6 mx-auto">
               <input type="text" 
                    placeholder="Ajouter une ville"
                    className="form-control w-50 mx-auto m-3" 
                    ref={inputville}/>

                 <button className="btn btn-secondary" type="button"
                    onClick={addVille}>Ajouter</button>
            
        </div>
    )

}
export default Add
