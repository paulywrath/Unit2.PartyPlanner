// Create state to store fetched data.
const state = {
  parties: []
}

// When the page loads, it fetches a list of events from an API and stores it in state. 
const getParties = async () => {
  try {
    const response = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2406-FTB-ET-WEB-FT/events`);
    const responseJSON = await response.json();
    state.parties = responseJSON 
    console.log(state.parties);
  } catch (err) {    
    alert (err);
  } 
}
getParties();

// Render a list of events from the data stored in state.
  // Grab what the list elements will appear inside
  // Create list element for each event in state
  // Put event data inside list element
  // Add them inside parent

// Each event is an object with details about the event. We have the option of using those details later.