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
        project.addEventListener('keydown', function () {
            project.classList.add('expand');
        });
    }
}

animate();