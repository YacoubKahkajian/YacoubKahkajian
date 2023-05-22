async function parse() {
    const response = await fetch('projects.json');
    const data = await response.json();
    for (let i = 0; i < data.length; i++) {
        const temp = document.getElementsByTagName('template')[0];
        const div = temp.content.cloneNode(true);
        div.querySelector('.name').textContent = data[i].name;
        div.querySelector('.date').textContent = data[i].date;
        div.querySelector('.stack').textContent = data[i].stack;
        div.querySelector('.describe').innerHTML = data[i].description;
        div.querySelector('.link').innerHTML = `<a href="${data[i].link}">CHECK IT OUT</a>` ;
        document.getElementById('projects').appendChild(div);
    }
}

const colors = ['#FF9C24', '#0BDA51', '#D6A0F8', '#FDEE00'];

function animate() {
    let projects = document.getElementsByClassName('project');
    for (let project of projects) {
        project.addEventListener('mouseenter', function () {
            project.style.color = 'black';
            project.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        })
        project.addEventListener('mouseleave', function () {
            project.style.color = 'white';
            project.style.backgroundColor = 'black';
        })
        project.addEventListener('click', function () {
            project.classList.toggle('expand');
        });
    }
}

parse().then(r => animate());