document.addEventListener("DOMContentLoaded", function () {
    const dateInput = document.getElementById("eventDate");
    const timeInput = document.getElementById("eventTime");
    const form = document.getElementById("eventForm");
    const successMessage = document.getElementById("success-message");
  
    // Set today's date as the minimum selectable date
    setMinDate(dateInput);
  
    // Event listener for date selection
    dateInput.addEventListener("change", function () {
      validateDate(dateInput);
    });
  
    // Form submit event
    form.addEventListener("submit", function (e) {
      handleSubmit(e, dateInput, timeInput, form, successMessage);
    });
  });
  
  function setMinDate(dateInput) {
    const today = new Date().toISOString().split("T")[0];
    console.log("Min Date Set To:", today);
    dateInput.min = today;
  }
  
  
  // Function to validate the selected date
  function validateDate(dateInput) {
    const selectedDate = new Date(dateInput.value);
    const now = new Date();
  
   // Set 'now' to midnight of the current date, to compare only the date part
   now.setHours(0, 0, 0, 0);

   // Compare if the selected date is before today
   if (selectedDate < now) {
     alert("You cannot select a past date. Please choose today's date or later.");
     dateInput.value = "";  // Clear the invalid selection
   }
  }
  
  // Function to handle form submission
  function handleSubmit(e, dateInput, timeInput, form, successMessage) {
    e.preventDefault(); // Prevent actual form submission
  
    const selectedDate = dateInput.value;
    
  

    const selectedDateTime = new Date(`${selectedDate}T${selectedTime}`);
    const now = new Date();
  
    // Prevent past date/time selection
    if (selectedDateTime < now) {
      alert("You cannot select a past date and time.");
      return;
    }
  
    // If everything is valid, show success message and reset form
    successMessage.style.display = "block";
    form.reset();
    setMinDate(dateInput); // Reapply min date after reset
  }
  