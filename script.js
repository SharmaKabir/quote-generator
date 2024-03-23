//Get Quotes from API
let apiQuotes=[];// using let as we set in itnially as empty array

function newQuote(){
            const quote=apiQuotes[Math.floor(Math.random() *apiQuotes.length)];
            console.log(quote);
}

async function getQuotes(){
    const apiUrl='https://type.fit/api/quotes'; //const used as val is nvr changed
    try{
        console.log("Before fetch"); // Log before making the fetch request
        const response =await fetch (apiUrl);
        console.log("After fetch");
        apiQuotes = await response.json();
       // console.log(apiQuotes[12]);

    newQuote();

    } catch(error){
        //handle_error
        alert(error)
    }
}
//On load
getQuotes();
