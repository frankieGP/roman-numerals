var toRomanNumerals = function(value) {
  var result = [];
  for (var i = value; i > 0; i-1) {
    // console.log(i);
    if (i >= 1000) {
      result.push('M');
      i -= 1000;
    } else if (i >= 900) {
      result.push('CM');
      i -= 900;
    } else if (i >= 500) {
      result.push('D');
      i -= 500;
    } else if (i >= 400) {
      result.push('CD');
      i -= 400;
    } else if (i >= 100) {
      result.push('C');
      i -= 100;
    } else if (i >= 90) {
      result.push('XC');
      i -= 90;
    } else if (i >= 50) {
      result.push('L');
      i -= 50;
    } else if (i >= 40) {
      result.push('XL');
      i -= 40;
    } else if (i >= 10) {
      result.push('X');
      i -= 10;
    } else if (i >= 9) {
      result.push('IX');
      i -= 9;
    } else if (i >= 5) {
      result.push('V');
      i -= 5;
    } else if (i >= 4) {
      result.push('IV');
      i -= 4;
    } else {
      result.push('I');
      i -= 1;
    }
  }

  var toRomanNumerals = result.join("")
  return toRomanNumerals;
};

$(document).ready(function() {
  $("form#roman-numeral").submit(function(event) {
    var numberInput = $("input#numberInput").val().toString();
      $(".result").text(toRomanNumerals(numberInput));

      event.preventDefault();

  // alert(toRomanNumerals(4).join(''));
  });
});
