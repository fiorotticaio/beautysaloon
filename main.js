/* abre e fecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle') // procura no nav tudo que tem toggle

for (const element of toggle) {
    element.addEventListener('click', function(){ /* vai realizar essa funcao quando clicar no element */
        nav.classList.toggle('show') /* se tiver o "show" na lista de classes do nav ele tira e se nao tiver coloca */
    })
}


/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show')
    })
}


/* mudar o header da pagina quando der scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
    if (window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
}


/* Testimonials carousel slider swiper (nao esta funcionando)
const swiper = new Swiper('.swiper', {
    slidesPerView = 1, // quantos slides ver por vez
    pagination: {
        el: '.swiper-pagination', // el: elemento
    },
    mousewheel: true, // passar com a rodinha do mouse
    keyboard: true // passar com a rodinha do teclado
    breakpoints: {
        767: {
            slidesPerView: 2;
            setWrapperSize: true
        }
    }
}); */


/* ScrollReveal: Mostrar elementos quando der scroll na pagina */
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social`, 
    {interval: 100}
)


/* Botao voltar para o topo */
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
    if(window.scrollY >= 560) { // 560: numerp chutado pra ver se ta bom a distancia de rolagem ate o botao aparecer
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}


/* Menu ativo conforme a seçao visivel na pagina */
const sections = document.querySelectorAll('main section[id]') // dentro do main, todas as sections que tem uma tag id

function activateMenuAtCurrentSection() {
    const checkpoint = window.pageYOffset + (window.innerHeight/8)*4

    for(const section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if(checkpointStart && checkpointEnd) {
            // pega o link "a" que tenha que tem o href igual ao id da seçao
            document
                .querySelector('nav ul li a[href*=' + sectionId +']') 
                .classList.add('active')
        } else {
            document
                .querySelector('nav ul li a[href*=' + sectionId +']')
                .classList.remove('active')
        }
    }
}


/* When Scroll */
window.addEventListener('scroll', function () {
    /* vai executar todas essas funcoes ja criadas antes quando der o scroll */
    changeHeaderWhenScroll()
    backToTop()
    activateMenuAtCurrentSection()
})