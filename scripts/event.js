document.addEventListener("DOMContentLoaded", function () {
    const dateInput = document.getElementById("eventDate");
    const timeInput = document.getElementById("eventTime");
    const form = document.getElementById("eventForm");
    const successMessage = document.getElementById("success-message");
  
    setMinDate(dateInput);
  
    dateInput.addEventListener("change", function () {
      validateDate(dateInput);
    });
  
    form.addEventListener("submit", function (e) {
      handleSubmit(e, dateInput, timeInput, form, successMessage);
    });
  });
  
  function setMinDate(dateInput) {
    const today = new Date().toISOString().split("T")[0];
    console.log("Min Date Set To:", today);
    dateInput.min = today;
  }
  
  
  function validateDate(dateInput) {
    const selectedDate = new Date(dateInput.value);
    const now = new Date();
  
   now.setHours(0, 0, 0, 0);

   
   if (selectedDate < now) {
     alert("You cannot select a past date. Please choose today's date or later.");
     dateInput.value = "";  
   }
  }
  
  function handleSubmit(e, dateInput, timeInput, form, successMessage) {
    e.preventDefault(); 
  
    const selectedDate = dateInput.value;
    
    const selectedDateTime = new Date(`${selectedDate}T${selectedTime}`);
    const now = new Date();
  
    if (selectedDateTime < now) {
      alert("You cannot select a past date and time.");
      return;
    }
  
    successMessage.style.display = "block";
    form.reset();
    setMinDate(dateInput); 
  }
  //test changes
