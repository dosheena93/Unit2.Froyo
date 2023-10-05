function countFlavorFrequencies(flavorsArray) {
    const flavorCounts = {};
    flavorsArray.forEach((flavor) => {
        if (flavorCounts[flavor]) {
            flavorCounts[flavor]++;
        } else {
            flavorCounts[flavor] = 1;
        }
    });
    return flavorCounts;
}


const startBtn = document.getElementById('startBtn');
const flavorCountTable = document.getElementById('flavorCountTable');

// Added an event listener to the "Start" button
startBtn.addEventListener('click', () => {
    // This prompts the user for froyo flavors
    const userInput = prompt("Enter a list of froyo flavors (comma-separated):");

    if (userInput !== null && userInput !== '') {
        // This splits the user input into an array
        const flavorsArray = userInput.split(',');

        // This counts flavor frequencies using the function
        const flavorCounts = countFlavorFrequencies(flavorsArray);

        // This displays the flavor counts in the browser console
        console.log("Flavor Counts:");
        for (const flavor in flavorCounts) {
            console.log(`${flavor}: ${flavorCounts[flavor]}`);
        }
    }
});
