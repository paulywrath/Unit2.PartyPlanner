// Create state to store fetched data.
const state = {
  parties: []
}

// Grab main element to put stuff inside later
const main = document.querySelector(`main`);

// When the page loads, it fetches a list of events from an API and stores it in state. 
const getParties = async () => {
  try {
    const response = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2406-FTB-ET-WEB-FT/events`);
    const responseJSON = await response.json();
    state.parties = responseJSON.data;

    renderPartyList();
} catch (err) {    
  alert (err);
} 
}
getParties();

// Render a list of events from the data stored in state.
const renderPartyList = () => {
  // Create what the list elements will appear inside
  const ul = document.createElement(`ul`);
  main.append(ul);

  // Create list element for each event in state
  const partyList = state.parties.map((party) => {
    return `<li>${party.name}</li>`;
  })
  
  // Add them inside parent
  ul.innerHTML = partyList.join(``);
}

// Each event is an object with details about the event. We have the option of using those details later.