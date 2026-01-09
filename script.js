//selezione elemento container

const cont = document.getElementById("container");

//overlay da salvare

const overlay = document.getElementById("overlay");
const overlayImg = document.getElementById("overlay-img");
const closeBtn = document.getElementById("close-btn");

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

            const { title, date, url } = element;

            //stessa roba scritta in precedenza 
            // const title = element.title;
            // const date = element.date;
            // const url = element.url

            //riempimento dellla var di accumulo aggiunta sopra 

            elementOutput += `
            <div class="card">
                <img class="photo" src="${url}" alt="${title}">
                <img class="puntorosso" src="./img/pin.svg" alt="">
                <h3>${title}</h3>
                <p> ${date}</p>
            </div>`;
        });

        //console.log(elementOutput);

        // inseriamo il contenuto in pagina

        cont.innerHTML = elementOutput;

        //seleziono .photo che ho aggiunto precedentemente
        const photos = document.querySelectorAll(".photo");

        //ciclo nuovamente, al click sulla foto la apro 
        photos.forEach(photo => {
            photo.addEventListener("click", function () {
                //indico che al click la foto in overlay è uguale alla foto cliccata
                overlayImg.src = photo.src;
                //rimuovo display= nome e metto display: block
                overlay.classList.remove("hidden");

            });
        });


    });

//chiusura della foto cliccando sul tasco close 
closeBtn.addEventListener("click", function () {
    // aggiungo classe hidden che è uguale a display=none
    overlay.classList.add("hidden");
});
