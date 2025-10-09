// Obtém a referência ao botão e à mensagem
const cartButton = document.getElementById('addToCartBtn');
const messageElement = document.getElementById('message');

// Adiciona um 'ouvinte de evento' (listener) para o clique no botão
cartButton.addEventListener('click', function() {
    // 1. Muda o texto da mensagem para confirmar a ação
    messageElement.textContent = "Produto adicionado ao seu carrinho!";
    
    // 2. Desabilita o botão para evitar cliques múltiplos (opcional)
    cartButton.disabled = true;
    
    // 3. (Opcional) Remove a mensagem e reabilita o botão após 3 segundos
    setTimeout(function() {
        messageElement.textContent = "";
        cartButton.disabled = false;
    }, 3000); // 3000 milissegundos = 3 segundos

    // NOTA: Em um site de vendas real, esta função faria uma 
    // chamada a um servidor (API) para atualizar o carrinho no banco de dados.
});

// A mensagem inicial deve ser vazia
messageElement.textContent = "";