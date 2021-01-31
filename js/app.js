const input = document.querySelector('#value');
const binary = document.querySelector('#binary');
const octal = document.querySelector('#octal');
const hex = document.querySelector('#hex');
const button = document.querySelector('#converter');
const clear = document.querySelector('#clear');

input.focus();
button.addEventListener('click', () => {

  let num = Number(input.value);
  
  binary.value = num.toString( 2 );
  octal.value = num.toString( 8 );
  hex.value = num.toString( 16 );
})

clear.addEventListener('click', () => {
  input.value = '';
  binary.value = '';
  octal.value = '';
  hex.value = '';
})
