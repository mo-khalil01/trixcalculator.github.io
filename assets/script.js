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
    const roundType = document.getElementById('roundType').value;

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
}