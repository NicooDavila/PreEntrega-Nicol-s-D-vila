import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import "./ItemDetailContainer.css";
import ItemCount from "../ItemCount/ItemCount";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../Firebase/config";
import ItemDetail from "../ItemDetail/ItemDetail";



const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const id = useParams().id;

    useEffect(() => {

      const docRef = doc(db, "productos", id);
      getDoc(docRef)
        .then((doc) => {
          setItem(
            {...doc.data()}
          );
        })
        
    }, [id])
    

  return (
    <div>
        {item && <ItemDetail item={item} />}
    </div>
  )
}

export default ItemDetailContainer