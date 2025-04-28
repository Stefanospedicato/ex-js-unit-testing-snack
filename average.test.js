function average(array){
  return array.reduce((acc, curr)=>{
    return acc + curr
  }, 0) / array.length
}

test('La funzione average calcola la media aritmetica di un array di numeri.', ()=>{
  const numbers = [10,40,60,90]
  const media = average(numbers)
  expect(media).toBe(50) 
})