function createSlug(str){
  const strToArray = str.toLowerCase().split(' ')
  const stringaConTrattino = strToArray.join('-')
  return stringaConTrattino
}

test('La funzione createSlug sostituisce gli spazi con -', ()=>{
  const stringaDivisaDaTrattino = createSlug('Questo e un test')
  expect(stringaDivisaDaTrattino).toBe( "questo-e-un-test")
})