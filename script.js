document.querySelectorAll(".toggle-button").forEach((button) => {
    button.addEventListener("click", () => {
      const list = button.nextElementSibling
      const isOpen = list.classList.contains("open")
  
      document.querySelectorAll(".toggle-list").forEach((el) => {
        el.classList.remove("open")
        el.previousElementSibling.classList.remove("open") // remove do botão
      })
  
      if (!isOpen) {
        list.classList.add("open")
        button.classList.add("open") // adiciona ao botão
      }
    })
  })
  