// Função para detectar o click do mouse.
const drumButtons = document.querySelectorAll('.drum'); //Pequisa no HTML todos os elementos com a classe "drum".
drumButtons.forEach(button => { //Verifica todos os botões encontrados 
    button.addEventListener('click', (event) => { //Cria um evento ao clicar no botão
        let buttonLetter = event.currentTarget.innerHTML; //Pega o conteúdo do botão clicado
        const botaoClicado = event.currentTarget; //Armazena o botão clicado
        botaoClicado.classList.add('pressed'); //Adiciona a classe "pressed" ao botão clicado para animar
        setTimeout(() => { //Define um tempo para remover a classe "pressed"
            botaoClicado.classList.remove('pressed'); //Remove a classe "pressed" após o tempo definido
        }, 100); //Tempo de 100 milissegundos
        let letraMinuscula = buttonLetter.toLowerCase(); //Converte a letra do botão para minúscula
        switch (letraMinuscula) { 
            case 'a':
            case 'l':
                let somCrash = new Audio('sounds/crash.mp3'); //Cria um novo objeto de áudio com o som do crash
                somCrash.play(); //Reproduz o som do crash
                break;
            
            case 's':
                let somKick = new Audio('./sounds/kickbass.mp3'); //Cria um novo objeto de áudio com o som do kick
                somKick.play(); //Reproduz o som do kick
                break;

            case 'd':
                let somSnare = new Audio('./sounds/snare.mp3'); //Cria um novo objeto de áudio com o som do snare
                somSnare.play(); //Reproduz o som do snare
                break;

            case 'g':
                let somTom1 = new Audio('./sounds/tom1.mp3'); //Cria um novo objeto de áudio com o som do tom1
                somTom1.play(); //Reproduz o som do tom1
                break;

            case 'j':
                let somTom2 = new Audio('./sounds/tom2.mp3'); //Cria um novo objeto de áudio com o som do tom2
                somTom2.play(); //Reproduz o som do tom2
                break;

            case 'k':
                let somTom3 = new Audio('./sounds/tom3.mp3'); //Cria um novo objeto de áudio com o som do tom3
                somTom3.play(); //Reproduz o som do tom3
                break;

            default:
                console.log("Tecla não reconhecida");
        }
    })
});

// Função para detectar o pressionamento da tecla
document.addEventListener('keydown',function(event) { //Cria um evento ao pressionar uma tecla
    let letraTecla =event.key.toLowerCase(); //Converte a tecla pressionada para minúscula
    const botaoAtivo = document.querySelector("." + letraTecla); //Seleciona o botão correspondente à tecla pressionada
    if (botaoAtivo) { //Verifica se o botão existe
        botaoAtivo.classList.add('pressed'); //Adiciona a classe "pressed" ao botão correspondente para animar
        setTimeout(() => { //Define um tempo para remover a classe "pressed"
            botaoAtivo.classList.remove('pressed'); //Remove a classe "pressed" após o tempo definido
        }, 100); //Tempo de 100 milissegundos 
    }
    switch (letraTecla) { 
        case 'a':
        case 'l':
            let somCrash = new Audio('sounds/crash.mp3'); //Cria um novo objeto de áudio com o som do crash
            somCrash.play(); //Reproduz o som do crash
            break;
        
        case 's':
            let somKick = new Audio('./sounds/kickbass.mp3'); //Cria um novo objeto de áudio com o som do kick
            somKick.play(); //Reproduz o som do kick
            break;

        case 'd':
            let somSnare = new Audio('./sounds/snare.mp3'); //Cria um novo objeto de áudio com o som do snare
            somSnare.play(); //Reproduz o som do snare
            break;

        case 'g':
            let somTom1 = new Audio('./sounds/tom1.mp3'); //Cria um novo objeto de áudio com o som do tom1
            somTom1.play(); //Reproduz o som do tom1
            break;

        case 'j':
            let somTom2 = new Audio('./sounds/tom2.mp3'); //Cria um novo objeto de áudio com o som do tom2
            somTom2.play(); //Reproduz o som do tom2
            break;

        case 'k':
            let somTom3 = new Audio('./sounds/tom3.mp3'); //Cria um novo objeto de áudio com o som do tom3
            somTom3.play(); //Reproduz o som do tom3
            break;

        default:
            console.log("Tecla não reconhecida");
    }
});
