document.addEventListener("DOMContentLoaded", () => {
    const username = "EduardoSa23";
    const apiUrl = `https://api.github.com/users/${username}`;

    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        document.querySelector(".profile-avatar").src = data.avatar_url;
        document.querySelector(".profile-name").textContent = data.name || "Nome não disponível";
        document.querySelector(".profile-username").textContent = `@${data.login}`;
        document.querySelector(".numbers-item:nth-child(1)").innerHTML = `<h4>Repositórios</h4>${data.public_repos}`;
        document.querySelector(".numbers-item:nth-child(2)").innerHTML = `<h4>Seguidores</h4>${data.followers}`;
        document.querySelector(".numbers-item:nth-child(3)").innerHTML = `<h4>Seguindo</h4>${data.following}`;
        document.querySelector(".profile-link").href = data.html_url;
        document.querySelector(".profile-link").textContent = "Ver no GitHub";
    })
    .catch(error => {
        console.error("Erro ao buscar dados do GitHub:", error);
        alert("Não foi possível carregar os dados do GitHub.");
    });
});