array=["ahmed","mohamed","omar","ali"]
document.write(`<h1>og array => ${array}`)
array.push("judy")
document.write(`<p> push => ${array}<p>`)
array.pop()
document.write(`<p> pop => ${array}<p>`)
array.unshift("max")
document.write(`<p> unshift => ${array}<p>`)
array.shift()
document.write(`<p> shift => ${array}<p>`)
array.splice(0,2)
document.write(`<p> splice => ${array}<p>`)

document.write(`<h1>slice => ${array.slice(0,1)}<h1>`)

document.write(`<h1>indexOf("ali")=> ${array.indexOf("ali")}<h1>`)
