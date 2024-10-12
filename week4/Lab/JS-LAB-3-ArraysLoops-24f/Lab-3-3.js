//LAB 3 - ARRAYS & LOOPS - PART 3

//PART 3 - SHOPPING CART SHIPPING
//==== VARIABLES ========
var price;
var total = 0;
var priceList =[];
//==== LOGIC ========
//CHECK FOR ITEMS UNTIL THRESHOLD IS MET.
while (total < 35 )
	{
	//GET ITEM COST FROM USER
	price = prompt(" how much is your item?");
	//CONVERT USER INPUT TO A NUMBER
	price = parseInt(price);
	//ADD ITEM COST TO RUNNING TOTAL VARIABLE
	total = price + total;

	//PUSH ITEM COST TO CART ARRAY
	
	priceList.push(price);	
	}
		


//SEND POPUP MESSAGE TO USER

alert('Your shipping for this order will be free!');
//SEND OUTPUT TO CONSOLE

console.log("Item prices:" + priceList.join("|") );