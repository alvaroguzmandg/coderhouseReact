import React from "react";
import { useEffect } from "react";
import {NavLink} from "react-router-dom";
import {getFirestore, getDocs, collection} from "firebase/firestore"

export default function NavCategory({categoryId}) {

    const [categories, setCategories] = React.useState([]);

    useEffect(() => {

    const db = getFirestore()
    const categoriesRef = collection(db, "categorias")
        getDocs(categoriesRef).then(snapshots =>{
            setCategories(snapshots.docs.map(doc =>({id: doc.id, ...doc.data()})))
        })

    }, [categoryId]);

    
    const Button = ({texto}) =>{
        return (
            <span className="filtro-categorias">{texto}</span>
        )
    }

    return(
    <>
    <div className="filtro-principal">
        {categories.map((cat) => (<NavLink key={`${cat.id}`}to={`../category/${cat.name}`}><Button texto={`Zapatillas ${cat.name}`}/></NavLink>))}
    </div>
    </>
    )
}