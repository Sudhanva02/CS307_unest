import './propertyListings.css'

const PropertyListings = () => {
    return (
        <div>
        <h1 style={{ color: "red", position: "relative", top: "-40px"}}>
      UNEST Logo
    </h1><button style={{position: "relative", top: "-115px", left: "330px", backgroundColor: "white", color: "black", border: "none", fontWeight: "bold"}}>
      Properties
    </button>
    <button style={{position: "relative", top: "-115px", left: "340px", backgroundColor: "white", color: "black", border: "none", fontWeight: "bold"}}>
      Roommates
    </button>
    <button style={{position: "relative", top: "-115px", left: "800px", borderRadius: "10px"}}>
      Add Listing
      </button>
      <button style={{position: "relative", top: "-55px", left: "30px", backgroundColor: "white", color: "black", border: "none", fontWeight: "bold"}}>
      About
    </button>
    <button style={{position: "relative", top: "-55px", left: "70px", backgroundColor: "white", color: "black", border: "none", fontWeight: "bold"}}>
      Amenities
    </button>
    <button style={{position: "relative", top: "-55px", left: "120px", backgroundColor: "white", color: "black", border: "none", fontWeight: "bold"}}>
      Roommates
    </button>
      <h3 style={{ color: "black", position: "relative", top: "-60px", left: "550px"}}>
      Property Name
    </h3>
    <p style={{ color: "black", position: "relative", top: "-70px", left: "555px"}}>
      Property Address
    </p>
    <p style={{ color: "black", position: "relative", top: "-100px", left: "550px"}}>
      West Lafayette, IN 47906
    </p>
    <h3 style={{ color: "black", position: "relative", top: "50px", left: "550px"}}>
      $500 Monthly Unit Rent
    </h3>
      <button style={{position: "relative", top: "-275px", left: "540px", borderRadius: "20px", width: "200px", heigtht: "400px"}}>
      Message Lister
      </button><button style={{position: "relative", top: "-275px", left: "560px", borderRadius: "20px"}}>
      Schedule Tour Appointment
      </button>
      <div className="rectangle">
    <h1 style={{ color: "black", position: "relative", top: "130px", left: "50px"}}>
      Insert Property Image Here
    </h1>
    <h3 style={{ color: "black", position: "relative", top: "90px", left: "900px"}}>
      1 Room
    </h3> 
    <h3 style={{ color: "black", position: "relative", top: "70px", left: "900px"}}>
      1 Bath
    </h3>
    <input type="text" value="Search" style={{position: "relative", top: "-455px", left: "600px", width: "400px", textAlign: "center"}}/>
    <p style={{position: "relative", top: "-515px", left: "1200px"}}>
      Msg
    </p>
    <p style={{position: "relative", top: "-570px", left: "1275px"}}>
      Profile
    </p>
      </div>
      <h3 style={{position: "relative", top: "-280px", left: "180px"}}>
        Amenities
      </h3>
      <ul>
        <li>
          In-Unit Laundry
        </li>
        <li>
          Garage Parking
        </li>
        <li>
          Gym
        </li>
        <li>
          Bicycle Storage
        </li>
        <li>
          Maintenance on site
        </li>
        <li>
          Game Room
        </li>
      </ul>
      <ul style={{position: "relative", top: "-605px", left: "500px"}}>
        <li>
          Keyed Access
        </li>
        <li>
          Pool
        </li>
        <li>
          EV Charging
        </li>
        <li>
          Outdoor Grill
        </li>
        <li>
          Balcony
        </li>
        <li>
          In-Unit Laundry
        </li>
      </ul>
      <h2 style={{position: "relative", top: "-580px", left: "160px"}}>Users Looking for Roommates Who Viewed this Property</h2>
      <div className='roommate1' style={{position: "relative", top: "-500px", left: "50px"}}>
      <h3 style={{ color: "black", textAlign: "center" }}>
      Insert Profile Pic Here
      </h3> 
       <h6 style={{textAlign: "center", position: "relative", top: "30px"}}>John Jones</h6> 
       <p style={{textAlign: "center"}}>Undergraduate Senior majoring in Computer Science.</p>
      </div>
      <div className='roommate2' style={{position: "relative", top: "-500px", left: "80px"}}>
      <h3 style={{ color: "black", textAlign: "center" }}>
      Insert Profile Pic Here
    </h3>
       <h6 style={{textAlign: "center", position: "relative", top: "30px"}}>Walker Smith</h6>
       <p style={{textAlign: "center"}}>First Year Masters Student studying Mathmatics.</p>
      </div>
      <div className='roommate3' style={{position: "relative", top: "-500px", left: "110px"}}>
      <h3 style={{ color: "black", textAlign: "center" }}>
      Insert Profile Pic Here
      </h3>
       <h6 style={{textAlign: "center", position: "relative", top: "30px"}}>Pete Day</h6>
       <p style={{textAlign: "center"}}>Undergraduate Junior majoring in Communications.</p>
      </div>
      <div className='roommate4' style={{position: "relative", top: "-500px", left: "140px"}}>
      <h3 style={{ color: "black", textAlign: "center" }}>
      Insert Profile Pic Here
      </h3>
       <h6 style={{textAlign: "center", position: "relative", top: "30px"}}>Jose Stricker</h6>
       <p style={{textAlign: "center"}}>Second year Master's Student studying Data Science.</p>
      </div>
      <button style={{position: "relative", top: "-500px", left: "50px", borderRadius: "20px", width: "300px", heigtht: "600px"}}>
      Message
      </button>
      <button style={{position: "relative", top: "-500px", left: "90px", borderRadius: "20px", width: "300px", heigtht: "600px"}}>
      Message
      </button>
      <button style={{position: "relative", top: "-500px", left: "120px", borderRadius: "20px", width: "300px", heigtht: "600px"}}>
      Message
      </button>
      <button style={{position: "relative", top: "-500px", left: "160px", borderRadius: "20px", width: "300px", heigtht: "600px"}}>
      Message
      </button>
        </div>
      );
};

export default PropertyListings;