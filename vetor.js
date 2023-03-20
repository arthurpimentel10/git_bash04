let res = document.getElementById('res')

let pais = ['Chile','Bolívia','Brasa','Paraguas']
let cidades = new Array("Tijucas","Itajaí","São José")

console.log(pais[2])
console.log(cidades[1])

pais.push('Uruguai Pistolero')
pais.unshift('Colômbia el branco')
console.log(pais)
console.log(cidades)

function inserir(){
    pais.pop()
    pais.shift()
    res.innerHTML += pais + '<br>'
    res.innerHTML += cidades + '<br>'
}