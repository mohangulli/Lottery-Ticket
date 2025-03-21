import { useState } from "react";
import {genTicket,sum} from "./helper";
import Ticket from "./Ticket";


export default function Lottery({n,winningSum})
{
    let [ticket,setTicket]=useState(genTicket(n));
    let isWinning=sum(ticket)==winningSum;
    let buyTicket=()=>{
        setTicket(genTicket(n));
    };

    return (


        <div>
<h1>Lottery Ticket</h1>
<Ticket ticket={ticket}/>
<button onClick={buyTicket}>buy a ticket</button>
<h3>{isWinning&&"congratulations ,you won"}</h3>



        </div>
    );
}