import './navbar.css'

function Navbar(props){
    let {element}=props

  return(  
        <div className='navbarParent'>
            
        <div id='navbar'>
            <img src="./public/logo.png" alt="" />
            {element.map((e)=>{
                return <div>{e}</div>
            })

            }
            
        </div>
        </div>
         )

   
}
export default Navbar