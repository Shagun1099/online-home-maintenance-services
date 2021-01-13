import React,{useState,useEffect} from 'react';
import './Booking.css';
import emailjs from 'emailjs-com';
import {useStateValue} from './StateProvider.js';
import { Link, useHistory ,useParams } from "react-router-dom";
import {InputLabel, MenuItem, FormControl,Select } from "@material-ui/core";
import firebase from 'firebase';
import db from './firebase';

function Booking(){
	
const [{services,user},dispatch] =useStateValue();
const {id} = useParams();
const history = useHistory();
const [service,setService]=useState([]);

const [serviceOption,setServiceOption] = useState(" ");
const [serviceDate,setServiceDate] = useState(" ");
const [adrLineOne,setAdrLineOne]=useState(" ");
const [adrLineTwo,setAdrLineTwo]=useState(" ");
const [pin,setPin]=useState(" ");
const [budget,setBudget]=useState(" ");
const [description,setDescription]=useState(" ");

	
useEffect(()=>{
	services.map(function(service){
		if(service.id==id){
			setService(service);
		}
	})
},[]);
	
const bookService = e =>{
	 e.preventDefault();
 if(!user){
	 alert("Sorry,You need to be logged in to do that!!"); 
 }
	else if(!pin){
		alert("Please enter the Pin Code");
	}
	else if(!serviceOption){
		alert("Please Select a service option");
	}else if(!description){
		alert("Please Enter atleast One line description");
	}else{

	 db.collection('users')
	  .doc(user.user.uid)
	  .collection("orders")
	  .add({
		serviceId:id,
		service:service.title,
		serviceDate:serviceDate,
		adrLineOne:adrLineOne,
		adrLineTwo:adrLineTwo,
		pinCode:pin,
		serviceOption:serviceOption,
		description:description,
		timestamp: firebase.firestore.FieldValue.serverTimestamp(), 
		
	  });

	 db.collection('bookings')
	   .doc('allBookings')
	   .collection(service?.providerType)
	   .add({
		name:user?.user?.displayName,
		email:user?.user?.email,
		phone:user?.phone,
		serviceId:id,
		service:service.title,
		serviceDate:serviceDate,
		adrLineOne:adrLineOne,
		adrLineTwo:adrLineTwo,
		pinCode:pin,
		serviceOption:serviceOption,
		description:description,
		timestamp: firebase.firestore.FieldValue.serverTimestamp(), 
        });
	 
	const template_params ={
			"userEmail":user.user?.email,
			"userPhone":user?.phone,
			"userAddress":adrLineOne+" "+adrLineTwo,
			"userName":user.user?.displayName,
		    "bookingType":service.title,
		    "bookingCategory":serviceOption,
		    "favourableDate":serviceDate,
		    "bookingDescription":description,
		    "createdAt": new Date().toISOString().slice(0, 10),
		    "emailTitle":"Your Booking is Confirmed",
			"userPin":pin,
		}
       emailjs.send('service_8v5gotr', 'template_lnzak8m',template_params, 'user_5p8NjkxNwbZvfBpjoS4YO')
      .then((result) => {
          console.log("SUCCESS",result.text);
       }, (error) => {
          console.log(error.text);
       });
	
	alert("Your Booking is Successfully Placed");
		   
	setDescription(" ");
	setBudget(" ");
	setAdrLineOne(" ");
	setAdrLineTwo(" ");
	setPin(" ");
	setServiceDate(" ");
	setServiceOption(" ");
	 
	history.replace('/');
 }
}
	 
	return(
	  <div className="booking">
	    <div className="booking_container">
		 <img className="booking_image" src={service.image} alt=" "/>
		 <div className="booking_info">
			<h2>{service.title}</h2>
			<p>{service.description}</p>
		 </div>
		 <div className='booking_formContainer'>
			 <h1>Book {service.title}</h1>

                <form>
					 <h5>Choose an Option:</h5>
					<FormControl className="booking_formContainerDropdown">
                    <Select
                    variant="outlined"
                    value={serviceOption}
					onChange={e => setServiceOption(e.target.value)}
                    >
                     { service.options && service.options.map((option) => (
                    <MenuItem  value={option}>{option}</MenuItem>
                    ))}
                   </Select>
                   </FormControl>

                    <h5>Address Line 1</h5>
                    <input type='text' value={adrLineOne} onChange={e => setAdrLineOne(e.target.value)}/>
					
					 <h5>Address Line 2</h5>
                    <input type='text' value={adrLineTwo} onChange={e => setAdrLineTwo(e.target.value)}/>
					
					 <h5>Your Pin Code</h5>
                     <input type='text' value={pin} onChange={e => setPin(e.target.value)}/>
					
				     <h5>Enter Your favourable Date:</h5>
					 <input type="date" value={serviceDate} onChange={e => setServiceDate(e.target.value)}/>
					
					 <h5>Description</h5>
                    <input className="booking_descriptionInput" type='text' value={description} onChange={e => setDescription(e.target.value)}/>

                    <button type='submit' onClick={bookService} className='booking_submitButton'>Submit Booking Details</button>
                </form>

			    <p>
                    By signing-in you agree to the OHMS Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p> 

            </div>
		</div>
	  </div>
	
	)
}

export default Booking;