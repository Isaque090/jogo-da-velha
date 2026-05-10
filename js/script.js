
    let matriz = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    let ganhojogador1 = 0;
    let ganhojogador2 = 0;
    let campojogador1 = [];

    let campojogador2 = [];

    let ganhar = [
        [1, 5, 9],
        [3, 5, 7],
        [2, 5, 8],
        [1, 4, 7],
        [3, 6, 9],
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]

    ];
    let jogador1 = true;
    let jogador2 = false;

    function verificarganhador(campo, jg) {
        for (let i = 0; i < ganhar.length; i++) {

            if (campo.includes(ganhar[i][0]) && campo.includes(ganhar[i][1]) && campo.includes(ganhar[i][2])) {
                alert('Jogador ' + jg + " Ganhou!!!")

                return true;
            }

        }

        return false;

    }

    function reiniciar() {
        jogador1 = true;
        jogador2 = false;
        campojogador1 = [];
        campojogador2 = [];
        for (let i = 1; i <= 9; i++) {
            const teste = document.getElementById(`${i}`);
            teste.innerHTML = ' ';
        }

    }

    function verificarcampo(elemento) {
        if (campojogador1.includes(elemento) || campojogador2.includes(elemento)) {
            alert('campo jogado');
            return false;
        }
        else {
            return true;
        }
    }

    function verificarempate() {
        if (campojogador1.length + campojogador2.length == 9) {
            return true;
        }
        else {
            return false;
        }
    }

    function escolhe(elemento) {
        const teste = document.getElementById(elemento);
        if (verificarcampo(elemento) == false) {
            return;
        }
        for (let i = 0; i < matriz.length; i++) {
            for (let j = 0; j < matriz[i].length; j++) {
                if (jogador1) {
                    if (elemento == matriz[i][j]) {
                        teste.innerHTML = 'O';
                        campojogador1.push(elemento);
                        setTimeout(() => {
                            if (verificarganhador(campojogador1, 1) == true) {
                                ganhojogador1 += 1;
                                const placar = document.getElementById('placar-o');
                                placar.innerHTML = `${ganhojogador1}`;
                                reiniciar();

                                return;
                            }
                            if (verificarempate() == true) {
                                reiniciar();
                                return;
                            }
                        }, 50);

                        jogador1 = false;
                        jogador2 = true;
                    }
                }
                else if (jogador2) {
                    if (elemento == matriz[i][j]) {
                        teste.innerHTML = 'X';
                        campojogador2.push(elemento);
                        setTimeout(() => {
                            if (verificarganhador(campojogador2, 2) == true) {
                                ganhojogador2 += 1;
                                const placar = document.getElementById('placar-x');
                                placar.innerHTML = `${ganhojogador2}`;
                                reiniciar();

                                return;
                            }

                            if (verificarempate() == true) {
                                reiniciar();
                                return;
                            }
                        }, 50);

                        jogador2 = false;
                        jogador1 = true;
                    }
                }

            }
        }
    }

