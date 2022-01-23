let button = document.getElementById("btn")
let div = document.getElementById("content")
let str = ""
let input = document.getElementById("gerador")
let valor = 0
button.addEventListener("click",()=>{
    valor = Number(input.value)
    div.innerHTML = ""
    if(valor < 20){
        alert("Insira um valor de 20 acima.")
        return
    }else{
        gerarAmpulheta(valor)
    }
})

function girarAmpulheta(){
    setTimeout(()=>{
        div.innerHTML = ""
        gerarAmpulhetaInversa(valor)
    },2000)
}

function gerarAmpulheta(n){
    for (let i = 0; i<n; i++){
        if(i == 0){
            str = `${"#".repeat(n-i)}`
            let pre = document.createElement("pre")
            pre.innerText = str
            div.append(pre)
        }else if(i == 1){
            str = `${"#".repeat(n)}`
            let pre = document.createElement("pre")
            pre.innerText = str
            div.append(pre)
        }else if(i ==2){
            str = `# ${" ".repeat((i/2)-1) + "#".repeat(n-i-2)} #`
            let pre = document.createElement("pre")
            pre.innerText = str
            div.append(pre)
        }else if(i%2==0 && i < n-3){
            str = `#${" ".repeat((i/2)) + "#".repeat((n-i-2))+ " ".repeat((i/2))}#`
            let pre = document.createElement("pre")
            pre.innerText = str
            div.append(pre)
        }
    }
    for (let i = n; i >= 0; i--){
        if(i == 0){
            str = `${"#".repeat(n)}`
            let pre = document.createElement("pre")
            pre.innerText = str
            div.append(pre)
        }else if(i == 1){
            str = `#${"#" +" ".repeat(n-4)}##`
            let pre = document.createElement("pre")
            pre.innerText = str
            div.append(pre)
        }else if(i ==2){
            str = `# ${"#" +" ".repeat(n-4-i)}# #`
            let pre = document.createElement("pre")
            pre.innerText = str
            div.append(pre)
        }else if(i%2==0 && i < n-3){
            str = `#${" ".repeat((i/2)) + "#" + " ".repeat(n-4-i)+"#"+ " ".repeat((i/2))}#`
            let pre = document.createElement("pre")
            pre.innerText = str
            div.append(pre)
        }
    }
    girarAmpulheta()
}

function gerarAmpulhetaInversa(n){
    for (let i = 0; i <= n; i++){
        if(i == 0){
            str = `${"#".repeat(n)}`
            let pre = document.createElement("pre")
            pre.innerText = str
            div.append(pre)
        }else if(i == 1){
            str = `#${"#" +" ".repeat(n-4)}##`
            let pre = document.createElement("pre")
            pre.innerText = str
            div.append(pre)
        }else if(i ==2){
            str = `# ${"#" +" ".repeat(n-4-i)}# #`
            let pre = document.createElement("pre")
            pre.innerText = str
            div.append(pre)
        }else if(i%2==0 && i < n-3){
            str = `#${" ".repeat((i/2)) + "#" + " ".repeat(n-4-i)+"#"+ " ".repeat((i/2))}#`
            let pre = document.createElement("pre")
            pre.innerText = str
            div.append(pre)
        }
    }
    for (let i = n; i>=0; i--){
        if(i == 0){
            str = `${"#".repeat(n-i)}`
            let pre = document.createElement("pre")
            pre.innerText = str
            div.append(pre)
        }else if(i == 1){
            str = `${"#".repeat(n)}`
            let pre = document.createElement("pre")
            pre.innerText = str
            div.append(pre)
        }else if(i ==2){
            str = `# ${" ".repeat((i/2)-1) + "#".repeat(n-i-2)} #`
            let pre = document.createElement("pre")
            pre.innerText = str
            div.append(pre)
        }else if(i%2==0 && i < n-3){
            str = `#${" ".repeat((i/2)) + "#".repeat((n-i-2))+ " ".repeat((i/2))}#`
            let pre = document.createElement("pre")
            pre.innerText = str
            div.append(pre)
        }
    }
}
