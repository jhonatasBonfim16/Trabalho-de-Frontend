var menu = document.getElementById("menu")
var ulMenu = document.getElementById("menu-ul")
var isOpenMenu = false

function OpenMenu(){
    if(!isOpenMenu){
        ulMenu.style.display = 'block'
        isOpenMenu = true
    }else{
        ulMenu.style.display = 'none'
        isOpenMenu = false
    }
    console.log('foi')
}

/*  Tela de login */

function Enviar(){
    let name = document.getElementById("name").value
    let termos = document.getElementById("termos")

    if(!termos.checked){
        Swal.fire({
            title: "Erro",
            text: "Não é possível realizar o cadastro sem aceitar os termos " + name,
            icon: "Error"
          });
    }else{
        Swal.fire({
            title: "Enviado com Sucesso",
            text: "Enviado com sucesso " + name,
            icon: "sucess"
          });
    }
      return false;
}
