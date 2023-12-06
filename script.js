function mudarTema() {
    const body = document.body

    if(body.classList.contains('escuro')) {
      body.classList.remove('escuro')  
    } else {
        body.classList.add('escuro')
    }
}