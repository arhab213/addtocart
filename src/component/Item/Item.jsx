import "./Item.css"

function Item(props){
const {elem,AddFunc}=props

  return  <div className="Items">
    <span className="itemName">{elem.Name}</span>
    <span className="itemPrice">Price :{elem.Price}$</span>
    <img src={elem.src} alt="" style={{height:"400px",width:"300px"}} />
    <button id="AddToCartBtn" onClick={()=>AddFunc(elem)}>Add to Cart</button>
    </div>
 
}
export default Item
