document.getElementById("close").onclick=function(){
    document.getElementById("alert").remove();
}
document.getElementById("signBtt").onclick=function(){
    window.open(("Sign Up/boot1.html"),"_self")
}
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('bg-body-tertiary1');
      navbar.classList.remove('bg-body-tertiary');
    } else {
      navbar.classList.remove('bg-body-tertiary1');
      navbar.classList.add('bg-body-tertiary');
    }
  });
  document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const searchTerm = document.getElementById("searchInput").value.trim();
    if (searchTerm === "") return; // If the search term is empty, do nothing

    // Search for the term within divs
    const divs = document.querySelectorAll("div");
    let found = false;

    divs.forEach(div => {
        if (div.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            div.scrollIntoView({ behavior: "smooth", block: "center" });
            found = true;
            return; // Stop after finding the first match
        }
    });

    if (!found) {
        alert("Word not found!");
    }
});




  document.getElementById("new").onclick=function(){
    document.getElementsByClassName("outline")[0].innerHTML="New"
    
  }
  document.getElementById("workwear").onclick=function(){
    document.getElementsByClassName("outline")[0].innerHTML="Workwear"

  }
  document.getElementById("activewear").onclick=function(){
    document.getElementsByClassName("outline")[0].innerHTML="Activewear"
  }
  document.addEventListener("DOMContentLoaded", function() {
    const clothesContainer = document.getElementById('clothes-container');

    const newImages = [
      { src: 'Images/download (1) copy.jpg', text1: 'Carrle Apron | 1082', text2: 'Front Patch Pocket' },
      { src: 'Images/download (2) copy.jpg', text1: 'Stone Wash Shirt | 5426', text2: 'Cotton Drill - Washed Finsh' },
      { src: 'Images/download (3) copy.jpg', text1: 'Relax Faded Track Pants | 5938', text2: 'Tear-out Label' },
      { src: 'Images/download (4) copy.jpg', text1: 'Wo\'s Qullted Vest | 4431', text2: '100% Recycled Polyester' }
    ];

    const workwearImages = [
      { src: 'Images/download (14).webp ', text1: 'Canvas Half Apron | 1081', text2: 'Heavy Weight Duck Canvas' },
      { src: 'Images/download (15).webp', text1: 'Stencil Safety Hood | 5102F', text2: 'Hi-Vis Certified' },
      { src: 'Images/download (16).webp', text1: 'Canvas Pants | 5982', text2: 'Dual Pockets On Back' },
      { src: 'Images/download (17).webp', text1: 'Surf Safety Cap | 1114F', text2: '100% Recycled Nylon' }
    ];

    const activewearImages = [
      { src: 'Images/download (10).webp', text1: 'Stable Active L/S Tee | 5020A', text2: 'Moisture Wicking - Quick Drying' },
      { src: 'Images/download (11).webp', text1: "Wo's Active Leggings | 4630", text2: 'High Waist - Slim Fit' },
      { src: 'Images/download (12).webp', text1: 'Active Pro Shorts 18" | 5621', text2: 'Packable Into Left Pocket' },
      { src: 'Images/download (13).webp', text1: 'Access Active Cap | 1133', text2: 'Velcro Strap To Close' }
    ];

    function loadImages(images) {
      clothesContainer.innerHTML = ''; // Clear current images
      images.forEach(image => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
          <a href="#">
            <img src="${image.src}" class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text1">${image.text1}</p>
              <p class="card-text2">${image.text2}</p>
            </div>
          </a>
        `;
        clothesContainer.appendChild(card);
      });
    }

    document.getElementById('new').addEventListener('click', () => loadImages(newImages));
    document.getElementById('workwear').addEventListener('click', () => loadImages(workwearImages));
    document.getElementById('activewear').addEventListener('click', () => loadImages(activewearImages));

    // Load default images (New) on page load
    loadImages(newImages);
  });