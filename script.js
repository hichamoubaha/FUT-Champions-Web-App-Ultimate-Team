let players = [];
        let currentPosition = '';

        async function fetchPlayerData() {
            const response = await fetch('https://younessboumeshouli.github.io/FUT_CHAMPIONS_API/player2.json');
            const data = await response.json();
            players = data.players;
            populatePlayerSelect();
        }
        function populatePlayerSelect() {
            const playerSelect = document.getElementById('playerSelect');
            players.forEach(player => {
                const option = document.createElement('option');
                option.value = player.position.toLowerCase();
                option.text = player.name;
                playerSelect.add(option);
            });
        }

        function openModal(position) {
            currentPosition = position;
            const modal = document.getElementById('playerModal');
            modal.style.display = 'block';
        }

        function closeModal() {
            const modal = document.getElementById('playerModal');
            modal.style.display = 'none';
        }