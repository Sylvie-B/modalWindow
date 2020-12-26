let ModWin = function (bgWinWidth, bgWinHeight, bgWinCol, modWinWidth, modWinHeight, modWinCol){
    this.bgW = bgWinWidth;
    this.bgH = bgWinHeight;
    this.bgC = bgWinCol;
    this.modW = modWinWidth;
    this.modH = modWinHeight;
    this.modC = modWinCol;

    this.open = function (txt) {
        let newBgWin = document.createElement('div');
        newBgWin.style.width = this.bgW +  "px";
        newBgWin.style.height = this.bgH + "px";
        newBgWin.style.paddingTop = (this.bgH-this.modH)/2 + 'px';
        newBgWin.style.backgroundColor = this.bgC;
        newBgWin.style.position = 'absolute'
        newBgWin.style.top = '10px';
        newBgWin.style.left = '10px';
        document.body.appendChild(newBgWin);

        let newModWin = document.createElement('div');
        newModWin.style.width = this.modW + "px";
        newModWin.style.height = this.modH + "px";
        newModWin.style.margin = 'auto';
        newModWin.style.backgroundColor = this.modC;
        newModWin.style.border = '3px black double';
        newModWin.innerHTML = txt;
        newModWin.style.fontSize = '2em';
        newModWin.style.textAlign = 'center';
        newBgWin.appendChild(newModWin);

        newModWin.addEventListener('click', () => newBgWin.remove());
    }
}

let modBg1 = new ModWin('1200', '800', 'rgb(255 177 0 / 50%)', '500', '300', 'white');

modBg1.open('Re-Clicker pour continuer');

let modWin2 = new ModWin('1200', '800', 'rgba(185 238 255 / 50%)', '400', '250', 'blue 50%');

modWin2.open('Clicker pour continuer');

