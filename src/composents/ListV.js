import React, { useState } from 'react'
import ItemVille from './ItemVille'
const ListV = () => {

    const [villes, setvilles] = useState(["Casablanca","Rabat","Tanger","Dakar"])

    return (
        <div>
             <h1 className="text-center">VILLE APP</h1>
             <input type="text" placeholder="Ajouter une ville" className="form-control w-50 mx-auto m-3" />
            <button className="text-center">Ajouter</button>

            <div className="filter">
                <input type="text" placeholder="filter task by title" className="form-control w-50 mx-auto m-3" />
            </div>
            <ul className="list-group">
                    {villes.map((villes)=>(
                    <ItemVille nomville={villes}/>))}
            </ul>
        </div>
    )
}

export default ListV
