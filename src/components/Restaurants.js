import './css/Restaurants.css';
import sacha from './img/sacha.png';
import diverxo from './img/diverxo.jpeg';

function Restaurants() {
  return (
    <div className='main'>
      <div className='header'> 
        <h1>Restaurants</h1>
        <h3 style={{fontFamily: "Courgette", justifyContent: "center", color:"rgb(170, 60, 30)"}}>
          What is vacation without some delicious food? Grab a menu from any of these restaurants</h3>
      </div>
      <div className="boxes">
        <div className="spongebob">
          {/* <p className='sideb'>REST</p> */}
          <div className='card'>
          <h2>Sacha</h2>
          <img src={sacha} alt="spongebob house" />
          <p>
          Sasha is a favorite for both locals and tourists. It’s an intimate bistro with chefs from both near and far. Customers often come for dinner and leave in the middle of the night! It offers elevated comfort food: faux” ravioli stuffed with txangurro (king crab), marinated oysters, bone marrow with a side of sirloin, and lots of wine! The owner Sacha Hormaechea is super friendly and loves creating guests! Check out the menu <a style= {{color: "rgb(170, 21, 27)"}} href="https://www.restaurantesacha.com">here!</a>
          </p>
          </div>
        </div>
        <div className="patrick">
        <div className='card'>
        <h2>DiverXo</h2>
          <img src={diverxo} alt="patrick house" />
          <p>
          DiverXo is the brainchild of imaginative spirit chef David Muñoz. This three-Michelin-star restaurant is located inside the Eurobuilding hotel. Muñoz breaks down the boundaries of avant-grade cooking with it’s food bursting in flavor and looking amazing. There are plenty of entrees, appetizers, and of course dessert. Check out the menu <a style= {{color: "rgb(170, 21, 27)"}} href="https://diverxo.com/en/home/">here!</a>
          </p>
        </div>
        </div>
    </div>
    </div>
  );
}

export default Restaurants;
