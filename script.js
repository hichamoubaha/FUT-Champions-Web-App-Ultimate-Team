let players = [];
        let currentPosition = '';

        async function fetchPlayerData() {
            const response = await fetch('https://younessboumeshouli.github.io/FUT_CHAMPIONS_API/player2.json');
            const data = await response.json();
            players = data.players;
            populatePlayerSelect();
        }