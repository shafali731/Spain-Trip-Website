//import './Attractions.css';
import './css/Hotels.css';
import magna from './img/Magna.jpeg';
import fourSeasons from './img/fourSeasons.jpeg';

function Hotels() {
  const rosewoodDesc = "The Villa Magna has a plethora of amenities available to its visitors. There are plenty of designer stores and a luxury spa. It’s marvelous location sits near Madrid’s most famous shopping street, Calle Serrano. \
   You will be surrounded by many upscale restaurants and stores such as Gucci, Chanel, and Prada. \
   Book a Real Suite that holds the title fo the most spacious accommodation in Madrid or choose from the variety of 150 other rooms that are available!\
   Book your stay"
   const fourSeasonsDesc = "\
   The Four Seasons Hotel Madrid is in the very heart of the capital. Most key attractions are just a walking distance away! \
   Enjoy rooftop dining by Spanish celebrity chef Dani García, a four-level spa and a sun-splashed pool terrace. \
   Spend your time in Madrid surrounded by luxury. Book your stay "
  return (
    <div className='main'>
      <div className='header'> 
        <h1>Hotels</h1>
        <h3 style={{fontFamily: "Courgette", justifyContent: "center", color:"rgb(170, 60, 30)"}}>One of the best parts of vacation is laying back and relaxing. Do that in any of these amazing hotels!</h3>
      </div>
      <div className="boxes">
        <div className="spongebob">
        <div className='card'>
          <h2>Rosewood Villa Magna</h2>
          <img src={magna} alt="spongebob house" />
          <p>
            {rosewoodDesc} <a style= {{color: "rgb(170, 21, 27)"}} href="https://www.rosewoodhotels.com/en/villa-magna">here!</a>
          {/* The spacious rooms, luxury spa and nearby designer stores are just some of the reasons why Villa Magna draws visitors from around the world. The hotel sits near Madrid's most famous shopping street, Calle Serrano, and it is surrounded by upscale restaurants as well as a plethora of stores from Gucci to Chanel to Prada. The interior of the hotel, including a vast marble lobby and stained glass windows, reflects the property's chic surroundings. In the rooms and suites, guests can enjoy Egyptian cotton sheets, coffee machines, pillow menus, complimentary shoeshine services and a variety of limousine services upon request. There are 150 rooms and suites to choose from, and the hotel says its Real Suite holds the title of the most spacious accommodation in Madrid. Past guests rave about the cleanliness of the rooms and say the staff treats visitors like royalty. However, some visitors were unimpressed with the view from their rooms. When it's time for a meal, the hotel provides diverse dining options: Guests can enjoy a la carte breakfast at the Restaurante Villa Magna, sip cocktails at the Patio Magnum, share tapas at The Lounge and even get a taste of Hong Kong at Tse Yang Restaurant. A member of The Leading Hotels of the World portfolio, the property grants Leaders Club members additional perks like free breakfast and room upgrades. */}
          </p>
        </div>
        </div>
        <div className="patrick">
        <div className='card'>
        <h2>Four Seasons Hotel Madrid</h2>
          <img src={fourSeasons} alt="patrick house" />
          <p>
            {fourSeasonsDesc} <a style= {{color: "rgb(170, 21, 27)"}} href="https://www.fourseasons.com/madrid/">here!</a>

{/* History comes to life with vibrant modern energy at Four Seasons Hotel Madrid. In the very heart of the capital – within walking distance of all the key attractions – seven historic buildings have been transformed into one dynamic destination. With rooftop dining by Spanish celebrity chef Dani García, a four-level spa and a sun-splashed pool terrace, Four Seasons is bringing a new level of luxury and service to Madrid. */}
          </p>
          </div>
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

export default Hotels;
