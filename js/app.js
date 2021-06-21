// Toggles menu on small screens
 const burger = document.getElementById('burger')
 const ul = document.getElementById('ul')
 burger.onclick = function(){ ul.classList.toggle('show')}

 // Form validates
 const message = document.getElementById('message-wrap')
 const inputs = document.querySelectorAll(':required')
 const reset = document.getElementById('reset')
 
 reset.addEventListener('click', function() {
     location.reload()
 })
 
 function validate(){
     let status = true
     for(let input of inputs){
         if(!input.value){
             setError(input)
             status = false
             return false
         }
     }
 if(status) {
         message.style.display = "block"
         message.style.color = "black"
         message.style.border = "2px solid rgba(0, 240, 0, 0.5"
         message.innerText = "Formularen er sendt"
     }
 }
 
 function setError(element){
     
     message.innerText =`Du skal udfylde feltet markeret med rødt!`
     message.style.color = "red"
     message.style.display = "block"
     element.style.border = "1px solid red"
 
     element.focus()
 
     element.addEventListener('keydown', function(){
         if(message.style.display = "block"){
             message.style.display = "none"
         }
         element.style.border = "1px solid green"
     })
 }


 // Modal for gallery

 // Constants from HTML
 const modal = document.querySelector('#modal')
 const modalContent = document.querySelector('#modal-content')
 const close = document.querySelector('#close')
 const galleryWrap = document.getElementById('gallery-wrap')
 
 // Global variables
 let section = document.createElement('section')
 section.setAttribute('id', 'gallery')
 
 
 // Loops array and creates gallery

 const arrGoals = [
    {
        goal: 1,
        title_uk: 'No Poverty',
        title_dk: 'Afskaf fattigdom',
        image: 'Goal-No-Poverty.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
    },
    {
        goal: 2,
        title_uk: 'Zero Hunger',
        title_dk: 'Stop sult',
        image: 'Goal-No-Hunger.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
    },
    {
        goal: 3,
        title_uk: 'Good Health And Well Being',
        title_dk: 'Sundhed & Trivsel',
        image: 'Goal-Good-Health.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
    },
    {
        goal: 4,
        title_uk: 'Quality Education',
        title_dk: 'Kvalitets-uddannelse',
        image: 'Goal-Good-Education.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
    },
    {
        goal: 5,
        title_uk: 'Gender Equality',
        title_dk: 'Ligestilling mellem kønnene',
        image: 'Goal-Gender-Equality.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
    },
    {
        goal: 6,
        title_uk: 'Clean Water & Sanitation',
        title_dk: 'Rent vand & sanitet',
        image: 'Goal-Clean-Water.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
    },
    {
        goal: 7,
        title_uk: 'Affordable Clean Energy',
        title_dk: 'Bæredygtig energi',
        image: 'Goal-Clean-Energy.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
    },
    {
        goal: 8,
        title_uk: 'Decent Work & Economic Growth',
        title_dk: 'Anstændige jobs & økonomisk vækst',
        image: 'Goal-Decent-Work.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
    },
    {
        goal: 9,
        title_uk: 'Industry, Innovation & Infrastructure',
        title_dk: 'Industri, innovation & infrastruktur',
        image: 'Goal-Industry.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
    },
    {
        goal: 10,
        title_uk: 'Reduced Inequalities',
        title_dk: 'Mindre ulighed',
        image: 'Goal-Inequalities.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
    },
    {
        goal: 11,
        title_uk: 'Sustainable Cities & Communities',
        title_dk: 'Bæredygtige byer & lokalsamfund',
        image: 'Goal-Sustainable-Cities.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
    },
    {
        goal: 12,
        title_uk: 'Responsible Consumption',
        title_dk: 'Ansvarlig forbrug & produktion',
        image: 'Goal-Responsible-Consumption.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
    },
    {
        goal: 13,
        title_uk: 'Climate Action',
        title_dk: 'Klima-indsats',
        image: 'Goal-Climate-Action.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
    },
    {
        goal: 14,
        title_uk: 'Life Below Water',
        title_dk: 'Livet i havet',
        image: 'Goal-Life-Water.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
    },
    {
        goal: 15,
        title_uk: 'Life On Land',
        title_dk: 'Livet på land',
        image: 'Goal-Life-Land.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
    },
    {
        goal: 16,
        title_uk: 'Peace, Justice & Strong Institutions',
        title_dk: 'Fred, retfærdighed & stærke institutioner',
        image: 'Goal-Institutions.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
    },
    {
        goal: 17,
        title_uk: 'Partnerships For All The Goals',
        title_dk: 'Partnerskab for handling',
        image: 'Goal-Partnership.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
    },
    {
        goal: 18,
        title_uk: 'Colorwheel',
        title_dk: 'Farvehjul',
        image: 'Global-Goals.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
    }
]
// Array end


 for(let goal of arrGoals) {
     let figure = document.createElement('figure')
     let img = document.createElement('img')
     let filepath = `./images/Goals/${goal.image}`
     img.setAttribute('src', filepath)
 
     figure.appendChild(img)
     section.appendChild(figure)
 
     // Opens modal with selected image
     img.onclick = function(){
         openModal(filepath)
     } 
 } 
 
 // Closes modal on click on cross
 close.onclick = function(){
     closeModal()
 }
 
 // Closes modal on click outside image
 window.onclick = function(e){
     if(e.target === modal){
         closeModal()
     }
 }
 
 // Functions that opens modal
 function openModal(path){
     modalContent.style.backgroundImage = `url('${path}')`
     modal.style.display = 'block'
 }
 
 // Functions that closes modal
     function closeModal(){
     modal.style.display = 'none'
 }
 
 // Sends code to HTML
galleryWrap.prepend(section)
 
 