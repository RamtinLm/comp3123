/*
Purpose:
Fetch from a third oarty API and print out the results
*/

fetch("https://official-joke-api.appspot.com/random_joke")
.then((response) => {
    return response.json()
})
.then((dataJSON) => {
    console.log(dataJSON)
})
.catch((error) => {
    console.log(error)
})