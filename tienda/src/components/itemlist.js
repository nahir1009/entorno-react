import { useEffect, useState } from "react";
import ItemCount from "./ItemCount"

const Item = ({ book, cartItemsCount, setCartItemsCount }) => {
  const { name, photo, author, date, info, stock } = book
  const [quantity, setQuantity] = useState(0);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    if(quantity > 0){
      setAlert(true)
    }
    setTimeout(() => {
      setAlert(false)
    }, 3000);

    setCartItemsCount(cartItemsCount + quantity)
  }, [quantity]);

  return (
    <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
      <div className="box pb-3">
        <div className="box-header">
          <div className="box-image">
            <img src={require(`../assets/img/${photo}`)} alt={name} />
          </div>
        </div>
        <div className="box-body p-3">
          <p className="book-title">{name}</p>
          <p className="book-author">{author}</p>
          <p className="book-date">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar3 me-2" viewBox="0 0 16 16">  <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" /><path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" /></svg>
            {date}
          </p>
          <p className="book-info pe-3">{info}</p>
          <ItemCount 
            stock={stock}
            setQuantity={setQuantity}
          />
        </div>
      </div>
      {
        alert &&
        <div className="alert alert-success text-center mt-2 p-1">
          Added to cart <b>successfully</b>
        </div>
      }
    </div>

  )
}

export default Item