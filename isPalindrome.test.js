function isPalindrome(word){
  const wordToArray = [...word.toLowerCase()]
  const arrayInverted = [...wordToArray].reverse();
  return wordToArray.join('') === arrayInverted.join('');
}

test('La funzione isPalindrome verifica se una stringa è un palindromo.', ()=>{
  const parolaPalindroma = isPalindrome('Osso')
  expect(parolaPalindroma).toBeTruthy()
})  
