let ModWin = function (bgWinWidth, bgWinHeight, bgWinCol, modWinWidth, modWinHeight, modWinCol){
    this.bgW = bgWinWidth;
    this.bgH = bgWinHeight;
    this.bgC = bgWinCol;
    this.modW = modWinWidth;
    this.modH = modWinHeight;
    this.modC = modWinCol;

    this.open = function () {
        let newBgWin = document.createElement('div');
        newBgWin.style.width = this.bgW +  "px";
        newBgWin.style.height = this.bgH + "px";
        newBgWin.style.paddingTop = (this.bgH-this.modH)/2 + 'px';
        newBgWin.style.backgroundColor = this.bgC;
        newBgWin.style.position = 'absolute'
        newBgWin.style.top = '0';
        document.body.appendChild(newBgWin);
        let newModWin = document.createElement('div');
        newModWin.style.width = this.modW + "px";
        newModWin.style.height = this.modH + "px";
        newModWin.style.margin = 'auto';
        newModWin.style.backgroundColor = this.modC;
        newBgWin.appendChild(newModWin);
    }

}

let modBg1 = new ModWin('1200', '800', 'rgb(255 177 0 / 50%)', '500', '150', 'white');

modBg1.open();