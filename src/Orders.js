import React,{useState,useEffect} from "react";
import "./Orders.css";
import Order from "./Order";
import db from './firebase';
import Moment from 'react-moment';
import {useStateValue} from './StateProvider';

function Orders(){

const [{user},dispatch]=useStateValue();
const [orders,setOrders] = useState([]);

useEffect(()=>{
if(user){	
    db
    .collection('users')
    .doc(user.user?.uid)
    .collection("orders")
    .onSnapshot(snapshot =>(
     setOrders(snapshot.docs.map((doc)=>({
      id:doc.id,
      data:doc.data(),
  })))
 ))
}
	
},[]);
						 
	return(
	<div className="orders">
	  { !user ? (
					 <div className="orders_container">
		             <div className="orders_containerMid">
					<p>Either you're logged out or you don't have any account on OHMS. If you have an account,Log in again,BUDDY 😊.</p>
		             </div>
	                </div>
				   ):(
		  <>		  
		
	    <div className="orders_topTicker">
		   <h2>Your OHMS Orders</h2>
	    </div>
				   
		{
		 orders.map(({id,data})=>(
		  <Order id={id} data={data}/>
		))
		  }
		</>		   
	)}
		
	</div>
	
	);
}

export default Orders;