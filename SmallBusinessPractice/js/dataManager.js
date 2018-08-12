const APIManager = {}

getAllEntries: {
    value: () => {
        return fetch("http://http://localhost:8088/Employee")
        .then(r => r.json())
        .then(response => {
            allData.employees =response
            fetch("http://http://localhost:8088/Employee").
        
        }
    }
}


module.exports =  APIManager

//promise.all - not right now lol
//never use /db to pull all data- need specific because all apis are specific
//have to run a forEach or .find to get matches and conditional
//or a for loop which was what I was going to do- forEach easier for one time thing
//reduce- 