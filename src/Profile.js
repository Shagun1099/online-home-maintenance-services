 import React,{useState,useEffect} from 'react';
import './Profile.css';
import {Avatar} from '@material-ui/core';
import { useStateValue } from './StateProvider';
import db from './firebase';
import Moment from 'react-moment';

function Profile()  {

 const [phone,setPhone]= useState(" ");
 const [dbPhone,setDbPhone] = useState(false);
 const [orders,setOrders]=useState([]);
 const [{user},dispatch] = useStateValue();

useEffect(()=>{
   if(user?.isUser==false){
	db.collection('bookings')
	.doc('allBookings')
	.collection(user?.providerType)
	.onSnapshot(snapshot =>(
	  setOrders(snapshot.docs.map((doc)=>({
	   id:doc.id,
	   data:doc.data(),
   })))
  ))
   }
},[]);

	return(
	   <div className="profile">
		{ !user ? ( <div className="profile_container">
		             <div className="profile_containerMid">
					<p>Either you're logged out or you don't have any account on OHMS.If you have an account,Log in again,BUDDY😊😊😊.</p>
		             </div>
	                </div> ):(
			   
			   <div className="profile_container">
		 <div className="profile_containerTop">
		 <Avatar src={user.user?.photoURL} alt={user?.displayName}/>
		 <div className="profile_containerTopInfo">
			<h2>{user.user?.displayName}</h2>
			{ user?.isUser==false ? (
				 <h4 className="profile_providerType">{user?.providerType}</h4>
			 ) : (<> </> )}
			<h4>{user.user?.email}</h4>
			<h4>+91-{user?.phone}</h4>
		 </div>
		</div>
		<div className="profile_containerMid">
		<p>Dear user! We are so happy to have you here,on OHMS.Hope you're doing good.We promise you to provide the best services we could.</p>
		</div>
		{ user?.isUser==false ? (
			<>
			{ orders ? (
              <div className="profile_containerBottom">
				<h1>All available {user?.providerType} Bookings</h1>
                {orders.length >> 0 ? (orders.map(({data,id})=>(
					<div className="order_Container profile_orderContainer">
					<h3 className="order_id"><strong>BOOKING:</strong>{id}</h3>
					<h5>{data?.name}</h5>
					<h5>{data?.email}</h5>
					<h5>{"+91-"+data?.phone}</h5>
					<p>Booking For:<strong>{data?.service +"("+ data?.serviceOption+")"}</strong></p>
					<p>Service Date: <strong>{<Moment format=" MMMM D,YYYY">{data?.serviceDate}</Moment>}</strong></p>
					<p>Address: <strong>{data?.adrLineOne + ", " + data?.adrLineTwo + ", " + data?.pinCode}</strong></p>
					<p className="des">"{data?.description}"</p>
					<div className="profile_orderButtons">
					  <button className="accept">Accept</button>
					  <button className="reject">Reject</button>
					</div>
					</div>
				))):(
					<p>No {user?.providerType} orders available Yet</p>
				)}
			  </div>
			):(
				<>
				</>
			)}
			</>

		):(
			<>
			</>
		)}	

		</div>
	   )}
    </div>
   
	);
	
}

export default Profile;