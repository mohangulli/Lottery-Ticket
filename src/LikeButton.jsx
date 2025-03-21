import { useState } from "react";
import "./LikeButton.css"
export default function LikeButton()
{
    let [isLiked,setIsLiked]=useState(false);
    let [clicks,setClicks]=useState(0);
    let toggleLike=()=>{
        setIsLiked(!isLiked);
    }
    let likestyle={color:"red"};
    let s={height:"100px"}
    return(
<div >

<p on onClick={toggleLike}>
{isLiked?(
    <i className="fa-regular fa-heart  " 
    style={likestyle}></i>
    ):(<i className="fa-solid fa-heart"  style={likestyle}></i>)}

</p>
   
</div>
    );
}