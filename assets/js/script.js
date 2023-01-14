console.log(dayjs());

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// referenced: https://stackoverflow.com/questions/5015054/how-to-use-simulate-the-action-of-clicking-button-with-jquery-or-javascript
// id="time-block-container"
$(document).ready(function () {
  // add listner for click events
  $(".save-btn").on("click", function () {
    //  console.log("Button Works!!");
    console.log($(this).prev().val());
    // save to local storage
    var time = $(this).val();
    localStorage.setItem(time, $(this).prev().val());
  });
  console.log($(".description")[0]);
  // get user input that was saved in localStorage
  var textAreas = $(".description");
  console.log(textAreas);
  for (let i = 0; i < 9; i++) {
    console.log("message");
    var description = $(".description")[i];
    console.log(description);
    description.value = localStorage.getItem(i + 9);
    // present, past, or future class
    if (i + 9 == dayjs().hour()) {
      description.classList.add("present");
    } else if (i + 9 < dayjs().hour()) {
      description.classList.add("past");
    }
    if (i + 9 > dayjs().hour()) {
      description.classList.add("future");
    }
  }
  // display current date in the header of the page
  $("#currentDay").text(dayjs());
});
