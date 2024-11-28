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
        function openNewPlayerModal() {
            const modal = document.getElementById('newPlayerModal');
            modal.style.display = 'block';
        }

        function closeNewPlayerModal() {
            const modal = document.getElementById('newPlayerModal');
            modal.style.display = 'none';
        }

        function addPlayer() {
            const playerSelect = document.getElementById('playerSelect');
            const selectedPlayerName = playerSelect.options[playerSelect.selectedIndex].text;
            const player = players.find(p => p.name === selectedPlayerName);

            if (player) {
                const card = document.getElementById(currentPosition);

                if (card) {
                    card.innerHTML = `
                        <div class="player-info">
                            <img src="${player.photo}" alt="${player.name}" class="player-image">
                            <p class="name">${player.name}</p>
                            <div class="stats">
                                <p class ="rating">${player.rating}</p>
                                <div class="attributes">
                                    <p>PAC: ${player.pace}</p>
                                    <p>SHO: ${player.shooting}</p>
                                    <p>PAS: ${player.passing}</p>
                                    <p>DRI: ${player.dribbling}</p>
                                    <p>DEF: ${player.defending}</p>
                                    <p>PHY: ${player.physical}</p>
                                </div>
                            </div>
                        </div>
                        <img src="${player.logo}" alt="${player.club}" class="club">
                        <img src="${player.flag}" alt="${player.nation}" class="nationality">
                    `;
                }
            }

            closeModal();
        }