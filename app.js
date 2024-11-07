function criaCartao(categoria, pergunta, resposta){
    let container = document.getElementById('container')
    let cartao= document.createElement('article')
    cartao.className=('cartao')

    cartao.innerHTML=`
    <div class="cartao__conteudo"> 

        <h3>${Categoria}</h3>
        <div class="cartao__conteudo__pergunta">
        <p>${Pergunta}</p>
     </div>
     <div class="cartao__conteudo__resposta">
       <p>${Resposta}</p>
       </div>     
       </div>
       `
       container.appendChild(cartao)
}
