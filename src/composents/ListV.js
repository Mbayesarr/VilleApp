import React, { useState, useRef } from 'react'
import Add from './Add'
import ItemVille from './ItemVille'
import { Ville } from '../models/ville'

const Listeville=[
    new Ville(1,"Casa"),
    new Ville(2,"Dakar")
]

const ListV = () => {

    const [villes, setvilles] = useState(Listeville)

    const [villesBackup, setvillesBackup] = useState(Listeville)

    const addnewville = (newville) => {
        if(window.confirm("Voulez vous ajouter "+newville)===false) return 
        
            setvilles([...villes, new Ville(villes.length+1,newville)])
            setvillesBackup([...villesBackup, new Ville(villes.length+1,newville)])
        
        //else alert("Le champs de saisi est vide !!!")
    }

    const firlterville = useRef("")

    const filterVilleTitre = () => {
        let query = firlterville.current.value.toLowerCase();
        if (query) {
            let newlistville = [...villes]
            newlistville = newlistville.filter((ville) => ville.toLowerCase().includes(query))
            setvilles([...newlistville])
        }

        else {
            setvilles([...villesBackup])
        }

    }

    const deleteVille = (idville) => {

        if (window.confirm("Voulez vous supprimer ?") === false) return
        let newville = [...villes]
        newville = newville.filter((t) => t.id !== idville)
        setvilles([...newville])
        setvillesBackup([...newville])
    }

    return (
        <div>
            <h1 className="text-center">VILLE APP</h1>
            <Add addListville={addnewville} />
            <div className="filter">
                <input type="text"
                    placeholder="filter task by title"
                    className="form-control w-50 mx-auto m-3"
                    onKeyUp={filterVilleTitre}
                    ref={firlterville} />
            </div>
            <ul className="list-group">
                {villes.map((v) => (
                    <ItemVille 
                    key={v.id}
                    nomville={v.name}
                    enDelete={deleteVille}
                    id={v.id}
                    />))}
            </ul>
        </div>
    )
}

export default ListV
