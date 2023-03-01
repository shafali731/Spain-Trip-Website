import './css/Homepage.css';
import homeImage from './img/homeImage.jpg'

function Homepage() {
  return (
    <div className="content">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <div className='headerBack'>
      <h1 style={{fontFamily: "Courgette", color: "red",fontSize: "70px", justifyContent: "center", display: "flex"}}>Welcome to Spain!</h1>
      </div>
      {/* <div class="menu"> */}
        {/* Photo by <a href="https://unsplash.com/@jorgefdezsalas?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jorge Fernández Salas</a> on <a href="https://unsplash.com/s/photos/spain?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
   */}
  {/* <ul> */}
    {/* <li>The Flight</li>
    <li>The City</li>
    <li>The Island</li>
    <li>The Food</li> */}
  {/* </ul> */}
{/* </div> */}
<div className='homeImage'> 
<img src={homeImage} alt="Spain" />
</div>

    </div>
  );
}

export default Homepage;

