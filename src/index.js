function restoreUserJourney(tickets) {
  let destinations = new Map();
  let sources = new Map();

  tickets.forEach(ticket => {
      destinations.set(ticket.source, ticket.destination);
      sources.set(ticket.destination, ticket.source);
  });

  // Find the starting point - a source that is not a destination
  let startPoint = tickets.find(ticket => !sources.has(ticket.source));

  if (!startPoint) {
      return "Error: Starting point of the journey cannot be determined.";
  }

  // Restore the journey
  let journey = [startPoint.source];
  let currentCity = startPoint.source;

  while (destinations.has(currentCity)) {
      currentCity = destinations.get(currentCity);
      journey.push(currentCity);
  }

  // Verify if the journey covers all tickets
  if (journey.length !== tickets.length + 1) {
      return "Error: Journey path is broken or incomplete. Not all destinations are connected.";
  }

  return journey.join(", ");
}

module.exports = restoreUserJourney;
