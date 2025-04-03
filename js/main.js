let cards = document.getElementsByClassName('card')

for (i= 0; i < cards.length; i++) {
    cards[i].addEventListener('click', makeReq)
}

let selection = []

// console.log(document.getElementsByClassName('card'))

function makeReq(e){

  selection.push(e.target.innerText)
  console.log(selection)

  if (selection.length === 2) {
    // magic happens
    fetch(`/api?cardOne=${selection[0]}&cardTwo=${selection[1]}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      
      
    });
    selection = []
  }

  

  

}

// document.getElementById("clickMe").onclick = makeReq;
//
// function makeReq(){
//
//   var userName = document.getElementById("userName").value;
//
//   var request = new XMLHttpRequest();
//   request.open('GET', '/api?student='+userName, true);
//
//   request.onload = function() {
//       console.log("works")
//       if (request.status >= 200 && request.status < 400) {
//         // Success!
//         var data = JSON.parse(request.responseText);
//         console.log(data)
//         document.getElementById("personName").innerHTML = data.name
//         document.getElementById("personStatus").innerHTML = data.status
//         document.getElementById("personOccupation").innerHTML = data.currentOccupation
//
//       } else {
//         // We reached our target server, but it returned an error
//
//       }
//     };
//
//     request.onerror = function() {
//       // There was a connection error of some sort
//     };
//
//     request.send();
// }
