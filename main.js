$(document).ready(function() {
  var output = "";
  $('button').on('click', function() {
    if ($(this).attr('val') === 'ac') {
      output = "";
      $('.output').text(output);
    } else if ($(this).attr('val') === 'plusMinus') {
      if (Math.sign(output) === 1) {
        output = eval(output).toPrecision(10).replace(/\.?0+$/, "");
        $('.output').text(-Math.abs(output));
        output = -Math.abs(output);
      } else if (Math.sign(output) === -1) {
        output = eval(output).toPrecision(10).replace(/\.?0+$/, "");
        $('.output').text(Math.abs(output));
        output = Math.abs(output);
      }
    } else if ($(this).attr('val') === '-' || $(this).attr('val') === '+' || $(this).attr('val') === '*' || $(this).attr('val') === '/') {
      if (output[output.length - 1] == '-' || output[output.length - 1] == '+' || output[output.length - 1] == '*' || output[output.length - 1] == '/') {
        output = output.split("")
        output.pop()
        output = output.join("");
      }
      output += $(this).attr('val');
    } else if ($(this).attr('val') === '=') {
      if (output[0] == '+' || output[0] == '*' || output[0] == '/') {
        output = output.split("");
        output.shift();
        output = output.join("");
      }
      $('.output').text(eval(output).toPrecision(10).replace(/\.?0+$/, ""));
      output = eval(output);
    } else if ($(this).attr('val') === '%') {
      if (output !== "") {
        output /= 100;
        $('.output').text(eval(output));
      }
    } else {
      output += $(this).attr('val');
      $('.output').text(output);
    }
  });
});
