const rl = require('readline-sync');


// Menu Inicial //

console.log(``)
console.log(`================================`)
console.log(` S A L E M   A D V E N T U R E S`)
console.log(`================================`)
console.log(``)
console.log(`-vers. 1.0`)
console.log(``)
rl.question(`PRESSIONE | ENTER | PARA INICIAR`)

/* esse loop tem um parametro de parada engraçado, sem ele,
não sai do loop de jeito nenhum, ele funciona com
um let i e uma let menu com números diferentes,
o parametro de parada pra sair do loop é só um
i = 2 na função, mudando o valor de i para um número > que 1 
já faz com q ele saia do loop e prossiga o resto do código,
porque ele repete enquanto o i for menor que menu, deve ter algum
jeito mais inteligente de fazer isso mas azar é usguri */

let i = 0
let menu = 1
while(i < menu){

    mostraMenu()
    navegarMenu()
}
console.clear()


// Funções do Menu Inicial //

// Função de navegação do menu, similar a função de movimentação do personagem //
function navegarMenu() {
    let indice = rl.question("Digite a LETRA-INDICE do menu que deseja ver: ")
    switch (indice.toUpperCase()) {
        case 'J':
            jogar()
            break;
        case 'C':
            creditos()
            break;
        case 'R':
            regras()        
            break;
        case 'S':
            sair()        
            break;
            

        default:
            break;
    }
}



function mostraMenu(){
    console.clear()
    console.log(``)
    console.log(`================================`)
    console.log(`              Menu              `)
    console.log(`-------> (J)ogar`)
    console.log(`-------> (R)egras`)
    console.log(`-------> (C)reditos`)
    console.log(`-------> (S)air`)
    console.log(``)
    console.log(`================================`)
    
}

function regras(){
        console.clear()
        console.log(``)
        console.log(``)
        console.log(`---------------+=+-----------------------------+=+--------------`)
        console.log(` Sobre as regras, voce interage com o mundo utilizando as "Letras-Indice",`)
        console.log(` todas e quaisquer acoes no jogo serao feitas atraves delas, como por exemplo`)
        console.log(` abrir uma porta ou trocar de cenario, ha tambem comandos que executam`)
        console.log(` verificacoes, seja de status de personagem ou de verificar itens do inventario.`)
        console.log(` Estes comandos sao: `)
        console.log(`---------------+=+-----------------------------+=+--------------`)
        console.log(``)
        console.log(``)
        rl.question(`Pressione |ENTER| para retornar ao menu principal.`)
    }


function creditos(){
        console.clear()
        console.log(``)
        console.log(``)
        console.log(`---------------+=+-----------------------------+=+--------------`)
        console.log(` Jogo criado por Lucas Grzybowski, feito como projeto para o`)
        console.log(` programa 3000 Talentos TI.`)
        console.log(`---------------+=+-----------------------------+=+--------------`)
        console.log(``)
        console.log(``)
        rl.question(`Pressione |ENTER| para retornar ao menu principal.`)
        
    }

    function sair(){
        i = 12;
        console.clear()
        process.exit()
     }

    function jogar(){
        console.clear()
        console.log(``)
        console.log(``)
        console.log(`---------------+=+-----------------------------+=+--------------`)
        console.log(` Capitulo I:`)
        console.log(`            Quando tudo esta perdido.`)
        console.log(`---------------+=+-----------------------------+=+--------------`)
        console.log(``)
        rl.question(`Pressione |ENTER| para prosseguir.`)
        i = 12
    }

// FIM DO MENU GRAÇAS A DEUS 🕊🕊🕊//





















/* Aqui vou deixar os status e inventário do personagem, já
que aqui marca o início do gameplay*/

let jogador = {
    nome: 'Salem',
    inventario: []
}



















// Inicio do game //

console.clear()
console.log(``)
console.log(``)
console.log(`---------------+=+-----------------------------+=+--------------`)
console.log(` ...`)
console.log(`---------------+=+-----------------------------+=+--------------`)
console.log(``)
console.log(``)
rl.question("Pressione ENTER para prosseguir.")
console.clear()
console.log(``)
console.log(``)
console.log(`---------------+=+-----------------------------+=+--------------`)
console.log(` Seus olhos abrem lentamente, pesados e embaçados.              `)
console.log(`---------------+=+-----------------------------+=+--------------`)
console.log(``)
console.log(``)
rl.question("Pressione ENTER para prosseguir.")
console.clear()
console.log(``)
console.log(``)
console.log(`---------------+=+-----------------------------+=+--------------`)
console.log(` Com muita dificuldade voce levanta.
 O corpo parece que não sente o conforto de uma cama há anos.`)
