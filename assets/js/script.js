console.log(dayjs());
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// referenced: https://stackoverflow.com/questions/8611713/running-javascript-after-page-is-fully-rendered
// $(window).load(function() {
  //dom not only ready, but everything is loaded
// });

// referenced: https://www.google.com/search?q=how+to+use+day.js+to+create+a+planner+js&oq=how+to+use+day.js+to+create+a+planner+js&aqs=chrome..69i57j33i160l2j33i22i29i30.12040j0j7&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:b3bbccd0,vid:vzGzys3enCE
// events.forEach(event => {
//   const date = dayjs(event.dataset.date)
//   const dateElement = event.querySelector('.date')
//   dateElement.innerText = date
// })

// $("#save-btn").click();
// console.log("Button Works!!")


// referenced: https://stackoverflow.com/questions/5015054/how-to-use-simulate-the-action-of-clicking-button-with-jquery-or-javascript
$(document).ready(function() {

  $("#save-btn").on("click", function() {

   console.log("Button Works!!");

  })
  $("#save-btn").click();
  $("#save-btn").trigger("click")
  
  });

$(function () {
// var row time-block present

  // TODO: Add a listener for click events on the save button. This code should

  id="time-block-container"




  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
