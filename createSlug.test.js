function createSlug(word){
  return word.toLowerCase()
}

test('La funzione createSlug restituisce una stringa in lowercase.', ()=>{
  const parolaLower = createSlug('PAROLA')
  expect(parolaLower).toBe('parola')
})