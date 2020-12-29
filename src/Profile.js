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
 const [{user}] = useStateValue();
	

 useEffect(() => {
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
          }else{
			  setOrders([]);
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
		{ orders && orders.map(({data,id})=>(
	 <div className="profile_containerBottom">
		 <h3>YOUR BOOKING</h3>
		 <p className="booking_id">Booking Id:{id}</p>
		 <p>Booking For:<strong>{data?.service+"("+data?.serviceOption+")"}</strong></p>
		 <p>Service Date: <strong>{<Moment format=" MMMM D,YYYY">{data?.serviceDate}</Moment>}</strong></p>
		 <p>Address: <strong>{data?.adrLineOne + ", " + data?.adrLineTwo+" ("+ data?.pinCode+")"}</strong></p>
		 <p className="des">"{data?.description}"</p>
		 <p className="booking_creatingTime">Created At:<strong>{<Moment format=" MMM D,hh:mm:ss" unix>{data?.timestamp?.seconds}</Moment>}</strong></p>
		<button>Delete Booking</button>
		</div>
		)
	 )}
		</div>
	   )}
    </div>
   
	);
	
}

export default Profile;