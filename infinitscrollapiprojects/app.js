//get id

const imageContainer = document.getElementById('img-cont');

let gifArray =[];

//Api key and Search and Count

const apiKey ='QOxYovRC9hqPEZ67qzUSLERW3fJBr7tE';

const count =10;

const apiUrl = `https://api.giphy.com/v1/gifs/search?&q=spongebob&api_key=${apiKey}&limit=${count}&offset=0&rating=g&lang=en`;

//infinity array
/*
function displayGifs() {
    
    gifArray.forEach((gif)=>{
        const item = document.createElement('a');
        item.setAttribute('href',gif.data[0].url);
        item.setAttribute('target','_blank');
        const img = document.createElement('img');
        img.setAttribute('src',gif.data[0].url);
        img.setAttribute('alt','gifs from giphy');
        img.setAttribute('title',gif.data[5].title);
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}


//fetch and response

async function giphy() {
    try{
        const response = await fetch(apiUrl);
        gifArray = await response.json();
        displayGifs();
    }catch(error){

    }
    
}
*/
//loader
//giphy()


//new giphy



async function gif() {
    try{
        const res = await fetch(apiUrl);
        console.log(res);
        let gifs =await res.json();
        console.log(gifs);
    }catch(error){

    }
}

gif();