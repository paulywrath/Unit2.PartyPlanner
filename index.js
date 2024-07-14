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

  // When you click on a party on the list, the page switches to details about that party.
  // Grab list items
  const partyListItems = document.querySelectorAll(`li`);
  // Put event listener on LIs that acts on click.
  partyListItems.forEach((partyLI) => {
    // The LIs inside it are the targets for the click event.
    partyLI.addEventListener(`click`, (event) => {
      const partyName = event.target.innerText;

      // Find the party object in the parties array that matches the name clicked on 
      const clickedParty = state.parties.find((party) => {
        return party.name === partyName;
      })
      
      // Replace main.innerHTML with the details of the party and a back button. 
      main.innerHTML = `
      <p>This party is called ${partyName}.</p>
      <p>The date of the party is ${clickedParty.date}.</p>
      <p>It's being held at ${clickedParty.location}.</p>
      <p>Here's what's happening: ${clickedParty.description}.</p>
      <button>Back to Party List</button>
    `

      const backButton = document.querySelector(`button`);
      
      backButton.addEventListener(`click`, () => {
        main.innerHTML = ``;
        renderPartyList();
      })

    })
  })
}

