import React from "react";
import "./Order.css";
import Moment from 'react-moment';
import {useParams} from 'react-router-dom';
import { useStateValue } from "./StateProvider";
import db from './firebase';

function Order({id,data}){
	
	const {companyName} = useParams();
	const [{user}] = useStateValue();
	
	const deleteOrder = () => {

	   db.collection(companyName)
		  .doc("cmpny")
		  .collection("users")
		  .doc(user?.uid)
          .collection('orders')
		  .doc(id)
		  .delete()
		  .then()
		  .catch(error=> alert(error.message));
			   
	   db.collection(companyName)
		  .doc("cmpny")
		  .collection("Orders")
		  .doc(id)
		  .delete()
		  .then()
		  .catch(error=> alert(error.message));
	}
	
   return(
	 <div className="order">
     <p className="order_id"><strong>Booking id:</strong>{id}</p>
	 <h3>YOUR BOOKING</h3>
	    <div className="order_Container">
		  <div className="order_Info">
		 <p>Booking For:<strong>{data?.service}</strong></p>
         <p>Category:<strong>{data?.serviceOption}</strong></p>
		 <p>Service Date: <strong>{<Moment format=" MMMM D,YYYY">{data?.serviceDate}</Moment>}</strong></p>
		 <p>Address: <strong>{data?.adrLineOne + ", " + data?.adrLineTwo}</strong></p>
         <p>Zip Code:<strong>{data?.pinCode}</strong></p>
		 <p className="des">"{data?.description}"</p>
			
		  </div>
		</div>
		   <button className="order_deleteBtn" onClick={deleteOrder}>Delete Your Order</button>
		   <p className="order_created"><strong>Booking Created at:</strong><Moment format=" MMM D,hh:mm:ss" unix>{data?.timestamp?.seconds}</Moment></p>
	 </div>
	 
	);
}

export default Order;