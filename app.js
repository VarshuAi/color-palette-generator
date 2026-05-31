
            const grid = document.getElementById('palette-colors');
            
            function genRandomHex() {
                const chars = '0123456789ABCDEF';
                let hex = '#';
                for (let i = 0; i < 6; i++) {
                    hex += chars[Math.floor(Math.random() * 16)];
                }
                return hex;
            }

            function makePalette() {
                grid.innerHTML = '';
                for (let i = 0; i < 5; i++) {
                    const hex = genRandomHex();
                    const card = document.createElement('div');
                    card.className = 'color-card';
                    card.innerHTML = `
                        <div class="color-block" style="background: ${hex}"></div>
                        <div class="color-label">${hex}</div>
                    `;
                    card.addEventListener('click', () => {
                        navigator.clipboard.writeText(hex);
                        alert(`Copied ${hex} to Clipboard!`);
                    });
                    grid.appendChild(card);
                }
            }
            
            document.getElementById('btn-generate').addEventListener('click', makePalette);
            makePalette();
        