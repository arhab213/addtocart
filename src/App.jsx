import { useEffect, useState } from "react";
import Item from "./component/Item/Item";
import ElementMaker from "./component/cartElemMaker/CartMaker";
import "./App.css";
import Navbar from "./component/navbar/navbar";

function App() {
  const navElem = ["Home", "Contact", "More"];
  const Items = [
    { Name: "Black Hoddie GYMSAHRK", Price: 34, src: "./BlackHoddie.webp" },
    {
      Name: "Black shirt OverSized GYMSAHRK",
      Price: 54,
      src: "./blackOverSizeShirt.webp",
    },
    { Name: "Green shirt  GYMSAHRK", Price: 24, src: "./greenShirt.jpeg" },
  ];
  const [cartarray, setcartarray] = useState([]);
  const [Total, setTotal] = useState(0);
  const getincart = (ele) => {
    let tmp = [];
    ele["qte"] = 1;
    tmp = [...cartarray, ele];
    setcartarray(tmp);
  };
  useEffect(() => {
    total();
  }, [cartarray]);

  const deletFromCart = (index) => {
    const tmp = [...cartarray];
    tmp.splice(index, 1);
    setcartarray(tmp);
  };
  const total = () => {
    let Total = 0;
    cartarray.map((e) => {
      Total += parseInt(e.Price) * parseInt(e.qte);
    });
    setTotal(Total);
  };
  const qteChange = (ele, idx) => {
    const qteVal = ele.current.value;
    cartarray[idx].qte = qteVal;
    total();
  };

  return (
    <>
      <Navbar element={navElem} />
      <div id="itmesContainer">
        {Items.map((e) => {
          return <Item elem={e} AddFunc={getincart} />;
        })}
      </div>
      <div id="cart">
        <span className="cart">cart </span>
        <div className="itemS">
          {cartarray.map((e, i) => {
            return (
              <ElementMaker
                element={e}
                idx={i}
                qteChange={qteChange}
                deletitem={deletFromCart}
              />
            );
          })}
        </div>
      </div>
      <div>
        <span id="total">total : {Total}$</span>
      </div>
    </>
  );
}

export default App;
