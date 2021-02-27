import './index.scss'

function Hexagon({Background}) {
   return(
       <div className="outter">
           <div className="inner" style={{backgroundImage: `url(${Background})`}} >
           </div>
       </div>
   )
}

export default Hexagon