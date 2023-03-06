import './css/Attractions.css';
import sagrada from './img/sagradaFamilia.jpg';
import cordaba from './img/cordoba.jpeg';

function Attractions() {
  return (
    <div className='main'>
      <div className='header'> 
        <h1>Attractions</h1>
        <h3 style={{fontFamily: "Courgette", justifyContent: "center", color:"rgb(170, 60, 30)"}}>Spain has amazing views and an amazing history. You will not regret visiting any of these places!</h3>
      </div>
      <div className="boxes">
        <div>
          <h2>Sagrada Familia Basilica</h2>
          <img src={sagrada} alt="sagrada" />
          <p>
          The outstanding Sagrada Familia Basilica is a must see in Barcelona. It is the most visited attraction in Spain and some may says the best place to visit in Spain. It is a world heritage site that attracts over three million visitors each year; making it one of the more popular singles attractions in the world. It has beautiful Gothic structure and a combination of Gothic and modern architecture. Opening hours for public visits are between 9 am to 6 pm during the winter months and until 8 pm in the summer months. Get tickets <a style= {{color: "rgb(170, 21, 27)"}} href="https://sagradafamilia.org/en/">here!</a>
          </p>
        </div>
        <div>
        <h2>The Great Mosque of Cordoba</h2>
          <img src={cordaba} alt="cordaba" />
          <p>
          The Mezquita Mosque-Cathedral is located in the heart of the charming city, Andalusian in Cordoba. The Arab Mosque dates back to 784 A.D. and became a World Heritage site in 1984. It is one of the oldest structures still standing from the time Muslims ruled Al-Andalus. The mosque represents a unique artistic achievement due to its size and the sheer boldness of the height of its ceilings. Only a two hour train ride from Madrid, don’t miss it!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Attractions;
