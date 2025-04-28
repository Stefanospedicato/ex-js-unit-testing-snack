const {
  average,
  createSlugWord,
  createSlugObj,
  createSlugStr,
  posts,
  findPostById,
  getInitials,
  isPalindrome
} = require('./functions');

describe('Numeri', ()=>{
  test('La funzione average calcola la media aritmetica di un array di numeri.', ()=>{
    const numbers = [10,40,60,90]
    const media = average(numbers)
    expect(media).toBe(50) 
  })
})

describe('Parole', ()=>{
  test('La funzione isPalindrome verifica se una stringa è un palindromo.', ()=>{
    const parolaPalindroma = isPalindrome('Osso')
    expect(parolaPalindroma).toBeTruthy()
  }) 
  test('La funzione createSlug restituisce una stringa in lowercase.', ()=>{
    const parolaLower = createSlugWord('PAROLA')
    expect(parolaLower).toBe('parola')
  })
  test('La funzione createSlug sostituisce gli spazi con -', ()=>{
    const stringaDivisaDaTrattino = createSlugStr('Questo e un test')
    expect(stringaDivisaDaTrattino).toBe( "questo-e-un-test")
  })
  test('La funzione getInitials restituisce le iniziali di un nome completo.', ()=>{
    const inizialiNomeCompleto = getInitials('Stefano','Spedicato')
    expect(inizialiNomeCompleto).toBe('SS')
  })
  test('La funzione createSlug lancia un errore se il titolo è vuoto o non valido.', ()=>{
    expect(() => createSlugObj({title: ''})).toThrow()
    expect(() => createSlugObj({title: 'f'})).toThrow()
  })
})

describe('Ricerca',()=>{
  test('La funzione findPostById restituisce il post corretto dato l’array di post e l’id', ()=>{
    expect(findPostById(3)).toEqual({ id: 3, title: "Post 3", slug: "post-3" })
  })
})