setTimeout(() => {
      const preloader = document.getElementById("preloader");
      const content = document.getElementById("content");
      preloader.classList.add("hide");
      content.style.display = "block";
    }, 4500);