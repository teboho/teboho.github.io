let _input = document.getElementById('_input');
let _output = document.getElementById('_output');

_input.onchange = _input.onblur = _input.onkeyup = (ev) => {
   let i = 0;
   let j = _input.value.length;
   input_arr = _input.value.split("");
   reverse_recursion(input_arr, i, j);
   _output.value = input_arr.join('');
}
let swap_positions = (arr, i, j) => {
   let temp = arr[i];
   arr[i] = arr[j];
   arr[j] = temp;
   return;
}
let reverse_recursion = (arr, i, j) => {
   if (i < j) {
      swap_positions(arr, i, j);
      reverse_recursion(arr, i+1, j-1);
   }
   return;
}