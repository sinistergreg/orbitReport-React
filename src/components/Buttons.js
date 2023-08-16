import './styling.css';
import satData from './satData';

const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div className="flex-container"> 
      {displaySats.map((sat, id) => (
        <button onClick={() => filterByType(sat)} key={id}>
          {sat} Orbit
        </button>
      ))}
      
      <button onClick={() => setSat(satData)}> {/* Reset to all orbits */}
        All Orbits
      </button>
    </div>
  );
};
  const displaySats = ['Low', 'Medium', 'high']; // Example array of satellite types

export default Buttons;