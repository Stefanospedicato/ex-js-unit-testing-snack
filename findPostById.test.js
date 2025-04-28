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


test('La funzione findPostById restituisce il post corretto dato l’array di post e l’id', ()=>{
  expect(findPostById(3)).toEqual({ id: 3, title: "Post 3", slug: "post-3" })
})