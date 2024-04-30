// Filtering Social Security Number
function formatInput(input) {
  // Remove non-digit characters
  var cleaned = input.value.replace(/\D/g, '');

  // Apply formatting
  var formatted = '';
  for (var i = 0; i < cleaned.length; i++) {
    if (i === 3 || i === 5) {
      formatted += '-';
    }
    formatted += cleaned[i];
  }

  // Update the input value
  input.value = formatted;
}

// Function to confirm the details entered by User
document.querySelector('#confirm').addEventListener('click', confirmDetails)
function confirmDetails() {
  let fName = document.querySelector('#fullName').value.trim()
  let ssn = document.querySelector('#ssNumber').value.trim()
  let dob = document.querySelector('#dob').value.trim()
  let party = document.querySelector('#partySelect').value.trim()

  document.querySelector('#printName').innerText = `Name: ${fName}`
  document.querySelector('#printSsn').innerText = `Social Security Number: ${ssn}`
  document.querySelector('#printDob').innerText = `Birthday: ${dob}`
  document.querySelector('#printParty').innerText = `Party: ${party}`
}

// Function to submit vote
document.querySelector('#vote').addEventListener('click', run)
function run() {
  let fName = document.querySelector('#fullName').value.trim()
  let ssn = document.querySelector('#ssNumber').value.trim()
  let dob = document.querySelector('#dob').value.trim()
  let party = document.querySelector('#partySelect').value.trim()

  if (fName === '' || ssn === '' || dob === '' || party === '') {
    alert('Please fill in all fields.');
  } else {
    alert('Your vote is registered successfully! Thank You.');
  }
}
