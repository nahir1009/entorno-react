
import {useState} from "react"
export default function  itemCount (stock,initial,onAdd){
   const  [contador,SetContador]=useState(0)
    const incrementar = () =>{
        SetContador (contador + 1)
    }
    const decrementar = () =>{
        SetContador (contador - 1)
    }

   
    return( 
        
        <div>
            <button  onClick={incrementar}>+</button>
            <div>
                {contador}
            </div>

            <button onClick={decrementar}>−</button>
            <div>
                <button onClick={() => onAdd()}>Agregar compra</button>
            </div>
        </div>
    )

}