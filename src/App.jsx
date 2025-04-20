import React, { useState } from 'react';
import Gallery from './components/Gallery';
import DestinationSelector from './components/DestinationSelector';

function App() {
  const [tours, setTours] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState('all');

  const filteredTours =
    selectedDestination === 'all'
      ? tours
      : tours.filter((tour) => tour.name === selectedDestination);

  return (
    <main>
      <h1>Our Tours</h1>
      <DestinationSelector
        tours={tours}
        selectedDestination={selectedDestination}
        setSelectedDestination={setSelectedDestination}
      />
    </main>
  );
}

export default App;