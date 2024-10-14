//link test
console.log('it works')

//DOM elements
const rowEl = document.getElementById('members')

//variables
let finalMarkup = ''

//members object
const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

//functions
function generateMarkUp(item){

  const {img, name, role, email} = item

  return `
  <div class="col">
    <div class="card bg-black text-white">
    <div class="d-flex">

      <div>
        <img src="./assets/${img}" alt="" class="img-fluid">
      </div>

      <div class="py-2 px-3 d-flex flex-column justify-content-between">
        <h3>${name}</h3>
        <h4>${role}</h4>
        <p class="text-info">${email}</p>
      </div>
    </div>

    </div>
  </div>
  `
}


//main
for (let i = 0; i < teamMembers.length; i++){
  const member = teamMembers[i]
  const markup = generateMarkUp(member)

  finalMarkup += markup
}

rowEl.insertAdjacentHTML('beforeend', finalMarkup)