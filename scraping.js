//https://cors-anywhere.herokuapp.com/

const cors = 'https://api.allorigins.win/raw?url='
const target = 'https://ge.globo.com/futebol/brasileirao-serie-a/'
const url = cors+target
let newDocument

fetch(url)
.then(response => response.text())
.then(result => scraping(result, 'text/html'))
.catch(err => console.error('Erro: ' + err))
      
const scraping = (html, type) => {
      let parser = new DOMParser()
      newDocument = parser.parseFromString(html, type)
      
      console.log(newDocument)
}

/*
let temp = document.querySelector("body > div.glb-grid > main > div.row.medium-collapse.large-uncollapse > div > section.artilharia-wrapper > div > div > div.ranking-content")
document.body.appendChild(temp)
*/
