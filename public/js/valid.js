
function validNo() {
  // Get the value of the input field with id="numb"
  let x = document.getElementById("qty").value;
  // If x is Not a Number or less than one or greater than 10
  let text = "invalid selection please input a valid number"
  if (isNaN(x)) {
        alert(text)
  } else {
    return x
  }

    let y = document.getElementById("phone").value;
    // If x is Not a Number or less than one or greater than 10
    if (isNaN(y)) {
    alert(text);
    
    } else {
      return y
    }
    

}
