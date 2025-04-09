document.addEventListener('DOMContentLoaded', () => {
    const countKey = 'numberOfReviews';

    const displayElement = document.getElementById('review-count');

    // localStorage stores everything as strings.
    let currentCount = localStorage.getItem(countKey);

    let numericCount = parseInt(currentCount);
    if (isNaN(numericCount)) {
        numericCount = 0; 
    }

    numericCount++;


    localStorage.setItem(countKey, numericCount.toString());

    if (displayElement) {
        displayElement.textContent = numericCount;
    } else {
        console.error('Could not find the element with ID "review-count" to display the count.');
    }

    console.log(`Review count incremented and saved. New count: ${numericCount}`);
});