// section S
const sectionAllS = document.querySelectorAll('.calculator-s')
const btn_cal_s = document.querySelector('.cal-s')
const inputS = document.querySelector('.input_s_first')
const inputS2 = document.querySelector('.input_s_second')
const resultS = document.querySelector('.sum-p')
const menuSButton = document.querySelector('.btn-menu-s')

menuSButton.addEventListener('click', () => {
    sectionAllq.forEach(el => {
        el.classList.remove('add')
    })
    sectionAllS.forEach(e => {
        e.classList.toggle('add')
    })
    sectionAlli.forEach(el => {
        el.classList.remove('add')
    })
    sectionAllir.forEach(el => {
        el.classList.remove('add')
    })
    sectionAllil.forEach(el => {
        el.classList.remove('add')
    })
})


const valueS = (a,b) => {
    a = inputS.value
    b = inputS2.value
    const sumP = a * b
    resultS.textContent = `S wynosi: ${sumP}VA`
}

btn_cal_s.addEventListener('click', valueS)





// section Q

const sectionAllq = document.querySelectorAll('.calculator-q')
const btn_cal_q = document.querySelector('.cal-q')
const inputQ = document.querySelector('.inputQ')
const inputQ2 = document.querySelector('.inputQ2')
const resultQ = document.querySelector('.sum-q')
const menuQButton = document.querySelector('.btn-menu-q')

menuQButton.addEventListener('click', () => {
    sectionAllq.forEach(el => {
        el.classList.toggle('add')
    })
    sectionAllS.forEach(e => {
        e.classList.remove('add')
    })
    sectionAlli.forEach(el => {
        el.classList.remove('add')
    })
    sectionAllir.forEach(el => {
        el.classList.remove('add')
    })
    sectionAllil.forEach(el => {
        el.classList.remove('add')
    })
})


const valueQ = (a,b) => {

    a = inputQ.value
    b = inputQ2.value 
    let summary = ((a * a) - (b * b)) 
    const sumQ = Math.sqrt(summary)
    resultQ.textContent = `Q wynosi: ${sumQ.toFixed(3)}VAr`
}

btn_cal_q.addEventListener('click', valueQ)

// section i 

const sectionAlli = document.querySelectorAll('.calculator-i')
const btn_cal_i = document.querySelector('.cal-i')
const inputI = document.querySelector('.inputI')
const inputI2 = document.querySelector('.inputI2')
const inputI3 = document.querySelector('.inputI3')
const resultI = document.querySelector('.sum-i')
const menuIButton = document.querySelector('.btn-menu-i')

menuIButton.addEventListener('click', () => {
    sectionAllq.forEach(el => {
        el.classList.remove('add')
    })
    sectionAllS.forEach(e => {
        e.classList.remove('add')
    })
    sectionAlli.forEach(el => {
        el.classList.toggle('add')
    })
    sectionAllir.forEach(el => {
        el.classList.remove('add')
    })
    sectionAllil.forEach(el => {
        el.classList.remove('add')
    })
})


const valueI = (a,b,c) => {
    a = inputI.value
    b = inputI2.value
    c = inputI3.value
    const sumI = a / (b * c)
    resultI.textContent = `S wynosi: ${sumI.toFixed(2)}A`
}

btn_cal_i.addEventListener('click', valueI)

// section IR

const sectionAllir = document.querySelectorAll('.calculator-ir')
const btn_cal_ir = document.querySelector('.cal-ir')
const inputIr = document.querySelector('.inputir')
const inputIr2 = document.querySelector('.inputir2')
const resultIr = document.querySelector('.sum-ir')
const menuIrButton = document.querySelector('.btn-menu-ir')

menuIrButton.addEventListener('click', () => {
    sectionAllq.forEach(el => {
        el.classList.remove('add')
    })
    sectionAllS.forEach(e => {
        e.classList.remove('add')
    })
    sectionAlli.forEach(el => {
        el.classList.remove('add')
    })
    sectionAllir.forEach(el => {
        el.classList.toggle('add')
    })
    sectionAllil.forEach(el => {
        el.classList.remove('add')
    })
})

const valueIr = (a,b) => {
    a = inputIr.value
    b = inputIr2.value
    const sumIr = a * b
    resultIr.textContent = `Ir wynosi: ${sumIr.toFixed(2)}A`
}

btn_cal_ir.addEventListener('click', valueIr)

// section IL

const sectionAllil = document.querySelectorAll('.calculator-il')
const btn_cal_il = document.querySelector('.cal-il')
const inputIl = document.querySelector('.inputIl')
const inputIl2 = document.querySelector('.inputI2')
const resultIl = document.querySelector('.sum-il')
const menuIlButton = document.querySelector('.btn-menu-il')


menuIlButton.addEventListener('click', () => {
    sectionAllq.forEach(el => {
        el.classList.remove('add')
    })
    sectionAllS.forEach(e => {
        e.classList.remove('add')
    })
    sectionAlli.forEach(el => {
        el.classList.remove('add')
    })
    sectionAllir.forEach(el => {
        el.classList.remove('add')
    })
    sectionAllil.forEach(el => {
        el.classList.toggle('add')
    })
})


const valueIl = (a,b) => {
    a = inputIl.value
    b = inputIl2.value 
    let summary = ((a * a) - (b * b)) 
    const sumIl = Math.sqrt(summary)
    resultIl.textContent = `Il wynosi: ${sumIl.toFixed(2)}A`
}

btn_cal_il.addEventListener('click', valueIl)

// does not reload the page

window.addEventListener('click', (e) => {
    e.preventDefault()
})