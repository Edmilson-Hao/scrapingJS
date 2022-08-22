const cors = 'https://cors-anywhere.herokuapp.com/'
const target = 'target'
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
