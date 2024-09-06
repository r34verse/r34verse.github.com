function searchRule34(divname) {
            const tags = document.getElementById('searchTags').value;
            const limit = document.getElementById('limit').value;
            if(limit == NaN){
                limit = 10;
            }
            console.log(limit);
            //const page = document.getElementById('page').value;
            const page = 0;


            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP-Fehler! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    const resultsDiv = document.getElementById(divname);
                    const errorDiv = document.getElementById('error');
                    
                    // Vorherige Ergebnisse und Fehler löschen
                    resultsDiv.innerHTML = '';
                    errorDiv.innerHTML = '';

                    if (data.length === 0) {
                        errorDiv.textContent = "Keine Ergebnisse gefunden.";
                        return;
                    }

                    data.forEach(post => {
                        const resultDiv = document.createElement('div');
                        resultDiv.classList.add('result');

                        const image = document.createElement('img');
                        image.classList.add("Rimg");
                        image.src = post.file_url;
                        image.alt = post.tags;

                        // const tagsParagraph = document.createElement('p');
                       // tagsParagraph.textContent = `Tags: ${post.tags}`;

                        resultDiv.appendChild(image);
                        // resultDiv.appendChild(tagsParagraph);

                        resultsDiv.appendChild(resultDiv);
                    });
                })
                .catch(error => {
                    const errorDiv = document.getElementById('error');
                    errorDiv.innerHTML = ''; // Vorherige Fehler löschen
                    errorDiv.textContent = `Fehler bei der API-Anfrage: ${error.message}`;
                });
        }
