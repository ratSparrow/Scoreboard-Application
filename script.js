const initialState = {
    score: 0
}

function scoreReducer(state = initialState, action) {
    if (action.type === 'increment') {
        return {
            ...state,
            score: state.score + action.payload
        }
    }
    else if (action.type === 'decrement') {
        return {
            ...state,
            score: state.score - action.payload
        }
    }
    if (action.type === 'increment') {
        return {
            ...state,
        }
    }
}

// const store = Redux.createStore(scoreReducer)





const addMatchBtn = document.getElementById('addMatchBtn');
const allMatches = document.getElementById('allMatches');

let matchCount = 1; // Keeps track of the number of matches

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

    // Add event listener to get input values
    incrementForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form submission
        const incrementValue = incrementForm.querySelector('.lws-increment').value;
        console.log(incrementValue)
    });

    decrementForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form submission
        const decrementValue = decrementForm.querySelector('.lws-decrement').value;
        console.log(decrementForm)
    });
});