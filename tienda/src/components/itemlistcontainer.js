function itemlistcontainer(props){
    return(
        <div>
            {props.greeting}
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </div>
    );
}