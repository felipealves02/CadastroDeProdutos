document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('product-form');
    const listaProdutos = document.getElementById('lista-produtos');
    const formSection = document.getElementById('form-section');
    const listSection = document.getElementById('list-section');
    const novoProdutoBotao = document.getElementById('novo-produto-botao');

    let produtos = [];

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const nome = document.getElementById('nome-produto').value;
        const descricao = document.getElementById('descricao-produto').value;
        const valor = parseFloat(document.getElementById('valor-produto').value.replace(',', '.'));
        const disponivel = document.getElementById('disponivel-produto').value;

        const produto = {
            nome,
            descricao,
            valor,
            disponivel
        };

        produtos.push(produto);
        produtos.sort((a, b) => a.valor - b.valor);

        renderizarListaProdutos();
        formSection.style.display = 'none';
        listSection.style.display = 'block';
    });

    novoProdutoBotao.addEventListener('click', function() {
        formSection.style.display = 'block';
        listSection.style.display = 'none';
        formulario.reset();
    });

    function renderizarListaProdutos() {
        listaProdutos.innerHTML = '';
        produtos.forEach(produto => {
            const linha = document.createElement('tr');
            linha.innerHTML = `
                <td>${produto.nome}</td>
                <td>R$ ${produto.valor.toFixed(2).replace('.', ',')}</td>
            `;
            listaProdutos.appendChild(linha);
        });
    }
});
