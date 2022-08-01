async function getCurrentSeason(data) {
    let response = await fetch('https://api.jikan.moe/v4/season/current', {
        // method: 'GET',  
        credentials: 'include'
    });

    if (response.status == 200) {
        let json = await response.json();
        populateTable(data);
    } else {
    }
}

function populateTable(data) {
    let table = document.getElementById('currentSeason');

    data.array.forEach(element => {
        let tr = document.createElement('tr');
        let tdAnimeId = document.createElement('td');
        let tdTitle = document.createElement('td');
        let tdGenre1 = document.createElement('td');
        let tdGenre2 = document.createElement('td');
        let tdGenre3 = document.createElement('td');

        tdAnimeId.innerHTML = element.anime_id;
        tdTitle.innerHTML = element.title;
        tdGenre1.innerHTML = element.genre[0];
        tdGenre2.innerHTML = element.genre[1];
        tdGenre3.innerHTML = element.genre[2];

        tr.appendChild(tdAnimeId);
        tr.appendChild(tdTitle);
        tr.appendChild(tdGenre1);
        tr.appendChild(tdGenre2);
        tr.appendChild(tdGenre3);

        table.appendChild(tr);
    });
}