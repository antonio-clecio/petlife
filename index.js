var elementosDuvida = document.querySelectorAll('.duvida');

elementosDuvida.forEach(function (duvida) {
  duvida.addEventListener('click', function () {
    // Verifica se o menu atual está ativo
    var estaAtivo = duvida.classList.contains('ativa');

    // Se estiver ativo, desative-o em todos os menus
    elementosDuvida.forEach(function (outraDuvida) {
      outraDuvida.classList.remove('ativa');
    });

    // Ative apenas o menu atual se não estava ativo
    if (!estaAtivo) {
      duvida.classList.add('ativa');
    }
  });
});