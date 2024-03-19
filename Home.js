// Icone da senha do input senha
document.addEventListener("DOMContentLoaded", function() {
  var eyeShow = document.getElementById("eyeShow");
  var eyeHide = document.getElementById("eyeHide");
  var senhaInput = document.getElementById("senha");

  // Adiciona evento de clique para o ícone de olho aberto
  eyeShow.addEventListener("click", function() {
      senhaInput.type = "text"; // Mostra a senha
      eyeShow.style.display = "none"; // Esconde o ícone de olho aberto
      eyeHide.style.display = "block"; // Mostra o ícone de olho fechado
  });

  // Adiciona evento de clique para o ícone de olho fechado
  eyeHide.addEventListener("click", function() {
      senhaInput.type = "password"; // Oculta a senha
      eyeShow.style.display = "block"; // Mostra o ícone de olho aberto
      eyeHide.style.display = "none"; // Esconde o ícone de olho fechado
  });
});
  //Funcionalidade do Menu
document.addEventListener("DOMContentLoaded", function() {
  var btnAbrirMenu = document.getElementById("btnAbrirMenu");
  var menu = document.getElementById("menu");
  var overlay = document.getElementById("overlay");
  var btnFecharMenu = document.getElementById("btnFecharMenu");

  btnAbrirMenu.addEventListener("click", function() {
      menu.classList.add("menu-visivel");
      overlay.classList.add("overlay-visivel"); // Adiciona visibilidade da overlay
  });

  overlay.addEventListener("click", function() {
      menu.classList.remove("menu-visivel");
      overlay.classList.remove("overlay-visivel"); // Remove visibilidade da overlay
  });

  btnFecharMenu.addEventListener("click", function() {
      menu.classList.remove("menu-visivel");
      overlay.classList.remove("overlay-visivel"); // Remove visibilidade da overlay
  });
});


// Rola a pagina para suas devidas sessões 
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
};


// Funcionalidade do Container de Serviços
document.addEventListener("DOMContentLoaded", function() {
  var btnAbrirContainerServico = document.getElementById("btnAbrirContainerServico");
  var Servicos = document.getElementById("Servicos");
  var overlayServicos = document.getElementById("overlayServicos");
  var btnFecharContainerServicos = document.getElementById("btnFecharContainerServicos");

  btnAbrirContainerServico.addEventListener("click", function() {
      Servicos.classList.add("Servicos-visivel");
      overlayServicos.classList.add("overlayServicos-visivel"); // Adiciona visibilidade da overlay
  });

  overlayServicos.addEventListener("click", function() {
      Servicos.classList.remove("Servicos-visivel");
      overlayServicos.classList.remove("overlayServicos-visivel"); // Remove visibilidade da overlay
  });

  btnFecharContainerServicos.addEventListener("click", function() {
      Servicos.classList.remove("Servicos-visivel");
      overlayServicos.classList.remove("overlayServicos-visivel"); // Remove visibilidade da overlay
  });
});

// Funcionalidade do Container de Horários
document.addEventListener("DOMContentLoaded", function() {
    var btnAbrirContainerServico = document.getElementById("btnAbrirContainerHorario");
    var Servicos = document.getElementById("Horario");
    var overlayServicos = document.getElementById("overlayHorario");
    var btnFecharContainerServicos = document.getElementById("btnFecharContainerHorario"); //mudar o id aqui
  
    btnAbrirContainerServico.addEventListener("click", function() {
        Servicos.classList.add("Horario-visivel");
        overlayServicos.classList.add("overlayHorario-visivel"); // Adiciona visibilidade da overlay
    });
  
    overlayServicos.addEventListener("click", function() {
        Servicos.classList.remove("Horario-visivel");
        overlayServicos.classList.remove("overlayHorario-visivel"); // Remove visibilidade da overlay
    });
  
    btnFecharContainerServicos.addEventListener("click", function() {
        Servicos.classList.remove("Horario-visivel");
        overlayServicos.classList.remove("overlayHorario-visivel"); // Remove visibilidade da overlay
    });
  });




  