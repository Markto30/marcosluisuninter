function enviarWhatsApp() {
    var nome = document.getElementById('nome').value;
    var mensagem = document.getElementById('mensagem').value;
    
    // Número de WhatsApp de destino (inclua o código do país, sem "+" ou "00")
    var numeroDestino = 'SEU_NUMERO_DESTINO';

    // Gere o link do WhatsApp com a mensagem
    var url = `https://wa.me/${+5535988251520}?text=Nome: ${nome}%0AMensagem: ${mensagem}`;

    // Redirecione para o WhatsApp
    window.location.href = url;
}