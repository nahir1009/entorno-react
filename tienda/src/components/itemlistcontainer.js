 export function itemlistcontainer(props){ 
    const onAdd = (contador) => {
        alert("compraste" + contador + "items")
    }
    return(
        <div>
            {props.greeting}
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </div>
    );
}