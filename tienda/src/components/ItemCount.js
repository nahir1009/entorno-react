
import {useState} from "react"
export default function  itemCount (){
   const  [contador,SetContador]=useState(0)
    const incrementar = () =>{
        SetContador (contador + 1)
    }
    const decrementar = () =>{
        SetContador (contador - 1)
    }

    const onAdd = () => {
        alert("compraste" + contador + "items")
    }
    return( 
        
        <div>
            <button  onClick={incrementar}>+</button>
            <div>
                {contador}
            </div>

            <button onClick={decrementar}>−</button>
            <div>
                <button onClick={onAdd}>Agregar compra</button>
            </div>
        </div>
    )

}