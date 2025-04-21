import React, { useState } from 'react'; // Imports react and local state
import Gallery from './components/Gallery'; // Imports gallery component
import DestinationSelector from './components/DestinationSelector'; // Imports destination selector component
import "./styles/styles.css"; // Imports styles

function App() { 
  const [tours, setTours] = useState([]); // Initializes tours state to an empty array
  const [selectedDestination, setSelectedDestination] = useState(''); // Initializes with empty string

  const filteredTours = // Filters tours based on selected destination
    selectedDestination === ''
      ? tours
      : tours.filter((tour) => tour.name === selectedDestination);

  return (
    <main>
      <h1>Our Tours</h1>
    
      {/* Dropdown Filter */}
      <DestinationSelector
        tours={tours}
        onDestinationChange={setSelectedDestination}
        />
    
      {/* Tour Gallery Display */}
      <Gallery
        tours={filteredTours}
        setTours={setTours}
        onRemove={(id) => setTours(tours.filter((tour) => tour.id !== id))}
      />
    </main>
  );
};

export default App; // Exports app component