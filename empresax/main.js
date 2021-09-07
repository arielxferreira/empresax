/*Declaracao das variaveis e constantes*/
const input_buscar = document.getElementById('input_buscar');
const url = 'https://api.github.com/repos/testem/testem';
let resultado_busca_repositorio = document.getElementById('resultado_busca_repositório');
let div_btn = document.getElementById('div_btn');


/*Verificar se o repositorio esta com status 200 (online)*/
fetch(url).then(response => {
  if(response.status != 200){
    window.location.href = 'error.html'
  }
})



/*funcao buscar repositorio*/
function buscar_diretorio() {
  fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
      if (input_buscar.value === '' || input_buscar.value === undefined || input_buscar.value === null) {
        div_btn.innerHTML = `<p class="text-danger">Preencha o campo para realizar a pesquisa</p>`
        resultado_busca_repositorio.innerHTML = ""
      } else if (data.name == input_buscar.value) {
        div_btn.innerHTML = ""
        resultado_busca_repositorio.innerHTML = `
            <div class="container ">
              <div class="row">
                <div class="col-md-7">        
                <img src="${data.owner.avatar_url}" class="img-fluid shadow-lg"> 
                </div>
                <div class="col-md-4 bg-warning mt-3 p-4 rounded font-weight-normal align-self-center shadow-lg">
                <p>${data.html_url}</p>        
                <p>Language: ${data.language}</p>
                <p>Size: ${data.size}</p>
                <p>Forks_cont: ${data.forks_count}</p>
                <p>Login: ${data.owner.login}</p>
                <p>${data.html_url}</p>
                </div>
              </div>
            </div>
            `
      }

      else {
        resultado_busca_repositorio.innerHTML = ""
        div_btn.innerHTML = ""
        document.getElementById('exampleModalLabel').innerHTML = 'Nome de diretório inexistente'
        document.getElementById('modal-header').className = "modal-header text-danger"
        document.getElementById('modal-body').innerHTML = 'Por favor preencha um nome de diretório válido'
        document.getElementById('btn').className = 'btn btn-danger'
        document.getElementById('btn').innerHTML = 'Voltar e Corrigir'
        $('#modal_erro_busca').modal('show')
      }

    })
    .catch(function (error) {
      console.log('error' + error)
    });

}
