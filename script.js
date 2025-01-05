const addMatchBtn = document.getElementById('addMatchBtn');
const allMatches = document.getElementById('allMatches');

let matchCount = 0; // Keeps track of the number of matches

addMatchBtn.addEventListener('click', () => {
    matchCount++;

    // Create the match container
    const matchDiv = document.createElement('div');
    matchDiv.className = 'match';

    // Create the wrapper
    const wrapperDiv = document.createElement('div');
    wrapperDiv.className = 'wrapper';

    const deleteButton = document.createElement('button');
    deleteButton.className = 'lws-delete';
    deleteButton.innerHTML = '<img src="./image/delete.svg" alt="Delete">';
    deleteButton.addEventListener('click', () => matchDiv.remove());

    const matchName = document.createElement('h3');
    matchName.className = 'lws-matchName';
    matchName.textContent = `Match ${matchCount}`;

    wrapperDiv.appendChild(deleteButton);
    wrapperDiv.appendChild(matchName);

    // Create increment/decrement forms
    const incDecDiv = document.createElement('div');
    incDecDiv.className = 'inc-dec';

    const incrementForm = document.createElement('form');
    incrementForm.className = 'incrementForm';
    incrementForm.innerHTML = `
        <h4>Increment</h4>
        <input type="number" name="increment" class="lws-increment" />
      `;

    const decrementForm = document.createElement('form');
    decrementForm.className = 'decrementForm';
    decrementForm.innerHTML = `
        <h4>Decrement</h4>
        <input type="number" name="decrement" class="lws-decrement" />
      `;

    incDecDiv.appendChild(incrementForm);
    incDecDiv.appendChild(decrementForm);

    // Create numbers display
    const numbersDiv = document.createElement('div');
    numbersDiv.className = 'numbers';

    const singleResult = document.createElement('h2');
    singleResult.className = 'lws-singleResult';
    singleResult.textContent = '120';

    numbersDiv.appendChild(singleResult);

    // Assemble the match element
    matchDiv.appendChild(wrapperDiv);
    matchDiv.appendChild(incDecDiv);
    matchDiv.appendChild(numbersDiv);

    // Append to the container
    allMatches.appendChild(matchDiv);
});