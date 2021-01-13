import React,{useState} from "react";
import './Login.css';
import {FormControl,MenuItem,Select,Button} from "@material-ui/core";
import {auth,provider} from './firebase';
import { useHistory,Link} from "react-router-dom";
import {useStateValue} from './StateProvider';
import HomeIcon from '@material-ui/icons/Home';
import db from './firebase';

function Login() {

const [state,dispatch]=useStateValue();
const [isSignedIn,setIsSignedIn]=useState(false);
const [isUser,setIsUser]=useState(true);
const [providerType,setProviderType]=useState(" ");
const [phone,setPhone]=useState(" ");
const [user,setUser]=useState({ });
	
const history = useHistory();
	
const signIn = () =>{
	  
	auth.signInWithPopup(provider)
	    .then((result)=>{
		
		db.collection("users")
		  .doc(result.user?.uid)
		  .get()
		  .then((doc)=>{
			   if(doc.exists){
			     if(doc.data().isUser==false){
			     setProviderType(doc?.data().providerType);
			      dispatch({
		         type:'SET_USER',
		          user:{
		          user:result.user,
		          isUser:false,
		          providerType:doc.data().providerType,
		          phone:doc.data().phone,
		          }
		      });
		    }else{
			   dispatch({
		       type:'SET_USER',
		        user:{
			      user:result.user,
		          isUser:true,
		          phone:doc.data().phone,
		       }
		     });
		   }
         history.push('/');	
	    }
		 else{
			   setIsSignedIn(true);
		       setUser(result.user);
			     
			   }
			   })
		  .catch((error)=>{
			   alert(error.message);
			   })
		
	    })
	    .catch((error)=>{
		alert(error.message);
	    });
 }

const submitDetails = () =>{

	if(phone == " "){
		alert("Please Enter your phone Number");
		setPhone(" ");
	}
	
	else{
      if(isUser==true){
		 dispatch({
		 type:'SET_USER',
		 user:{
			  user:user,
		      isUser:true,
		      phone:phone,
		 }
		 });
		 db.collection('users')
            .doc(user?.uid)
              .set({
                  isUser: true,
			      phone:phone,
              });
		}else{
		 dispatch({
		 type:'SET_USER',
		 user:{
		  user:user,
		  isUser:false,
		  providerType:providerType,
		  phone:phone,
		 }
		 });
		 db.collection('users')
            .doc(user?.uid)
              .set({
                  isUser:false,
				  providerType:providerType,
			      phone:phone,
              });	
		  setProviderType(" ");
		}
		 setIsUser(true);
		 setPhone(" ");
		 history.push('/');	
	}
}
	
  return (
    <div className="login">
	 <div className="login_container">
	  <Link to='/'>
	 <div className="login_logo">
		<HomeIcon fontSize="large"/>
		<h1>OHMS</h1>
	 </div>
	</Link>
	{isSignedIn==false ?
			 (
			 <>
		      <div className="login_text">
	          <h1>Sign In to OHMS</h1>
	          </div>
			  <Button onClick={signIn}>Sign In with Google</Button>
	 <p>
        By signing-in you agree to the OHMS Conditions of Use & Sale. Please
        see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
    </p> 
            </>
		 ):(
			<> 
		   <h5>Choose a Category:</h5>
			<FormControl className="login_containerDropdown">
                    <Select
                    variant="outlined"
                    value={isUser}
					onChange={e => setIsUser(e.target.value)}
                    >
                    <MenuItem  value={true}>I'm a User</MenuItem>
					<MenuItem  value={false}>I'm a ServiceMan</MenuItem>
                   </Select>
                   </FormControl>
	       { isUser==false ? (
		           <>
		            <h5>Choose Your Occupation:</h5>
			        <FormControl className="login_containerDropdown">
                    <Select
                    variant="outlined"
                    value={providerType}
					onChange={e => setProviderType(e.target.value)}
                    >
                    <MenuItem  value="Mechanic">Mechanic</MenuItem>
					<MenuItem  value="Electrician">Electrician</MenuItem>
					<MenuItem  value="Plumber">Plumber</MenuItem>
					<MenuItem  value="Laundry Man">Laundry Man</MenuItem>
					<MenuItem  value="Wifi Service Worker">Wifi Service Worker</MenuItem>
					<MenuItem  value="PestControl Worker">Pest Control Worker</MenuItem>
					<MenuItem  value="Sanitisation Worker">Sanitisation Worker</MenuItem>
					<MenuItem  value="Carpenter">Carpenter</MenuItem>
					<MenuItem  value="MobileRepair Worker">Mobile Repair Worker</MenuItem>
					<MenuItem  value="Cleaning Service Worker">Cleaning Service Worker</MenuItem>
				    <MenuItem  value="Cable Service Worker">Cable Service Worker</MenuItem> 
                   </Select>
                   </FormControl>
		         </>
		      ):(
		  <>
		  </>
		 )}
	   <h5>Your Phone Number:</h5>
	  <input  onChange={(e)=>setPhone(e.target.value)} type="tel" minLength="9"/>
	  <Button onClick={submitDetails}>Submit Details</Button>
		</>
		 )}
	 </div>
    </div>
  );
}

export default Login;
