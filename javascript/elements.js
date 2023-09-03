const div = document.createElement('div');
div.className= 'my-element';
div.id='my-element'
div.setAttribute('title', 'My Element')
div.innerText= 'Helloe World'
console.log(div)
const text= document.createTextNode('hello world')

div.appendCgild(text)
