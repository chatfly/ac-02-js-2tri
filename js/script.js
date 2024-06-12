const soma_res = document.getElementById('somares')
const fibo_res = document.getElementById('fibores')
const primo_res = document.getElementById('primores')

function fibowhile(){
    fibo_res.innerHTML = ''
    let num = parseInt(document.getElementById('fibonum').value)
    let n1 = 0
    let n2 = 1
    let res = 0
    i = 1

    fibo_res.innerHTML += n2

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
    i = 1

    fibo_res.innerHTML += n2

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

    fibo_res.innerHTML += n2

    for(i=1; i<=num; i++){
        res = n1+n2
        fibo_res.innerHTML += ' -> ' + res
        n1 = n2
        n2 = res
    }
}