console.log(`---------------+=+-----------------------------+=+--------------`)
console.log(``)
console.log(``)
rl.question("Pressione ENTER para prosseguir.")
console.clear()
console.log(``)
console.log(``)
console.log(`---------------+=+-----------------------------+=+--------------`)
console.log(` Sons de batalha e o ranger de espadas se encontrando umas com  `)
console.log(` com as outras enfeitam o lugar, junto com manchas vermelhas    `)
console.log(` espalhadas pelo chao e um cheiro de fumaça de entupir os pulmões.`)
console.log(`---------------+=+-----------------------------+=+--------------`)
console.log(``)
console.log(``)
rl.question("Pressione ENTER para prosseguir.")
console.clear()
console.log(``)
console.log(``)
console.log(`---------------+=+-----------------------------+=+--------------`)
console.log(` Observando seu ao redor, voce encontra uma espada coberta de  `)
console.log(` sangue, enterrada até metade de sua lâmina na terra.`)
console.log(`---------------+=+-----------------------------+=+--------------`)
console.log(``)
console.log(``)
rl.question("Pressione ENTER para prosseguir.")


/* inicío dos caminhos diversos.. medo */

i = 0
let itemSituacaoUm = ['Espada de Sangue']

while(i<1){
console.clear()
console.log(``)
console.log(``)
console.log(`---------------+=+-----------------------------+=+--------------`)
let pickupSword = rl.question(` Deseja pegar a espada? (S/N)
---------------+=+-----------------------------+=+--------------  `).toUpperCase()
console.log(``)
console.log(``)
console.clear()



switch (pickupSword) {

    case pickupSword = 'S':
        i=77
        jogador.inventario.push(itemSituacaoUm[0])
console.clear()
console.log(``)
console.log(``)
console.log(`---------------+=+-----------------------------+=+--------------`)
console.log("Você pegou a espada.")
console.log(`---------------+=+-----------------------------+=+--------------`)
console.log(``)
console.log(``)
rl.question("Pressione ENTER para prosseguir.")

pickedUpSword();break;
    case pickupSword = 'N':
        i=777
console.clear()
console.log(``)
console.log(``)
console.log(`---------------+=+-----------------------------+=+--------------`)
console.log("Você não pegou a espada.")
console.log(`---------------+=+-----------------------------+=+--------------`)
console.log(``)
console.log(``)
rl.question("Pressione ENTER para prosseguir.")

didNotPickUpSword();break;}}

function pickedUpSword(){

console.clear()
console.log(``)
console.log(``)
console.log(`---------------+=+-----------------------------+=+--------------`)
console.log(`Você pega | ${jogador.inventario} | nas mãos.`)
console.log(`---------------+=+-----------------------------+=+--------------`)
console.log(``)
console.log(``)
rl.question("Pressione ENTER para prosseguir.")
}

function didNotPickUpSword(){
    console.clear()
    console.log(``)
    console.log(``)
    console.log(`---------------+=+-----------------------------+=+--------------`)
    console.log(" Você decide que é melhor não pegar a espada do chão.")
    console.log(`---------------+=+-----------------------------+=+--------------`)
    console.log(``)
    console.log(``)
    rl.question("Pressione ENTER para prosseguir.")
}

console.clear()
console.log(``)
console.log(``)
console.log(`---------------+=+-----------------------------+=+--------------`)
console.log(` Caminhando lentamente em frente, você enxerga duas figuras por 
 perto, que parecem estar tendo algum tipo de discussão.`)
console.log(`---------------+=+-----------------------------+=+--------------`)
console.log(``)
console.log(``)
rl.question("Pressione ENTER para prosseguir.")
console.clear()
    

    if (true){
console.log(``)
console.log(``)
console.log(`---------------+=+-----------------------------+=+--------------`)
console.log(`            `)
console.log(`---------------+=+-----------------------------+=+--------------`)
console.log(``)
console.log(``)
rl.question("Pressione ENTER para prosseguir.")
console.clear()}

