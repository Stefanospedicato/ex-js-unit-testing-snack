function getInitials(name, surname){
  const nameInitial = name.charAt(0).toUpperCase()
  const surnameInitial= surname.charAt(0).toUpperCase()
  return nameInitial+surnameInitial
}

test('La funzione "getInitials" restituisce le iniziali del nome e del cognome di una persona', ()=>{
  const inizialiNomeCompleto = getInitials('Stefano','Spedicato')
  expect(inizialiNomeCompleto).toBe('SS')
})