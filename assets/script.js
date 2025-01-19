// Initial scores for each player
const scores = [0, 0, 0, 0];

function updateNames() {
    const name1 = document.getElementById('name1').value || 'Player 1';
    const name2 = document.getElementById('name2').value || 'Player 2';
    const name3 = document.getElementById('name3').value || 'Player 3';
    const name4 = document.getElementById('name4').value || 'Player 4';

    document.getElementById('player1').textContent = name1;
    document.getElementById('player2').textContent = name2;
    document.getElementById('player3').textContent = name3;
    document.getElementById('player4').textContent = name4;

    document.getElementById('input1').placeholder = name1;
    document.getElementById('input2').placeholder = name2;
    document.getElementById('input3').placeholder = name3;
    document.getElementById('input4').placeholder = name4;
}

function calculateRound() {
    // Get round type
    let roundType = document.getElementById('roundType').value;

    // Get input values
    const input1 = parseInt(document.getElementById('input1').value) || 0;
    const input2 = parseInt(document.getElementById('input2').value) || 0;
    const input3 = parseInt(document.getElementById('input3').value) || 0;
    const input4 = parseInt(document.getElementById('input4').value) || 0;

    // Scoring rules
    let multiplier = 0;
    if (roundType === 'king') multiplier = -75;
    else if (roundType === 'diamonds') multiplier = -10;
    else if (roundType === 'slaps') multiplier = -15;
    else if (roundType === 'queens') multiplier = -25;
    else if (roundType === 'trix') multiplier = 1;

    // Calculate scores
    scores[0] += input1 * multiplier;
    scores[1] += input2 * multiplier;
    scores[2] += input3 * multiplier;
    scores[3] += input4 * multiplier;

    // Update the table
    document.getElementById('score1').textContent = scores[0];
    document.getElementById('score2').textContent = scores[1];
    document.getElementById('score3').textContent = scores[2];
    document.getElementById('score4').textContent = scores[3];

    // Clear inputs
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
    document.getElementById('input3').value = '';
    document.getElementById('input4').value = '';
    
    saveRound();
}

let roundCount = 0
function saveRound() {
    let roundType = document.getElementById('roundType');
    let text = roundType.options[roundType.selectedIndex].text;
    
    // let roundsContainer = document.getElementById('roundsContainer');
    let rounds = document.querySelector('.rounds');
    let li = document.createElement('li');
    li.textContent = text;
    rounds.appendChild(li);
    roundCount++;

    let liCounter = document.querySelectorAll(".rounds li").length
    if(liCounter % 5 === 0){
        let hr = document.createElement('hr');
        rounds.appendChild(hr);
    }
}
/*let roundCount = 0;

function saveRound(){
    const roundType = document.getElementById('roundType').value;
    const input1 = parseInt(document.getElementById('input1').value) || 0;
    const input2 = parseInt(document.getElementById('input2').value) || 0;
    const input3 = parseInt(document.getElementById('input3').value) || 0;
    const input4 = parseInt(document.getElementById('input4').value) || 0;

    const roundDetails = `
        Round Type: ${roundType}, 
        Player 1: ${input1}, 
        Player 2: ${input2}, 
        Player 3: ${input3}, 
        Player 4: ${input4}
    `;

    const roundsContainer = document.getElementById('roundsContainer');

    // Add a seperator every five rounds
    if (roundCount % 5 === 0 && roundCount > 0) {
        const roundGroup = document.createElement('div');
        roundGroup.className = 'round-group';
        roundsContainer.appendChild(roundGroup);
    }

    // Append the round entry to the container
    roundsContainer.appendChild(roundEntry);

    roundCount++;

    // Clear inputs after saving
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
    document.getElementById('input3').value = '';
    document.getElementById('input4').value = '';
}*/