const app = "I don't do much.";

// let xhr = new XMLHttpRequest()
// xhr.open('GET', 'https://api.github.com/repos/jquery/jquery/commits')
// xhr.responseType = 'json'

// xhr.onload = function() {
// 	console.log(xhr.response)
// }

// xhr.onerror = function() {
// 	console.log('Booo')
// }

// xhr.send()

const token = '679cf3e0670e98525a8bccf4224a5105b31c4c34'

fetch('https://api.github.com/repos/jquery/jquery/commits')
  .then(res => res.json())
  .then(json => console.log(json));

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));