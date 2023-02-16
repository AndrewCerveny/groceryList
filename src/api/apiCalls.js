// "http://localhost:3001/items' // get 
// "http://localhost:3001/items'//POST {id: 7, name: 'Lime', amount: '2 pieces'}


const getGroceryData = () => {
  return fetch('http://localhost:3001/items')
    .then((res) => {
      if(!res.ok) {
        throw new Error('Could not get information, try again later')
      }else{
        return res.json()
      }
    })

  
}
export default getGroceryData; 