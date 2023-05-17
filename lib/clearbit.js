const authorization = "Bearer YOUR_API_KEY";
// TODO
// 1. Select the input elements on my form
const submitForm = document.querySelector("#clearbitForm")
const inputElement = document.querySelector("#clearbitEmail")
const userName = document.getElementById('userName')
const userBio = document.getElementById('userBio')
const userEmail = document.getElementById('userEmail')
const userLocation = document.getElementById('userLocation')


const fetchInfo = (event) => {
  event.preventDefault();
  fetch(`https://person.clearbit.com/v1/people/email/${inputElement.value}`, { headers: { Authorization: authorization }})
    .then(response => response.json())
    .then((data) => {
      console.log(data)
      userName.innerText = data.name.fullName;
      userBio.innerText = data.bio;
      userEmail.innerText = data.email;
      userLocation.innerText = data.location;
    });
}
submitForm.addEventListener('submit', fetchInfo)

// 2. Prevent the default behaviour of the form

// 3. Add a listener on the form elements
// 4. When the submit event happens, get the value in the input element
// 5. Fetch the informatiopn using the Clearbit API




// 6. Read the json and display the results
