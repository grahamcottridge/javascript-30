// selects all checkboxes
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox');


let lastChecked; //create variable to look for lastChecked
// on list if Shift held

//check click events are working (with console.log)
function handleCheck(e) {
  // console.log(e);
  // ok, so check if user had shift key down
  // and checking it
  if(e.Shiftkey && this checked) {
    let inBetween = false;
    // then go ahead and loop over checkboxes 'inBetween' until last

  }
  lastChecked = this;
}

// loop over checkboxes and listen for click
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
