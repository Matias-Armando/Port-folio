 window.addEventListener("load", () => {
      const preloader = document.getElementById("preloader");
      const conteudo = document.getElementById("conteudo");

      preloader.classList.add("hidden");
      setTimeout(() => {
        preloader.style.display = "none";
        conteudo.style.display = "block";
      }, 1000); // tempo do fade
    });