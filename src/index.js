module.exports = function toReadable (number) {
  const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
  const tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  const numLength = (String(number).length);
  
  if (numLength === 1) {
    return units[number];
  }else if (numLength === 2) {
    if (number <= 20) return units[number];

    const firstSign = Math.floor(number / 10);
    const secondSign = number % 10;
    return `${tens[firstSign - 1]} ${units[secondSign]}`;


  }
  return numLength;

}
