let _name = document.getElementById('_name');
let _output = document.getElementById('_output');

_name.onchange = _name.onkeypress = _name.onblur = _name.onkeyup = (ev) => {
   let i = 0;
   let j = _name.value.length;
   name_arr = _name.value.split("");
   reverse_recursion(name_arr, i, j);
   _output.value = name_arr.join('');
}
let swap_positions = (arr, i, j) => {
   let temp = arr[i];
   arr[i] = arr[j];
   arr[j] = temp;
}
let reverse_recursion = (arr, i, j) => {
   if (i < j) {
      swap_positions(arr, i, j);
      reverse_recursion(arr, i+1, j-1);
   }
   return;
}