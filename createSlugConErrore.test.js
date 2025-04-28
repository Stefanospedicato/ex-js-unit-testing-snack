const obj={title:''}

function createSlug(obj){
  if(obj.title.length <= 1) throw new Error('Titolo non valido!')
}

test('La funzione createSlug lancia un errore se il titolo è vuoto o non valido.', ()=>{
  expect(() => createSlug({title: ''})).toThrow()
  expect(() => createSlug({title: 'f'})).toThrow()
})