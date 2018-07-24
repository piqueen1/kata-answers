console.log('****START****');

function communicationModule(packet) {
  console.log(packet);
  let header = packet.slice(0, 4);
  let instruction = packet.slice(4, 8);
  let data1 = packet.slice(8, 12);
  let data2 = packet.slice(12, 16);
  let footer = packet.slice(16, 20);
  let productString = "";

  let calculations = {
    '0F12': (x, y) => (x + y),
    'B7A2': (x, y) => (x - y),
    'C3D9': (x, y) => (x * y)
  };

  //Find the product of the instructed calculation on data1 and data2
  let product = calculations[instruction](parseInt(data1), parseInt(data2));
  console.log('product', product);

  /*  if(!product) { productString = '0000'}
    else if (product < 0) { productString = '0000' } 
    else if (product > 9999) { productString = '9999' }
    else { productString = product.toString() }; */

  if (!product) {
    return createFinalPacket('0000', header, footer);
  }
  if (product < 0) {
    return createFinalPacket('0000', header, footer);
  }
  if (product > 9999) {
    return createFinalPacket('9999', header, footer);
  }
  return createFinalPacket(product.toString(), header, footer);
}

const createFinalPacket = (productString, header, footer) => {
  //Format product as string with leading 0s
  while (productString.length < 4) productString = "0" + productString;

  //Construct packet string of the 5 strings
  let finalString = header + "FFFF" + productString + "0000" + footer;

  return finalString;
}

communicationModule("X7X7B7A201400158L0L0"); // X7X7FFFF00820000L0L0

console.log('Answer: ', communicationModule("X7X7B7A201400158L0L0"));
console.log('****END****');
