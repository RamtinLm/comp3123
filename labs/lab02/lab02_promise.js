/*
Purpose:
Create a new promise - API developer side
Fetch that promises - Web developer side 
- async definition of the finction that contains the fetch
- await in front of the fetch

*/

// -----------------------API developer side-----------------------
async function fetch_weather(){
    const promise_weather = new Promise((resolve, reject) => {
        let isPaidMember = false
        if (isPaidMember){
            setTimeout(() => {
                const weatherJSON = {monday: "sunny", tuesday: "rainy"}
            let weatherJSONstr = JSON.stringify(weatherJSON)
            resolve(weatherJSONstr)
            }, 2000)
        } else {
            reject("You must be a paid member to access")
        }
    })
    let result = await promise_weather
    console.log(result) 
}

fetch_weather()
let username = "bob"
console.log(username)
