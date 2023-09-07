console.log('Fecha o console aí, seu coda fofo!!!')

const questions = [
    {
        question: 'Toma café?',
        opA: 'Preto, sem açucar, à partir de 300ml por dia',
        opB: 'Com açucar e leite, uma caneca por dia no máximo',
        opC: 'Não tomo café. Apenas Capuccinos, Frapuccinos e outros ccinos'
    },{
        question: 'Está aqui respondendo esse teste em qual horário?',
        opA: 'Horário de trabalho',
        opB: 'Horário de almoço',
        opC: 'Após o expediente'
    },{
        question: 'Acorda que horas?',
        opA: 'Na hora da daily (depois volto dormir)',
        opB: 'Duas horas antes da daily',
        opC: 'Cinco horas antes da daily para iniciar minha rotina de leitura, meditação, exercício, yoga...'
    },{
        question: 'Deita pra dormir qual horário?',
        opA: 'Entre 01:00h e 03:00h (quando durmo)',
        opB: 'Entre 22:00h e 00:00h',
        opC: 'Entre 19:00h e 21:00h'
    },{
        question: 'Qual sua opinião sobre testes no código?',
        opA: 'Só testa quem não se garante',
        opB: 'Testo sempre que dá tempo',
        opC: 'Testes são fundamentais'
    },{
        question: 'O que quer dizer XGH?',
        opA: 'Extreme Go Horse (Sou certificado)',
        opB: 'Não sei',
        opC: 'Algum tipo de GH (hormônio de crescimento) para ficar top na academia'
    },{
        question: 'Qual sua opinião sobre trabalho presencial?',
        opA: 'Deveria ser proibido.',
        opB: 'Não me importo, até gosto de ter contato com o meu time',
        opC: 'Deveria ser obrigatório. Não se cria cultura em trabalho remoto'
    }
]

const init = document.getElementById('init')
const divQuestions = document.getElementById('questions')
const divResult = document.getElementById('result')
const inVulgo = document.getElementById('inVulgo')
const h1Question = document.getElementById('question')
const formOptions = document.getElementById('options')
const labelA = document.getElementById('labelA')
const labelB = document.getElementById('labelB')
const labelC = document.getElementById('labelC')
const opA = document.getElementById('opA')
const opB = document.getElementById('opB')
const opC = document.getElementById('opC')
var vulgo = ''
var chorume = 0
var personalitte = 0
var redPill = 0
var numQuestions = 0

inVulgo.focus()

init.addEventListener('submit', e => {
    e.preventDefault()
    if(inVulgo.value !== ''){
        vulgo = inVulgo.value
        alert(`Bora descolar se tu é chorume então, ${vulgo}...`)
        showQuestion()
    } else {
        alert('Digita um nome aí, morcego(a) do caraio!')
        inVulgo.focus()
    }
})

formOptions.addEventListener('submit', e => {
    e.preventDefault()
    let ops = [opA, opB, opC]
    let selected = null
    for(let i=0; i<ops.length; i++){
        if(ops[i].checked){
            selected = ops[i].value
        }
    }
    if(selected == null){
        alert('Seleciona uma opção aí, seu jaguara!!!')
    } else{
        switch(selected){
            case 'opA':
                chorume++
                break
            case 'opB':
                personalitte++
                break
            case 'opC':
                redPill++
        }
        for(let i=0; i<ops.length; i++){
            if(ops[i].checked){
                ops[i].checked = false
            }
        }
        if(numQuestions<6){
            showQuestion()
        } else{
            showResult()
        }
    }
})

function showQuestion(){
    let randNum = Math.floor(Math.random() * questions.length+1)
    while(randNum === questions.length){
        randNum = Math.floor(Math.random() * questions.length+1)
    }
    init.style.display = 'none'
    divQuestions.style.display = 'flex'
    h1Question.innerHTML = questions[randNum].question
    labelA.textContent = questions[randNum].opA
    labelB.textContent = questions[randNum].opB
    labelC.textContent = questions[randNum].opC
    questions.splice(randNum,1)
    numQuestions++
}

function showResult(){
    divQuestions.style.display = 'none'
    divResult.style.display = 'flex'
    const restartBtn = document.createElement('button')
    restartBtn.textContent = 'Refazer o teste'
    restartBtn.addEventListener('click', () => {
        location.reload()
    })

    if(chorume > personalitte && chorume > redPill){
        divResult.innerHTML = `<h1>PARABÉNS, ${vulgo.toUpperCase()}!</h1><h1>VOCÊ É UM(A) DEV CHORUME!!!</h1><p>Dev raiz. Transforma café em código. "Toma no cu" é vírgula. Só trampa remoto. Encerra a semana na quinta-feira e taca o foda-se!</p>`
    } else if(redPill > chorume && redPill > personalitte){
        divResult.innerHTML = `<h1>PORRA, ${vulgo.toUpperCase()}!</h1><h1>VOCÊ É UM(A) DEV RED PILL DA BOLHA TECH!!!</h1><p>Dev tanga frouxa. Coda fofo 2.0. Trabalha remoto, mas vai todo dia no escritório porque é otário. X9 do caraio. Faz teste unitário até nos logs do console. Caga 10 regras por minuto e vende curso bosta de como ficar rico com programação.</p>`
    } else{
        divResult.innerHTML = `<h1>PORRA, ${vulgo.toUpperCase()}!</h1><h1>VOCÊ É UM(A) DEV PERSONALITTÉ!!!</h1><p>Dev nutelinha. Coda fofo. Trabalha híbrido. Nunca mandou colega do trampo tomar no cu. Nunca dá migué na daily e chora quando vê um bug.</p>`
    }
    divResult.appendChild(restartBtn)
}