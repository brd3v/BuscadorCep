$(document).ready(function() {
  

    $('#cep').mask('00000-000', {
        placeholder: '00000-000'
    });
});

const cep = document.getElementById('cep');
const btn = document.getElementById('btn');
const p = document.getElementById('p')

btn.addEventListener('click', (e) => {
    e.preventDefault();
    let result = cep.value;
    
    fetch(`https://viacep.com.br/ws/${result}/json/`)
        .then(response => response.json())
        .then(data => 
            {
                    const localidade = data.localidade
                    const uf = data.uf
                    const bairro = data.bairro
                    const ddd = data.ddd

                    p.innerHTML = `
                    <ul>
                    <li>
                    <span >
                    Cidade:
                    </span> <p>${localidade}</p>
                    </li>
                    <li>
                    <span>
                    Bairro:
                    </span> <p>${bairro}</p>
                    </li>
                    <li>
                    <span>
                    DDD
                    </span><p>${ddd}</p>
                    </li>
                    <li>
                    <span>
                    Estado:
                    </span><p>${uf}</p>
                    </li>
                    </ul
                    `
            }
            )
        .catch(error => console.error('Erro ao acessar a API:', error));

        const local = data.localidade
    
});