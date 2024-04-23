
function searchSpotify() {
    const searchInput = document.getElementById('searchInput').value;

    fetch(`https://spotify23.p.rapidapi.com/search/?q=${searchInput}&type=multi&offset=0&limit=10&numberOfTopResults=5`, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd23a3c8b48msh2adc626391e28abp10aa33jsna250567c399f',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
      window.localStorage.setItem("data",JSON.stringify(data))
      window.location.assign("./songs.html")
    //    for(i=1;i<=10;i++){
    //     let card = document.createElement('div')
    //     document.body.appendChild(card)
      
    //     let imageN = document.createElement('img')
    //     card.appendChild(imageN)
    //     imageN.src =data.albums.items[i].data.coverArt.sources[0].url

    //     let songN = document.createElement('h3')
    //     card.appendChild(songN)
    //     songN.textContent=item.data.album.name
       

        
    //     let artistN = document.createElement('h3')
    //     card.appendChild(artistN)
    //     artistN.textContent=item.data.album.artist
    //    }

    })
}

// function searchSpotify() {
//     const searchInput = document.getElementById('searchInput').value;

//     fetch(`https://spotify23.p.rapidapi.com/search/?q=${searchInput}&type=multi&offset=0&limit=10&numberOfTopResults=5`, {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': 'd23a3c8b48msh2adc626391e28abp10aa33jsna250567c399f',
//             'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
//         }
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         window.localStorage.setItem("data", JSON.stringify(data));
//         window.location.assign("./songs.html");
        
//         let resultsContainer = document.getElementById('resultsContainer');
//         resultsContainer.innerHTML = ''; 

//         data.albums.items.forEach(item => {
//             let card = document.createElement('div');
//             card.className = 'card';

//             let imageN = document.createElement('img');
//             imageN.src = item.data.coverArt.sources[0].url;
//             card.appendChild(imageN);

//             let songN = document.createElement('h3');
//             songN.textContent = item.data.album.name;
//             card.appendChild(songN);

//             let artistN = document.createElement('h3');
//             artistN.textContent = item.data.album.artist; // Adjust path based on actual data structure
//             card.appendChild(artistN);

//             resultsContainer.appendChild(card);
//         });
//     })
//     .catch(error => {
//         console.error('Error fetching data:', error);
//     });
// }

