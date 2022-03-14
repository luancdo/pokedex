// Precisamos criar duas variáveis no JS para trabalhar com os elementos da tela
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsKard = document.querySelectorAll('.cartao-pokemon')


listaSelecaoPokemons.forEach(pokemon => {
    //Vamos trabalhar com um evento de clique feito pelo usuário na listagem de pokémons

    pokemon.addEventListener('click', () =>{
        //ABRIR E FECHAR CARTÕES
        //remover a classe aberta somente do cartão selecionado
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        //ao clicar em um pokemon da lista pegamos o id na lista para saber qual pokemon mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        //ABRIR E FECHAR LISTA SELECIONADA
        //remover a classe ativo do pokemon selecionado
        const pokemonAtivoNAListagem = document.querySelector('.ativo')
        pokemonAtivoNAListagem.classList.remove('ativo')

        //ao clicar em botão da lista pegamos o id do pokemon selecionado

        
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')

    })
})