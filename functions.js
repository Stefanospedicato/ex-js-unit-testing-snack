function average(array){
  return array.reduce((acc, curr)=>{
    return acc + curr
  }, 0) / array.length
}

function createSlugWord(word){
  return word.toLowerCase()
}

function createSlugObj(obj){
  if(obj.title.length <= 1) throw new Error('Titolo non valido!')
}

function createSlugStr(str){
  const strToArray = str.toLowerCase().split(' ')
  const stringaConTrattino = strToArray.join('-')
  return stringaConTrattino
}

const posts = [
  { id: 1, title: "Post 1", slug: "post-1" },
  { id: 2, title: "Post 2", slug: "post-2" },
  { id: 3, title: "Post 3", slug: "post-3" },
];

function findPostById(id){
  const post = posts.find(post => post.id === id)
  if(post.title.length < 1 || post.slug.length < 1) throw new Error('I dati del post non sono validi')
  return post
}

function getInitials(name, surname){
  const nameInitial = name.charAt(0).toUpperCase()
  const surnameInitial= surname.charAt(0).toUpperCase()
  return nameInitial+surnameInitial
}

function isPalindrome(word){
  const wordToArray = [...word.toLowerCase()]
  const arrayInverted = [...wordToArray].reverse();
  return wordToArray.join('') === arrayInverted.join('');
}

module.exports = {
  average,
  createSlugWord,
  createSlugObj,
  createSlugStr,
  findPostById,
  getInitials,
  isPalindrome,
  posts
}