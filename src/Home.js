import React from 'react';
import './Home.css';
import Service from './Service';
import Mech from './media/Mech.jpg';
import Plum from './media/Plum.jpg';
import Elec from './media/Elec.jpg';
import WiFi from './media/WiFi.png';
import Mob from './media/Mob.jpg';
import Cab from './media/Cab.jpg';
import Car from './media/Car.jpg';
import Pest from './media/Pest.jpg';
import Laun from './media/Laun.jpg';
import San from './media/San.jpg';
import Cle from './media/Cle.jpg';


function Home() {
  return (
    <div className="home">
     <div className="home_container">
	 <img className="home_image" alt=" " src="https://bpurecleaningservices.com.au/wp-content/uploads/2015/11/bond-cleaning-services.jpg"/>
     <div className="home_row">
	     <Service
            id={1}
            title="Mechanical Service"
            image={Mech}
            rating={4}
            shortDescription="Get the awesome mechanic services on your doorsteps,just by one click!!!"
		    description="You will have a really good first experience at OHMs. The technicians will be polite and explain everything in detail. They will do a thorough check and provide a   feasible solution. You will feel like you  got a little more for the price you paid. You Will surely visit again for further maintenance. we specialize in preventive maintenance and auto repair to maximize the life of your vehicle. Our technicians implement best practices for automotive maintenance and auto repair"
			options={["Bike-puncher","car-puncher","bike-service","car-service","others"]}
          />
          <Service
            id={2}
            title="Plumber Services"
            rating={4}
            image={Plum}
			shortDescription="Get the awesome plumber services on your doorsteps,just by one click!!!"
			description="All our Service Providers are among the best in market, each having an experience of around 5 - 15 years in the domain and hence their quality is miles ahead of the local technicians. We don't  send random unverified service providers; all of them are background checked and police verified. Hence they are trusted and reliable. We ensure a guaranteed satisfaction on your job. We also offer 7 days warranty on the work done in case you are not satisfied. We would do the rework free of cost should a problem arise within 7 days of the work done by us."
			options={["basin&Sink","bathroom","toilet","tap","water-tank","Pipes","Blockage","others"]}
          />
		  <Service
            id={3}
            title="Electrician Services"
            rating={5}
            image={Elec}
			shortDescription="Get the awesome Electrician services on your doorsteps,just by one click!!!"
			description="OHMS has in a short period of time earned an excellent reputation for its quality, efficiency and timely completion of both small and large electrical projects across the city his highly equipped office with the latest technological support is ready to meet all electrical contracting business in Software Facilities, Commercial Complex, Group Housing and Apartments, Factories and Industries, Biotechnology facilities, Hotels and Resorts, Educational Institutions as well as Sub Stations.Contact us fo ..."
		    options={["fan","AC","washing machine","Microwave","Inverter","refrizerator","cooler","tv","Heater","gyser","switch&socket","wiring","MCB/fuse","others"]}
          />
	 </div>
	
	<div className="home_row">
		<Service
            id={4}
            title="WiFi Service"
            image={WiFi}
            rating={4}
            shortDescription="Get the awesome WiFi services on your doorsteps,just by one click!!!"
		    description="OHMS are known to offer excellent wireless internet connections for any and every purpose. Their services are in demand from those who are looking to have it installed in their homes as well as by those who own business and office spaces. Over the years each of these set ups have made a name for themselves and because of this have been approached by numerous lifestyle centers as well for their services"
		    options={["installation","maintainance","others"]}
          />
		  <Service
            id={5}
            title="Laundry Service"
            image={Laun}
            rating={4}
            shortDescription="Get the awesome Laundry services on your doorsteps,just by one click!!!"
			description="The amount we charge is equivalent to the cost you bear to get the laundry done at your home.Our front loading machines consume 3 times less water than the conventional washing machinesYour clothes are delivered at your doorstep with the perfect crease.We schedule pickup and drop as per your convenience."
			options={["washing","iron","both","dry-cleaning","others"]}
          />
	</div>
	<div className="home_row">
          <Service
            id={6}
            title="SANITISATION"
            rating={4}
            image={San}
			shortDescription="Get the awesome Sanitisation services on your doorsteps,just by one click!!!"
			description="A quick-spreading and infectious virus is a serious situation. On top of spreading through human contact, often the bacteria and germs found in these viruses can live on surfaces and objects for up to two weeks. Along with refraining from close personal contact with infected people, it’s important to keep our daily environments safe and sanitized too."
			options={["home","office","others"]}
          />
		  <Service
            id={7}
            title="PEST-CONTROL"
            rating={4}
            image={Pest}
			shortDescription="Get the awesome pest control services on your doorsteps,just by one click!!!"
			description="We render Pest Control and Management Measures using only Safe environment-friendly and non-polluting odor-free insecticides recommended by WHO or approved by CIB and organic repellants based on Bio- remedial measures. Highly customized treatment measures, that ensure total safety to human lives and the property, will be the basis of our pest management program since two properties are never alike."
			options={["cockroach-control","bedbugs-control","ant-control","mosquito-control","houseflies-control","rat-control","others"]}
          />
		  <Service
            id={8}
            title="Cleaning Services"
            rating={5}
            image={Cle}
			shortDescription="Get the awesome Cleaning services on your doorsteps,just by one click!!!"
			description="Being an individual we maintain our personal hygiene. Thus, home is the most mandatory place which needs to be cleaned. Our home cleaning services confirm the top notch services with the premium quality cleanser. Avail home cleaning service at least once in 3-6 months to maintain the cleanliness & hygiene of your home."
			options={["home","rooms","kitchen","Bathroom","toilet","office","others"]}
          /> 
	</div>
	<div className="home_row">
		<Service
            id={9}
            title="Carpenter Service"
            image={Car}
            rating={4}
            shortDescription="Get the awesome Carpenter services on your doorsteps,just by one click!!!"
			description="Why go looking for help when help can come to you? When it comes to carpentry work – be it furniture repairs or even making custom pieces, getting the right carpenter ensures that the work will be done in a timely manner and the finished product will look good.This can include repair work for cabinets and cardboards, creating shelves, replacing door hinges or making alterations. Looking for carpentry services online is easier than asking around for a local technician."
			options={["bed","furniture","table/diningTable","cupboard/drawer","window/door","chairs","polishing","repair","others"]}
          />
		<Service
            id={10}
            title="Mobile-Repair"
            rating={4}
            image={Mob}
			shortDescription="Get the awesome mobile repair services on your doorsteps,just by one click!!!"
			description="OHMS is the best place to get your phone repaired right at your doorstep! To get all details of your phone repair online, all you have to do is download the OHMS app and search for the model of your phone. With the help of our expertly trained technicians, you won’t have to worry about getting your phone repaired at all."
			options={[ ]}
          />
	</div>
	<div className="home_row">
		 <Service
            id={11}
            title="Cable Services"
            rating={5}
            image={Cab}
			shortDescription="Get the awesome Cable services on your doorsteps,just by one click!!!"
			description="Whether you’re moving and want to set up new service before you settle in or you're looking for alternatives to your current cable provider, OHMS can help. With just one call, you can set up cable TV service, high-speed internet service, phone service, and even home security services. Enter your zip code, choose the company you want in your area, and call to speak to one of our experts"
			 options={["installation","others"]}
          /> 
	</div>


    </div>
   </div>
  );
}

export default Home;