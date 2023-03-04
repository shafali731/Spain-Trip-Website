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
          <div className='card'>
          <h2>Sacha</h2>
          <img src={sacha} alt="spongebob house" />
          <p>
          This is the type of restaurant that makes everyone wish they were a regular, coming in for dinner every week and leaving in the wee hours. It offers the epitome of elevated comfort food: so-called “faux” ravioli stuffed with txangurro (king crab), marinated oysters, bone marrow with a side of sirloin, and wine — lots of wine. And if you spot owner Sacha Hormaechea greeting guests, make sure to shake his hand. He’s quite the character.
          </p>
          </div>
        </div>
        <div className="patrick">
        <div className='card'>
        <h2>DiverXo</h2>
          <img src={diverxo} alt="patrick house" />
          <p>

          Think of Charlie and the Chocolate Factory, Alice in Wonderland, dreams and nightmares — this is the imaginative spirit chef David Muñoz brings to his three-Michelin-star restaurant located inside the Eurobuilding hotel. At DiverXO, Muñoz breaks the boundaries of avant-garde cooking, using intense flavors in two tasting menus that aim to surprise diners with dishes that imitate works of art both in their aesthetics and their taste.          </p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Restaurants;
