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
        <div >
        <div className='card'>
          <h2>Rosewood Villa Magna</h2>
          <img src={magna} alt="magna" />
          <p>
            {rosewoodDesc} <a style= {{color: "rgb(170, 21, 27)"}} href="https://www.rosewoodhotels.com/en/villa-magna">here!</a>
          </p>
        </div>
        </div>
        <div>
        <div className='card'>
        <h2>Four Seasons Hotel Madrid</h2>
          <img src={fourSeasons} alt="fourSeasons" />
          <p>
            {fourSeasonsDesc} <a style= {{color: "rgb(170, 21, 27)"}} href="https://www.fourseasons.com/madrid/">here!</a>
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hotels;
