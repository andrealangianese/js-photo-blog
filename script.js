//selezione elemento container

const cont = document.getElementById("container");

//creazione endpoint dell' api

const endpoint = "https://lanciweb.github.io/demo/api/pictures/";

// creiamo la chiamata

axios.get(endpoint)
    .then(response => {
        //otteniamo array, lo salviamo in una var e lo stampiamo

        const pics = response.data
        // console.log(pics)

        //creazione della variabile di accumulo FUORI DAL CICLO da riempire dopo

        let elementOutput = ""
        
        // cicliamo l'array per estrapolare le info

        pics.forEach(element => {
            
            //destrutturiamo l'oggetto
            
            const {title, date, url} = element;

            //stessa roba scritta in precedenza 
            // const title = element.title;
            // const date = element.date;
            // const url = element.url

            //riempimento dellla var di accumulo aggiunta sopra 

            elementOutput += `
            <div class="card">
                <img src="${url}" alt="${title}">
                <img class="puntorosso" src="./img/pin.svg" alt="">
                <h3>${title}</h3>
                <p> ${date}</p>
            </div>`;

            //console.log(elementOutput);
            
            // inseriamo il contenuto in pagina

            cont.innerHTML = elementOutput;

        });
        
    })