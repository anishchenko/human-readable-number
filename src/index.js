module.exports = function toReadable (number) {
  const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
  const tens = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const numLength = (String(number).length);
  
  if (number <= 20) { // 0 - 20
    return units[number];

  }else if (numLength === 2) { // 21 - 99

    const firstSign = Math.floor(number / 10); // how many dozens in number
    const secondSign = number % 10; // how many units in number

    if (secondSign === 0) {
      return tens[firstSign];
    }else {
      return `${tens[firstSign]} ${units[secondSign]}`;
    }

  }else if (numLength === 3) { // 100 - 999
    
    const firstSign = Math.floor(number / 100); // how many hundreds
    const secondSign = Math.floor((number % 100) / 10); // how many dozens in number
    const thirdSign = number % 10; // how many units in number

    if (secondSign === 0 && thirdSign === 0) {
      return `${units[firstSign]} hundred` // 900
    }else if (secondSign === 0) {
      return `${units[firstSign]} hundred ${units[thirdSign]}`; // 101
    }else if (secondSign === 1) {
      return `${units[firstSign]} hundred ${units[thirdSign + 10]}`; // 118
    }else if (thirdSign === 0) {
      return `${units[firstSign]} hundred ${tens[secondSign]}`; // 120
    }else {
      return `${units[firstSign]} hundred ${tens[secondSign]} ${units[thirdSign]}`; // 123
    }
  }
}
