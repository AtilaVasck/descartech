// Função de validação de cadastro
function validacao() {
    // Variáveis de campos
    const nome = document.getElementById("nome").value;
    const senha1 = document.getElementById("senha1").value;

    // Validação de campos vazios
    if (nome == "" || senha1 == "") {
        alert("Por favor, preencha os campos vazios!");
        return false;
    }
    // Validação de tamanho da senha
    if (senha1.length < 6 || senha1.length > 12) {
        alert("A senha deve ter entre 6 e 12 caracteres!");
        return false;
    }

    alert("Cadastro realizado com sucesso!");
    return true;
}

function changeButtonImage() {
    // Obter a referência do elemento
    const button02 = document.querySelector(".button02");
    const img03 = document.querySelector(".img03");

    // Verificar se o modo escuro está ativado
    if (document.body.classList.contains("dark-mode")) {
        // Substituir a imagem por outra
        img03.src = "/2FATIL~1/DescarTech/img/sol.png";
        img03.classList.add("img03-dark");
    } else {
        // Substituir a imagem pela original
        img03.src = "/2FATIL~1/DescarTech/img/lua.png";
        img03.classList.remove("img03-dark");
    }
}
// Função para mudar de cor do botão02
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
            label.style.color = "#ffffff";
        })
    }

    // Mudar a cor do botão02 de acordo com o modo atual
    changeButtonColor();
    // Mudar a imagem do botão02 de acordo com o modo atual
    changeButtonImage();
}