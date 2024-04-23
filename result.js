fetch("https://spotify23.p.rapidapi.com/search/?q=english&type=multi&offset=0&limit=10&numberOfTopResults=5",{
    method: 'GET',
	headers: {
		'X-RapidAPI-Key': '21fc7bb0f6mshed01b796f6c906fp1406f2jsn55671df02677',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
})
.then((a)=>a.json())
.then(z=>{
    var a = document.getElementById("main");


z.albums.items.forEach(function(album) {
    var b = document.createElement("div");
    b.id= "card"
    
    var c = document.createElement("img");
    c.setAttribute("src", album.data.coverArt.sources[2].url);
    c.setAttribute("height", "200");
    c.setAttribute("width", "200");

    var d = document.createElement("h3");
    d.innerHTML = album.data.name;

    var e = document.createElement("h4");
    e.innerHTML = year : ${album.data.date.year};

    var artt = [];
    album.data.artists.items.forEach(function(artist) {
        artt.push(artist.profile.name);
    });
    var f = document.createElement("p");
    f.innerHTML = Artists: ${artt.join(", ")};

    b.appendChild(c);
    b.appendChild(d);
    b.appendChild(e);
    b.appendChild(f);
    a.appendChild(b);
});
})