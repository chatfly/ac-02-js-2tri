const soma_res = document.getElementById('somares')
const fibo_res = document.getElementById('fibores')
const primo_res = document.getElementById('primores')

function somawhile(){
    let num = document.getElementById("somanum").value
    let pares = 0
    let impares = 0
    valorp = 2
    valori = 1
    i=1
    while(i<=num){
        pares += valorp
        impares += valori
        valorp = valorp+2
        valori = valori+2
        i++
    }
    soma_res.innerHTML = `A soma dos primeiros ${num} números pares é de ${pares}... <br><br> Já a soma dos primeiros ${num} números ímpares é de ${impares}...`
}

function somado(){
    let num = document.getElementById("somanum").value
    let pares = 0
    let impares = 0
    valorp = 2
    valori = 1
    i=1
    do{
        pares += valorp
        impares += valori
        valorp = valorp+2
        valori = valori+2
        i++
    }while(i<=num)
    soma_res.innerHTML = `A soma dos primeiros ${num} números pares é de ${pares}... <br><br> Já a soma dos primeiros ${num} números ímpares é de ${impares}...`
}

function somafor(){
    let num = document.getElementById("somanum").value
    let pares = 0
    let impares = 0
    valorp = 2
    valori = 1

    for(i=1;i<=num;i++){
        pares += valorp
        impares += valori
        valorp = valorp+2
        valori = valori+2
    }
    soma_res.innerHTML = `A soma dos primeiros ${num} números pares é de ${pares}... <br><br> Já a soma dos primeiros ${num} números ímpares é de ${impares}...`
}

function fibowhile(){
    fibo_res.innerHTML = ''
    let num = parseInt(document.getElementById('fibonum').value)
    let n1 = 0
    let n2 = 1
    let res = 0
    i = 3

    fibo_res.innerHTML += n1 + ' -> ' + n2

    while(i<=num){
        res = n1+n2
        fibo_res.innerHTML += ' -> ' + res
        n1 = n2
        n2 = res
        i++
    }

}

function fibodo(){
    fibo_res.innerHTML = ''
    let num = parseInt(document.getElementById('fibonum').value)
    let n1 = 0
    let n2 = 1
    let res = 0
    i = 3

    fibo_res.innerHTML += n1 + ' -> ' + n2

    do{
        res = n1+n2
        fibo_res.innerHTML += ' -> ' + res
        n1 = n2
        n2 = res
        i++
    } while(i<=num)

}

function fibofor(){
    fibo_res.innerHTML = ''
    let num = parseInt(document.getElementById('fibonum').value)
    let n1 = 0
    let n2 = 1
    let res = 0

    fibo_res.innerHTML += n1 + ' -> ' + n2

    for(i=3; i<=num; i++){
        res = n1+n2
        fibo_res.innerHTML += ' -> ' + res
        n1 = n2
        n2 = res
    }
}

function primowhile(){
    let num = parseInt(document.getElementById("primonum").value)
    contagem = 0
    i = 1
    while (i<=num){
        if (num%i == 0){
            contagem++
        }
        i++
    }
    if (contagem==2){
        primo_res.innerHTML = `O número ${num} é primo...`
    }
    else{
        primo_res.innerHTML = `O número ${num} não é primo...`
    }
}

function primodo(){
    let num = parseInt(document.getElementById("primonum").value)
    contagem = 0
    i = 1
    do{
        if (num%i == 0){
            contagem++
        }
        i++
    }while(i<=num)
    if (contagem==2){
        primo_res.innerHTML = `O número ${num} é primo...`
    }
    else{
        primo_res.innerHTML = `O número ${num} não é primo...`
    }
}

function primofor(){
    let num = parseInt(document.getElementById("primonum").value)
    contagem = 0

    for(i=1;i<=num;i++){
        if (num%i == 0){
            contagem++
        }
    }
    if (contagem==2){
        primo_res.innerHTML = `O número ${num} é primo...`
    }
    else{
        primo_res.innerHTML = `O número ${num} não é primo...`
    }
}