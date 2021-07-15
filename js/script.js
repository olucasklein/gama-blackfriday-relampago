const form = document.querySelector('.email-form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let data = {
        nome,
        email,
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData)

    let content = document.getElementById('submit')

    let carregando = `<p>Carregando...</p>`

    let enviado = `<p>Enviado!</p>`

    content.innerHTML = carregando


    setTimeout(() => {
        content.innerHTML = enviado
    }, 1000)

})