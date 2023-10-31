function scuberGreetingForFeet(depth){
  // Write your code here!
  let payment
  if (depth <= 400) {
    payment = 'This one is on me!'
  } else if (depth > 400 && depth <= 2000) {
    payment = 'That will be twenty bucks.'
  } else if (depth > 2000 && depth <= 2500) {
    payment = 'I will gladly take your thirty bucks.'
  } else if (depth > 2500) {
    payment = 'No can do.'
  }
  return payment
}
scuberGreetingForFeet(199, 1500, 2001, 2501)


function ternaryCheckCity(city){
  // Write your code here!
  let message = (city === "NYC") ? "Ok, sounds good." : "No go.";
  return message
}
ternaryCheckCity("NYC", "Pittsburgh")

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case 'generous':
      return "Thank you so much."
    case 'not as generous':
      return "Thank you."
    default:
      return "Bye."
  }
}
switchOnCharmFromTip(tip)