// ? Task 1
// When the button with the id of "toggle" is clicked, you should toggle a class of "pulse" on the circle div. 
// * Hint 1: If you have added the class correctly, you should see the circle turn red, and it should pulse.
// * Hint 2: When you click the button again, it should go back to being an outline of a circle.



// ? Three E's of event driven javascript

// ! 1. Elements - These are the HTML elements that will trigger events or be changed in some way
// Target the button with the id of "toggle"
const toggleBtn = document.querySelector('#toggle')

// Target the circle div
const circleDiv = document.querySelector('.circle')

// ! 2. Executions - This is what happens when an event occurs (a function)
function togglePulse(){
  // Toggle a class of "pulse" on the circle div
  circleDiv.classList.toggle('pulse')
}

// ! 3. Events - This is where we define what events are happening on what elements
// Add click event to the button with id of "toggle"
toggleBtn.addEventListener('click', togglePulse)





// ? Task 2
// Add a 'change' event listener to the "cities" select element
// When a city is selected, the value of the selected city option should be inserted into the "city" span element

// ! Elements
// Target "cities" <select> element
const citiesElement = document.querySelector('#cities')
// Target "city" <span> element
const citySpan = document.querySelector('#city')


// ! Executions
function selectCity(){
  // ? the value of the selected city option should be inserted into the "city" span element
  // Find the value of the selected city option
  // add the selected city value into the city span element
  citySpan.textContent = citiesElement.value
  
}

// ! Events
// Add a 'change' event listener to the "cities" select element
citiesElement.addEventListener('change', selectCity)



//  ? Task 3
// Part One: Add event listeners to each of the divs with the class of "name", so that when you hover over that div, the name inside that div appears inside the span with the id of "current".

// Part Two: Add event listeners to each of the divs with the class of "name", so that when the mouse leaves any of the divs, the span with the id of "current" is empty.

// ! Elements
// Target divs with the class of "name"
const nameDivs = document.querySelectorAll('.name')
// Target span with the id of "current"
const currentSpan = document.querySelector('#current')

// ! Executions
function hoverEnter(event){
  // ? the name inside the div being hovered should appear inside the span with the id of "current".
  // 1. Find which div is being hovered
  const div = event.target // event.target is the element that triggered the event

  // 2. Get the name inside of the div
  const name = div.textContent

  // 3. Add name as textContent of the "#current" span
  currentSpan.textContent = name
}


function hoverLeave(){
  currentSpan.textContent = ''
}

// ! Events
// Add hover event to each "name" div
nameDivs.forEach(div => {
  // Add an mouseenter event to each "div"
  div.addEventListener('mouseenter', hoverEnter)
  div.addEventListener('mouseleave', hoverLeave)
})


// ? Task 4
// Add a "submit" event listener to the form with the id of "subscribe"
// When the form is submitted, add a class of "submitted" to the button inside the form.
// You should also update the innerHTML of the button to be "Submitted!".
// * Hint 1: If you have added the class correctly, you should see that the button has an opacity of 0.8. 
// * Hint 2: You will need to prevent the default behaviour of the form in order to stop the page from refreshing before the changes are made.


// ! Elements
// Target the form with the id of "subscribe"
const formElement = document.querySelector('#subscribe')
// const submitButton = document.querySelector('.submit')

// ! Executions
function submitForm(event){
  // * Prevent form from reloading page (https://www.w3schools.com/jsref/event_preventdefault.asp)
  event.preventDefault()
  
  // Target the button that submitted the form
  const button = event.submitter

  // 1. add a class of "submitted" to the button inside the form.
  button.classList.add('submitted')
  // 2. You should also update the innerHTML of the button to be "Submitted!".
  button.textContent = 'Submitted!'
}

// ! Events
// Add a "submit" event listener to the form
formElement.addEventListener('submit', submitForm)



// ? BONUS Task 5
// Add an event listener to the window, so that when the user scrolls, you check whether or not the scrollY property of the window is greater than 40. 
// If it is greater than 40, add the class "fadeOutUp" to the <h1> tag. 
// If it is less than 40, remove the class "fadeOutUp" from the <h1> tag.
// * Hint: As you scroll, you should see the <h1> tag fade out. If you scroll back down, it will reappear.

// ! Elements
const h1 = document.querySelector('.animated')

// ! Executions
function handleScroll(){
  console.log(window.scrollY)
  if (window.scrollY > 40) {
    h1.classList.add('fadeOutUp')
  } else if (window.scrollY < 40) {
    h1.classList.remove('fadeOutUp')
  }
}

// ! Events
window.addEventListener('scroll', handleScroll)