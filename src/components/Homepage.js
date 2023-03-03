import './css/Homepage.css';
import homeImage from './img/homeImage.jpg'

function Homepage() {
  return (
    <div className="content">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <div className='headerBack'>
        <h1 style={{ fontFamily: "Courgette", color: "rgb(170, 21, 27)", fontSize: "70px", justifyContent: "center", display: "flex", padding: "2px" }}>Welcome to Spain!</h1>
      </div>
      <div className='row'>
        <div class="leftside">

          <p className='writing'> Welcome to your journey of Spain. The first part of booking a trip is figuring
          out where you want to stay. Explore our hand selected beautiful hotels. After landing, 
          you will be ready to eat some delicious food. Take a look at the different restaurants we have in store
          for you. Finally, to make your trip unforgettable, plan out what attractions you want to see. 
          Enjoy planning out your trip! <br></br>
          </p>

        </div>
        {/* Photo by <a href="https://unsplash.com/@jorgefdezsalas?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jorge Fernández Salas</a> on <a href="https://unsplash.com/s/photos/spain?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
   */}
        <div className='homeImage'>
          <img src={homeImage} alt="Spain" />
        </div>
        <div class="rightside">

          <p className='writing'> 
          {/* To navigate our website choose any of the links in the navigation bar on the top.  */}
          <ul>
            <li>Hotels will take you to the different hotels we picked out for you</li>
            <li>
            Restaurants will show you the top restaurants in our opinion.</li>
            <li>Attractions is where you
          can see different places to visit.</li>
          <li>Whenever you're lost you can always go home and return back 
          to this page</li>
          {/* <li></li> */}
          </ul>
          {/* Hotels will take you to the different hotels we picked out for you. Restaurants
          will show you the top restaurants in our opinoin. And finally, attractions is where you
          can see different places to visit. Whenever you're lost you can always go home and return back 
          to this page <br></br><br></br> */}
  
          </p>

        </div>
      </div>
    </div>
  );
}

export default Homepage;

