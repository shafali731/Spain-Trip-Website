import './css/Homepage.css';

function Homepage() {
  return (
    <div className="content">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <div className='headerBack'>
        <h1 style={{ fontFamily: "Courgette", color: "rgb(170, 21, 27)", fontSize: "70px", justifyContent: "center", display: "flex", padding: "2px" }}>Welcome to Spain!</h1>
      </div>
      <div className='row' >
        <div class="leftside">

          <p className='writing'> Welcome to your journey of Spain. The first part of booking a trip is figuring
          out where you want to stay. Explore our hand selected beautiful hotels. After landing, 
          you will be ready to eat some delicious food. Take a look at the different restaurants we have in store
          for you. Finally, to make your trip unforgettable, plan out what attractions you want to see. 
          Enjoy planning out your trip! <br></br>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Homepage;

