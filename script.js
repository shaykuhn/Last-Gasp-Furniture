function function0(){
  // arrays for invetory and prices
  const invt = ["Chair", "Recliner", "Table", "Unbrella"];
  const price = [25.50, 37.75, 49.95, 24.89];

  // array for all state abreviations
  const states = ['ME', 'NH', 'VT', 'NY', 'MA', 'RI', 'CT', 'NJ',
                  'PA', 'DE', 'MD', 'WV', 'VA', 'OH', 'IN', 'KY', 'NC', 'SC',
                  'MI', 'IL', 'WI', 'MN', 'IA', 'MO', 'KS', 'TN', 'AL', 'GA', 'FL',
                  'ND', 'SD', 'NE', 'CO', 'OK', 'AR', 'MS', 'LA',
                  'MT', 'WY', 'NM', 'TX', 'ID', 'UT', 'AZ', 'WA', 'OR', 'CA', 'NV', 'HI', 'AK'];

  // empty arrays for user inventory, quantity, and price
  let uinvt = [];
  let uquant = [];
  let uprice = [];

  // initialize do while loop for user inventory and quantity
  let shop = "y";
  do{
    // prompt user for item
    let itmpurchase = prompt("What item would you like to buy today: Chair, Recliner, Table, or Umbrella?");
    // chnage input case to match case in array
    let lowerTest = itmpurchase.toLowerCase()
    lowerTest = itmpurchase.charAt(0).toUpperCase() + itmpurchase.slice(1);

    // check if input is in array
    if (invt.includes(lowerTest) == true){
      itmpurchase = lowerTest;
      // add to users inventory array
      uinvt.push(itmpurchase);

      // prompt user for quantity
      let itmquant = prompt("How many " + itmpurchase + "s would you like to buy?");
      // add to users quantity array
      uquant.push(itmquant);

      // calculate price based on quantity and price array
      for (i = 0; i < invt.length; i++) {
        if (invt[i] == itmpurchase) {
          uprice.push(price[i] * itmquant);
        }
      }
    }

    // alert if users input is not in inventory array
    else {
      alert("Please enter a valid item.");
    }

    // prompt user to keep shopping or exit
    shop = prompt("Continue shopping? y/n");
  } while (shop == "y")    

  // initialize do while loop for user shipping
  let state = '';
  let stateCheck = true;
      while (stateCheck){
      // prompt user for their state
      state = prompt("Please enter the two letter state abbreviation.");
      // convert to correct case
      state = state.toUpperCase();
      // check if input is in states array
      if(states.includes(state) == true){
      break;
      }
   }

  // calculate price of total purchase by adding all items in uprice array
  let total = 0;
  for (let i = 0; i < uprice.length; i++) {
      total += uprice[i];
  }

  // calculate shipping based on location and price total
  let shipping = 0;
  // total over $100 gets free shipping
  if (total >= 100){
    shipping = 0;
  }
  else{
    // shipping for zone 1 states
    switch (state){
      case 'ME':
      case 'NH':
      case 'VT':
      case 'NY':
      case 'MA':
      case 'RI':
      case 'CT':
      case 'NJ':
      shipping = 0;
      break;

      // shipping for zone 2 states
      case 'PA':
      case 'DE':
      case 'MD':
      case 'WV':
      case 'VA':
      case 'OH':
      case 'IN':
      case 'KY':
      case 'NC':
      case 'SC':
      shipping = 20;
      break;

      // shippping for zone 3 states
      case 'MI':
      case 'IL':
      case 'WI':
      case 'MN':
      case 'IA':
      case 'MO':
      case 'KS':
      case 'TN':
      case 'AL':
      case 'GA':
      case 'FL':
      shipping = 30;
      break;

      // shipping for zone 4 states
      case 'ND':
      case 'SD':
      case 'NE':
      case 'CO':
      case 'OK':
      case 'AR':
      case 'MS':
      case 'LA':
      shipping = 35;
      break;

      // shipping for zone 5 states
      case 'MT':
      case 'WY':
      case 'NM':
      case 'TX':
      case 'ID':
      case 'UT':
      case 'AZ':
      case 'WA':
      case 'OR':
      case 'CA':
      case 'NV':
      case 'HI':
      case 'AK':
      shipping = 45;
      break;
    }
  }

  // calculate tax from the total
  let tax = total * 0.15;

  // display user's inventory and quantity
  let shoppingCart = '';
  for (i = 0; i < uinvt.length; i++) {
    shoppingCart += "<tr><td>" + uinvt[i] + "</td><td>" +
      uquant[i] + "</td><td>" + price[i] + "</td><td>" + 
      uprice[i].toFixed(2) +  "</td></tr>";
  }

  // dispaly user's total, shipping, and tax, with button to buy again
  document.getElementById("purchase").innerHTML = 
    `<table id="table1">
      <tr>
        <th>Item</th>
        <th>Quantity</th>
        <th>Unit Price</th>
        <th>Price</th>
      </tr>
      ${shoppingCart}
    </table>
    <hr>
    <table id="table2">
      <tr>
        <th>Item Total:</th>
        <td>$${total.toFixed(2)}</th>
      </tr>
      <tr>
        <th>Shipping to ${state}:</th>
        <td>$${shipping.toFixed(2)}<td>
      </tr>
      <tr>
        <th>Subtotal:</th>
        <td>$${(total + shipping).toFixed(2)}</th>
      </tr>
      <tr>
        <th>Tax:</th>
        <td>$${tax.toFixed(2)}</th>
      </tr>
      <tr>
        <th>Invoice Total:</th>
        <td>$${(total + shipping + tax).toFixed(2)}</th>
      </tr>
    </table>
    <button onclick="function0()">Shop Again</button>`
}
