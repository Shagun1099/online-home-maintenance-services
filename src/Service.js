import React,{useEffect} from 'react';
import './Service.css';
import {Link} from 'react-router-dom';
import {useStateValue} from './StateProvider';

function Product({id,title, image,shortDescription,providerType, rating,description,options}) {
	
const[{},dispatch]=useStateValue();
	
 useEffect(()=>{
	 dispatch({
      type: "ADD_SERVICES",
      service:{
        id: id,
        title: title,
        image: image,
        rating: rating,
        providerType: providerType,
		   shortDescription:shortDescription,
		   description:description,
		   options:options
      },
    }); 
},[])
	
	
  return (
    <div className="service">
    <div className="service_info">
		<h3>{title}</h3>
	    <div className="service_description">
		<p>{shortDescription}</p>
		 </div>
        <div className="service_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />
	  <Link to={`/booking/${id}`}>
      <button className="service_btn">book the Service</button>
	  </Link>
    </div>
  );
}

export default Product;