import { useState } from "react"
 
export default  function Counter()
{
    

    let [counter,setCounter]=useState(0);
    console.log("count value when  render");
    console.log(counter);

let inCount=()=>{
    setCounter(counter+1)
    console.log("count value before render",counter);
}
    return(
        <div>
    <p>hello world</p>
    <p>{counter}</p>
    <button onClick={inCount}>incrment</button>
    </div>
);
    
}