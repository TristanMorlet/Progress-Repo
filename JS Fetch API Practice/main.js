const verseChoose = document.querySelector("select");
const poemDisplay = document.querySelector("pre");

verseChoose.addEventListener("change", () => {
  const verse = verseChoose.value;
  updateDisplay(verse);
});

function updateDisplay(verse){
    verse = verse.replace(" ", "").toLowerCase();
    const url = `${verse}.txt`;

    // Call fetch, passing in URL
    fetch(url)

    // fetch returns a "promise". When we have recieved a response from the server
    // The promise's 'then()' handler is called with the response.
    .then((response) => {
        if (!response.ok) {
            // if the response is not ok, throw an error
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        // otherwise our handler fetches the response as text
        // by calling response.text()
        return response.text();
    })

    // when response.text() is completed, the "then()" handler is called
    // with  the text and we copy it into the poemDisplay box.

    .then((text) => {
        poemDisplay.textContent = text;
    })

    // catch any errors and display message in poemDisplay box.
    .catch((error) => {
        poemDisplay.textContent = `Could not fetch verse: ${error}`;
    });
}

updateDisplay("Verse 1");
verseChoose.value = "Verse 1";