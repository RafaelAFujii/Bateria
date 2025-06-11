// Função para detectar o click do mouse.
const drumButtons = document.querySelectorAll('.drum'); //Pequisa no HTML todos os elementos com a classe "drum".
drumButtons.forEach(button => { //Verifica todos os botões encontrados 
    button.addEventListener('click', () => { //Cria um evento ao clicar no botão
        let buttonLetter = this.innerHTML 
        console.log("A letra que foi pressionada é: " + buttonLetter);
        switch (buttonLetter) { 
            case 'a':
                console.log("Você pressionou a tecla A");
                break;
            
            case 's':
                console.log("Você pressionou a tecla S");
                break;

            case 'd':
                console.log("Você pressionou a tecla D");
                break;

            case 'g':
                console.log("Você pressionou a tecla G");
                break;

            case 'j':
                console.log("Você pressionou a tecla J");
                break;

            case 'k':
                console.log("Você pressionou a tecla K");
                break;

            case 'l':
                console.log("Você pressionou a tecla L");
                break;

            default:
                console.log("Tecla não reconhecida");
        }
    })
});

// Função para detectar o pressionamento da tecla.

// Função para alterar entre a teclas dos teclados para acionar o som

// Função para animar os botões na hora de pressionar.
