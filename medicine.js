// function homefunction() {
//     var a = document.getElementById("homepage");

//     a.style.display = "block";

// }

// function aboutfunction() {
//     var a = document.getElementById("aboutpage");
//     a.style.display = "block";
// }
// function treatmentfunction() {
//     var a = document.getElementById("treatment");
//     a.style.display = "block";
// }
// function visitfunction() {
//     var a = document.getElementById("visit");
//     a.style.display = "block";
// }



// // function showPage(pageId) {
//     var homePage = document.getElementById('homePage');
//     var aboutPage = document.getElementById('aboutPage');

//     if (pageId === 'about') {
//       aboutPage.classList.remove('hidden');
//       homePage.classList.add('hidden');
//     } else {
//       homePage.classList.remove('hidden');
//       aboutPage.classList.add('hidden');
//     }
//   }


function togglePage(pageId) {
    const homePage = document.getElementById('home');
    const aboutPage = document.getElementById('about');
    const treatmentPage = document.getElementById('treatment');
   
    if (pageId === 'home') {
        homePage.classList.remove('hidden');
        aboutPage.classList.add('hidden');
        treatmentPage.classList.add('hidden');
    } else if (pageId === 'about') {
        homePage.classList.add('hidden');
        aboutPage.classList.remove('hidden');
        treatmentPage.classList.add('hidden');
    }
    else if (pageId === 'treatment') {
        homePage.classList.add('hidden');
        aboutPage.classList.add('hidden');
        treatmentPage.classList.remove('hidden');
    }
}
