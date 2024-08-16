// Inicializar EmailJS com a Public Key
emailjs.init("RYm6w8ULLYFC2sBqt");

document.getElementById("consultoriaForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Coleta os dados do formulário
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var assunto = document.getElementById("assunto").value;
    var descricao = document.getElementById("descricao").value;

    // Enviar o e-mail com a consulta
    const templateParams = {
        nome: nome,
        email: email,
        telefone: telefone,
        assunto: assunto,
        descricao: descricao
    };

    emailjs.send('service_nmdkg6c', 'template_ixrqxjj', templateParams)
        .then(function(response) {
            alert('Sua consulta foi enviada com sucesso!');
        }, function(error) {
            alert('Erro ao enviar a consulta: ' + JSON.stringify(error));
        });
});
