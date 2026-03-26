const form = document.getElementById("leadForm");
const message = document.getElementById("message");

form.addEventListener("submit", async function(e) {
  e.preventDefault();

  const data = {
    name: form.name.value,
    email: form.email.value
  };

  try {
    // API fake para simular envio real
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      message.innerText = "Lead capturado com sucesso!";
      form.reset();
    } else {
      message.innerText = "Erro ao enviar.";
    }

  } catch (error) {
    message.innerText = "Erro de conexão.";
  }
});