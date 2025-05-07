const eventForm = document.getElementById('eventForm');
const addEventBtn = document.getElementById('addEventBtn');
const eventModal = document.getElementById('eventModal');
const eventsContainer = document.getElementById('eventsContainer');
const closeModalBtns = document.querySelectorAll('.close-modal');

let editIndex = null;

function getEvents() {
  return JSON.parse(localStorage.getItem('events')) || [];
}

function saveEvents(events) {
  localStorage.setItem('events', JSON.stringify(events));
}

//READ EVENT(Thabang)

function renderEvents() {
 eventsContainer.innerHTML = '';
  const events = getEvents();
  events.forEach((event, index) => {
    const eventCard = document.createElement('div');
    eventCard.classList.add('event-card');
    eventCard.innerHTML = `
      <h3>${event.title}</h3>
      <p><strong>Date:</strong> ${event.date}</p>
      <p><strong>Time:</strong> ${event.time}</p>
      <p><strong>Location:</strong> ${event.location}</p>
      <p><strong>Description:</strong> ${event.description}</p>
      <p><strong>Guests:</strong> ${event.guests}</p>
      <img src="${event.image || 'https://via.placeholder.com/150'}" />
      <div style="margin-top:10px;">
        <button onclick="editEvent(${index})">Edit</button>
        <button onclick="deleteEvent(${index})">Delete</button>
      </div>
    `;
    eventsContainer.appendChild(eventCard);
  });
}
//
function resetForm() {
    eventForm.reset();
    editIndex = null;
  }
  
  addEventBtn.addEventListener('click', () => {
    resetForm();
    eventModal.style.display = 'flex';
  });
  
  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      eventModal.style.display = 'none';
    });
  });
  
  eventForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newEvent = {
      title: document.getElementById('eventTitle').value,
      date: document.getElementById('eventDate').value,
      time: document.getElementById('eventTime').value,
      location: document.getElementById('eventLocation').value,
      description: document.getElementById('eventDescription').value,
      guests: document.getElementById('eventGuests').value,
      image: document.getElementById('eventImage').value
    };
  
    const events = getEvents();
    if (editIndex !== null) {
      events[editIndex] = newEvent;
    } else {
      events.push(newEvent);
    }
  
    saveEvents(events);
    renderEvents();
    resetForm();
    eventModal.style.display = 'none';
  });

//EDIT EVENT
  window.editEvent = function(index) {
  const event = getEvents()[index];
  document.getElementById('eventTitle').value = event.title;
  document.getElementById('eventDate').value = event.date;
  document.getElementById('eventTime').value = event.time;
  document.getElementById('eventLocation').value = event.location;
  document.getElementById('eventDescription').value = event.description;
  document.getElementById('eventGuests').value = event.guests;
  document.getElementById('eventImage').value = event.image;

  editIndex = index;
  eventModal.style.display = 'flex';
};
//DELETE EVENT

function deleteEvent(index) {
  const confirmed = confirm("Are you sure you want to delete this event?");
  if (confirmed) {
    const events = getEvents();     
    events.splice(index, 1);        
    saveEvents(events);             
    renderEvents();                 
    alert("Event deleted successfully!");
  }
}



renderEvents();
