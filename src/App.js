import './App.css';

import Homepage from './components/Homepage';
import Hotels from './components/Hotels';
import Attractions from './components/Attractions';
import Restaurants from './components/Restaurants';

import { Routes, Route, Outlet, Link } from "react-router-dom";


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="hotels" element={<Hotels />} />
          <Route path="restaurants" element={<Restaurants />} />
          <Route path="attractions" element={<Attractions />} />


          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}
const navStyle = {textDecoration: "none", color: "rgb(170, 21, 27)"};
function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link style={navStyle} to="/">Home</Link>
          </li>
          <li>
            <Link style={navStyle} to="/hotels">Hotels</Link>
          </li>
          <li>
            <Link style={navStyle} to="/restaurants">Restaurants</Link>
          </li>
          <li>
            <Link style={navStyle} to="/attractions">Attractions</Link>
          </li>
          {/* <li>
            <Link style={navStyle} to="/nothing-here">Nothing Here</Link>
          </li> */}
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function NoMatch() {
  return (
  
    <div className='noMatch' style={{backgroundColor: "rgb(241, 191, 0)"}}>
      <h2>Seems like you've wandered off of the site a bit! There's nothing to see here!</h2>
      <div className='back'>
        <Link to="/" style= {{textDecoration:"none", color: "rgb(170, 21, 27)"}}>Go to the home page</Link>
      </div>
    </div>
  );
}

