function toggleMode() {
  const html = document.documentElement /* Aqui criamos a const html, e indicamos q a const é o elemento html, caso fosse o body
  usariamos o comando 'html = document.body', ou document.footer, etc */
  
  // Abaixo temos uma forma de fazer a mudança entre dark e light usando if e else, porém é mais longo
  // if(html.classList.contains('light'))  { /* Aqui verificamos se a const html acima contem o elemento light, fosse ele classe ou ID */
  //   html.classList.remove('light')  /* Caso a resposta seja true, removemos esse elemento para entrar no dark mode */
  // } else {
  //     html.classList.add('light') /* E caso seja falsa, fazemos o oposto e adicionamos o light para alterar o tema de volta */
  //   }
    
    // A forma mais rapida e compacta de fazer essa mesma função sera usando toggle:
    html.classList.toggle("light") // Aqui usamos a variavel html da msm forma, porém o toggle ja altera o elemento light, sem precisar de boolean

  // Pegar a tag img
  const img = document.querySelector("#profile img") // Aqui usamos o query prof img, pois é onde puxamos a img do avatar no html
  
  // Substituir a imagem
  if(html.classList.contains('light'))  { 
    // Se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './assets/avatar-light.png') // Aqui mudamos o atributo src do image para outro png
  } else {
    // Se tiver dark mode, manter a img normal
    img.setAttribute('src', './assets/avatar.png') // E aq apenas setamos a img padrao caso esteja no darkmode
  }

  if(html.classList.contains('light')) {
    img.setAttribute('alt', 'Mesmissima foto mas com fundo claro')
  } else {
    img.setAttribute('alt', 'Minha foto sorrindo de oculos e fundo branco')
  }
}