// Task 2: Create a Dropdown Filter
import React, { useState } from 'react'; // Imports react and use state

const DestinationSelector = ({ tours, onDestinationChange }) => { // 
    const [selectedDestination, setSelectedDestination] = useState(''); // Initializes state for selected destination

    const handleChange = (event) => { // Handles change in dropdown selection
        const destination = event.target.value;
        setSelectedDestination(destination); // Updates local state with selected destination
        onDestinationChange(destination); // Pass the selected destination up to App.jsx
    };
    
    const uniqueDestinations = ['All Destinations', ...new Set(tours.map((tour) => tour.name))]; // Creates a new array with unique tour names

    return (
        <div>
            <label htmlFor="destination-selector">Select a Destination: </label>
            <select
                id="destination-selector"
                value={selectedDestination}
                onChange={handleChange}
            >
                {uniqueDestinations.map((destination) => (
                    <option key={destination} value={destination === 'All Destinations' ? '' : destination}>
                        {destination}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default DestinationSelector; // Exports destination selector
