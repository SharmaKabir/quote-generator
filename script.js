


const quoteContainer=document.getElementById('quote-container');
const quoteText=document.getElementById('quote');
const authorText=document.getElementById('author');
const twitterBtn=document.getElementById('twitter');
const newQuoteBtn=document.getElementById('new-quote');
const loader=document.getElementById('loader');

//show laoding
function loading(){
    loader.hidden=false;
    quoteContainer.hidden=true;
}
//when loading complete
function complete(){
quoteContainer.hidden=false;
loader.hidden=true;
}

//Get Quotes from API
let apiQuotes=[];// using let as we set in itnially as empty array

function newQuote(){
    loading();
            const quote=apiQuotes[Math.floor(Math.random() *apiQuotes.length)];
            //const author = quote.author.split(',')[0].trim(); 

            if (!quote.author){
                authorText.textContent="Unknown";
            }else{
                authorText.textContent= quote.author.split(',')[0].trim(); 
            }
            

            //for length
            if(quote.text.length>120){
                quoteText.classList.add('long-quote');
            } else{
                quoteText.classList.remove('long-quote');
            }

            //set quote hide laoder
            quoteText.textContent=(quote.text);
            complete();
}

async function getQuotes(){
    loading();
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


//tweet
function tweetQuote(){
    const twitterUrl=`https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');


}



//event lsitners
newQuoteBtn.addEventListener('click',newQuote);
twitterBtn.addEventListener('click',tweetQuote);






//On load
getQuotes();
