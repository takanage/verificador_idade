function verificar(){
    var data = new Date()
    var ano = data.getUTCFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute ('id', 'foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) { 
                 // CRIANÇA
                 img.setAttribute('src', 'kid_m.png')
            } else if (idade < 21) {
                // JOVEM
                img.setAttribute('src', 'teen_m.png')
            } else if (idade < 50) {
                // ADULTO
                img.setAttribute('src', 'adult_m.png')            
            } else {
                //IDOSO
                img.setAttribute('src', 'old_m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) { 
                // CRIANÇA
                img.setAttribute('src', 'kid_f.png')
           } else if (idade < 21) {
               // JOVEM
               img.setAttribute('src', 'teen_f.png')
           } else if (idade < 50) {
               // ADULTO
               img.setAttribute('src', 'adult_f.png')            
           } else {
               //IDOSO
               img.setAttribute('src', 'old_f.png')
           }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos <strong>${genero}</strong> com <strong>${idade}</strong> anos.`
        res.appendChild(img)
        
    }

}