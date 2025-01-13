
function togglePage(pageId) {
    const homePage = document.getElementById('home');
    const aboutPage = document.getElementById('about');
    const treatmentPage = document.getElementById('treatment');
    const visitpage = document.getElementById('visit');
   
    if (pageId === 'home') {
        homePage.classList.remove('hidden');
        aboutPage.classList.add('hidden');
        treatmentPage.classList.add('hidden');
        visitpage.classList.add('hidden');
    } else if (pageId === 'about') {
        homePage.classList.add('hidden');
        aboutPage.classList.remove('hidden');
        treatmentPage.classList.add('hidden');
        visitpage.classList.add('hidden');
    }
    else if (pageId === 'treatment') {
        homePage.classList.add('hidden');
        aboutPage.classList.add('hidden');
        treatmentPage.classList.remove('hidden');
        visitpage.classList.add('hidden');
    }
    else if (pageId === 'visit') {
        homePage.classList.add('hidden');
        aboutPage.classList.add('hidden');
        treatmentPage.classList.add('hidden');
        visitpage.classList.remove('hidden');

    }
}
