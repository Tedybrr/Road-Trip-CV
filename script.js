// GSAP Animation for Roadmap Stops
gsap.from(".stop", { 
  y: -50, 
  opacity: 0, 
  duration: 1, 
  stagger: 0.3 
});

document.querySelectorAll('.stop').forEach(stop => {
  stop.addEventListener('mouseover', () => {
    gsap.to(stop, { scale: 1.3, duration: 0.3 });
  });
  stop.addEventListener('mouseout', () => {
    gsap.to(stop, { scale: 1, duration: 0.3 });
  });
});

// Modal Interactivity
const stops = document.querySelectorAll('.stop');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeBtn = document.querySelector('.close-btn');

const content = {
  education: `
    <strong>Masters degree at UASG</strong> <br>
    Structural Engineer (2018-2024) <br><br>
    <strong>High School of Construction</strong> <br>
    Water Supply Engineer (2012-2017)
  `,
  "professional-experience": `
    <strong>Engineering Experience</strong> <br>
    Structural Engineering graduate skilled in design and analysis. <br><br>
    <strong>Political Experience</strong> <br>
    GERB, DBG leadership and roles in European politics. <br><br>
    <strong>Financial Experience</strong> <br>
    Investor and Horizon 2020 evaluator. <br><br>
    <strong>Entrepreneurship</strong> <br>
    Owner of various businesses from 2017-2023.
  `,
  "volunteer-work": `
    <strong>Rotaract Balkan Projects:</strong> <br>
    1. Sofia Puppy Parade <br>
    2. Wheelchair Basketball <br>
    3. End Polio Initiative <br>
    4. Christmas Bazaar
  `,
  skills: `
    <strong>Languages:</strong> Bulgarian, English, Russian, Macedonian, Serbian, Croatian <br><br>
    <strong>Software:</strong> Microsoft Office, AutoCAD, Revit, Photoshop, SQL, and more. <br><br>
    <strong>Traits:</strong> Adaptability, Leadership, Creativity, Attention to Detail.
  `
};

stops.forEach(stop => {
  stop.addEventListener('click', () => {
    const id = stop.id;
    modalTitle.textContent = id.replace('-', ' ').toUpperCase();
    modalDescription.innerHTML = content[id];
    modal.classList.remove('hidden');
    modal.classList.add('visible');
  });
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('visible');
  modal.classList.add('hidden');
});
