
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

//READ EVENT


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

//DELETE EVENT

renderEvents();