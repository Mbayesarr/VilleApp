import React, {useState,useRef } from 'react'
import Add from './Add'
import ItemVille from './ItemVille'
const ListV = () => {

    const [villes, setvilles] = useState([])
        
    const [villesBackup, setvillesBackup] = useState([])
        
        const addnewville = (newville) => {
            if(newville){
                setvilles([...villes, newville])
                setvillesBackup([...villesBackup, newville])
            } else alert("Le champs de saisi est vide !!!")
            

        }

        const firlterville = useRef("") 

        const filterVilleTitre = () =>{
            let query = firlterville.current.value;
            if(query===""){setvilles([... villesBackup])}
            else{
                let newlistville = [...villes]
                newlistville = newlistville.filter((ville)=>ville.includes(query))
                setvilles([...newlistville]) 
            }
          
        }
        
        const deleteVille = (nomville) => {

            if (window.confirm("Voulez vous supprimer ?") === false) return
            let newville = [...villes]
            newville = newville.filter((t) => t !== nomville)
            setvilles([...newville])

            setvillesBackup([...newville])

    
        }

    return (
        <div>
             <h1 className="text-center">VILLE APP</h1>
            <Add addListville={addnewville}/>
            <div className="filter">
                <input type="text" 
                placeholder="filter task by title" 
                className="form-control w-50 mx-auto m-3" 
                onKeyUp={filterVilleTitre}
                ref={firlterville}/>
            </div>
            <ul className="list-group">
                    {villes.map((villes)=>(
                    <ItemVille nomville={villes}
                    enDelete={deleteVille}/>))}
            </ul>
        </div>
    )
}

export default ListV
