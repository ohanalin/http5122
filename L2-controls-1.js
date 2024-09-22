//The structure of an if block...
if (thisValue === true) {
    //run this code in here
}
//If not true, ignore that block and keep going.

//Handling a false condition with an else block...
if (thisValue === true) {
    //run this code in here
    alert("It's true!");
} else {
    //run this code in here instead
    alert("It's NOT true!!")
}
//NOTE: Above, I did not have to say if(thisValue === false). The else block handled that condition.

//else if lets you do additional logic checks...
if (name === "Bernie"){
    alert("Hi Bernie");
} else if (name === "Joanna"){
    alert("Hi, Joanna!");
} else if (name === "Sean"){
    alert("Hi, Sean!");
} else {
    alert("I don't recognize your name");
}
//You don't have to use an else block, but if you do, it has to be last, acting as a catch-all.


//switch blocks are for checking set, known values. They take in a variable and compare it to each case until they find a match. If no match is found, the default block is executed.
switch( payForm ){
    case "CHEQUE":
      openChqInterface();
      break;

    case "CREDIT":
      openCreditInterface();
      break;

    default:
      alert("We do not accept that form of payment.");
      break;
}