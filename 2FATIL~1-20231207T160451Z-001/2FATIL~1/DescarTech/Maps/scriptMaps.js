function changeButtonColor() {
    // Obter a referência do elemento
    const button02 = document.querySelector(".button02");

    // Verificar se o modo escuro está ativado
    if (document.body.classList.contains("dark-mode")) {
        // Definir a cor do botão para o modo escuro
        button02.style.backgroundColor = "#131313";
    } else {
        // Definir a cor do botão para o modo normal
        button02.style.backgroundColor = "#9BFAB0";
    }
}

// Função para modo escuro
function darkMode() {
    // Obter a referência do elemento
    const body = document.querySelector("body");
    const section = document.querySelector("section");
    const div = document.querySelector("div");
    const labels = document.querySelectorAll("label");
    const img02 = document.querySelectorAll(".img02");
    const input = document.querySelectorAll("input");

    // Verificar se o modo escuro está ativado
    if (body.classList.contains("dark-mode")) {
        // Desativar o modo escuro
        body.classList.remove("dark-mode");
        section.style.backgroundColor = "#3c7c07";
        div.style.backgroundColor = "#000000";

        input.forEach(input => {
            input.style.backgroundColor = "#9BFAB0";
        })
        img02.forEach(img02 => {
            img02.classList.remove("dark-mode");
        });
        labels.forEach(label => {
            label.style.backgroundColorcolor = "#FFFFFF";
        });
    } else {
        // Ativar o modo escuro
        body.classList.add("dark-mode");
        section.style.backgroundColor = "#000000";
        div.style.backgroundColor = "#000000";
        
        input.forEach(input => {
            input.style.backgroundColor = "#131313";
        })

        img02.forEach(img02 => {
            img02.classList.add("dark-mode");
        });
        labels.forEach(label => {
            label.style.color = "#000000";
        })
    }

    // Mudar a cor do botão02 de acordo com o modo atual
    changeButtonColor();
    // Mudar a imagem do botão02 de acordo com o modo atual
    changeButtonImage();
}