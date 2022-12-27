const formCadastro = document.querySelector('.form-cadastro');
const formPareamento = document.querySelector('.form-pareamento');

formCadastro.addEventListener('submit', e => {
    e.preventDefault();
    const inputCadastroValue = e.target.inputCadastro.value;
    const ulArea = formCadastro.querySelector('ul');
    const spanText = formCadastro.querySelector('.span-text');
    spanText.innerHTML = '';
    ulArea.innerHTML += `
    <li>
    <span>${inputCadastroValue}</span>
    <i class =" fas fa-trash"> </i>
    </li>
    `;
    formCadastro.reset();
})

formPareamento.addEventListener('submit', e => {
    e.preventDefault();
    const times = document.querySelectorAll('li');
    const mathArea = formPareamento.querySelector('ul')
    const sorteio = Math.round(Math.random()*times.length)
    const partidas = formPareamento.querySelectorAll('li');
    mathArea.innerHTML += `
        <li>${times[sorteio].textContent} x ${times[sorteio+1].textContent}
        </li>
    `;
    console.log(partidas.length)

})
// formCadastro.addEventListener('click', e => {
//     console.log(e.target)
// })