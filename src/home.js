function createHome() {
    const main = document.getElementById('main');
    const title = document.createElement('div');
    title.classList.add('title-container');
    main.append(title);
    
    const crabIcon = document.createElement('img');
    crabIcon.src = './assets/crab.svg';
    title.append(crabIcon);
    const titleParagraph = document.createElement('h1');
    titleParagraph.textContent = "Cleo's Crab Shack";
    title.append(titleParagraph);


    const info = document.createElement('div');

    info.classList.add('');

    const hours = document.createElement('div');

    hours.classList.add('');

    const location = document.createElement('div');

    location.classList.add('');
}

export default createHome;