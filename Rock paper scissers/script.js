let score = JSON.parse(localStorage.getItem('score')) || {
            wins: 0,
            Losses: 0,
            ties: 0
        }

        updateScore();



        let computermove = '';

        function playGame(playerMove) {
            const pickcomputer = computer();

            let result = '';

            if (playerMove === 'scissors') {
                if (computermove === 'Rock') { result = 'You Loss'; }

                else if (computermove === 'Paper') { result = 'You Win'; }
                else if (computermove === 'scissors') {
                    result = 'Match is Tie'
                }
            }
            else if (playerMove === 'Paper') {

                if (computermove === 'Rock') {
                    result = 'You Win';
                }
                else if (computermove === 'Paper') { result = 'Match is Tie'; }
                else if (computermove === 'scissors') { result = 'You Loss'; }
            }
            else if (playerMove === 'Rock') {

                if (computermove === 'Rock') {

                    result = 'Match is Tie';
                }
                else if (computermove === 'Paper') {
                    result = 'You Loss'
                }
                else if (computermove === 'scissors') {
                    result = 'You Win';
                }
            }

            if (result === 'You Win') {
                score.wins = score.wins += 1;
            } else if (result === 'You Loss') {
                score.Losses = score.Losses += 1;
            } else if (result === 'Match is Tie') {
                score.ties = score.ties += 1;
            }

            localStorage.setItem('score', JSON.stringify(score));


            updateScore();

            document.querySelector('.js-result').innerHTML = result;


            document.querySelector('.js-moves').innerHTML = ` You <img class="img2" src="images/${playerMove}-emoji.png" alt="">
            <img class="img2" src="images/${computermove}-emoji.png" alt="">
            Computer`;



        }

        function updateScore() {
            document.querySelector('.js-score').innerHTML =
                `Wins : ${score.wins} , Losses: ${score.Losses} , Ties: ${score.ties}`;
        }

        function computer() {

            const number = Math.random();

            if (number >= 0 && number < 1 / 3) { computermove = 'Rock'; } else if (number >= 1 / 3 && number < 2 / 3) {
                computermove = 'Paper';
            } else if (number >= 2 / 3 && number < 1) { computermove = 'scissors'; }
        }