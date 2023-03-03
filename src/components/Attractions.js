//import './Attractions.css';
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
        <div className="spongebob">
          <h2>Sagrada Familia Basilica</h2>
          <img src={sagrada} alt="spongebob house" />
          <p>
          The outstanding Sagrada Familia Basilica located in the city of Barcelona remains the most visited attraction in Spain and is arguably the best place to visit in Spain.

A world heritage site, the Sagrada Familia attracts over three million visitors each year. It is one of the most popular single attractions in the world.

This stunning Gothic structure mesmerises its visitors with its sheer beauty and highly unique architecture, which is a combination of Gothic and modern.

Visitors are able to gain access to different parts of the church including a museum, shop, nave, crypt and towers.

Opening hours for public visits are between 9 am to 6 pm during the winter months and until 8 pm in the summer months. 
          </p>
        </div>
        <div className="patrick">
        <h2>The Great Mosque of Cordoba</h2>
          <img src={cordaba} alt="patrick house" />
          <p>
          The charming Andalucian city of Cordoba is most famous for the impressive Mezquita Mosque-Cathedral located in the heart of the city.  The great Arab Mosque dates back to 784 A.D, becoming a World Heritage site in 1984. Cordoba was founded by the Romans in the 2nd Century and became one of the most important cities under the rule of emperor Augustus, the cities great era though came in the 8th century when it was conquered by the Moors.

Apart from the Great Mosque Cordoba is full of interesting places to visit including the famously decorated garden patios, the Zoco craft market, Casa Andalusi, the Jewish quarter, and the banks of the Guadalquivir River. 
          </p>
        </div>
        {/* <div className="squidward">
        <h3>Sagrada Familia Basilica</h3>
          <img src={sagrada} alt="squidwards house" />
          <p>
            Located at 122 Conch Street, this Easter Island head is a great place to stay. The ground floor consists 
            of three adjoining rooms. the one at the front being the living room. The living room consists of a 
            bookcase with some jazz records, a couch, a coffee table, and TV. Behind the living room 
            is the kitchen with a fridge, an island counter, and four cabinets. 
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default Attractions;
