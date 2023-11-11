import { useRef, useState } from "react"
import "./CartMaker.css"

function ElementMaker(props){
    const{element,deletitem,idx,qteChange}=props
    let ref=useRef(null)
    return(
     
        <div id="cartItemContainer">
            <span className="itemName">{element.Name}</span>
            <span className="itemPrice">Price :{element.Price}$</span>
            <div id="InputButton">
            <input type="number" id="inpute" ref={ref} min={1} onChange={()=>qteChange(ref,idx)} />
            <button onClick={()=>{deletitem(idx)}}>remove</button>
            </div>
        </div>
       
    )
}
export default ElementMaker