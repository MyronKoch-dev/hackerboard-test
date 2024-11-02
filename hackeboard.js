document.addEventListener('DOMContentLoaded', () => {
    const tasksContainer = document.getElementById('tasks-container');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Fetch tasks from the server (replace with actual API endpoint)
    fetch('/api/tasks')
        .then(response => response.json())
        .then(tasks => {
            displayTasks(tasks);
        });

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            filterTasks(filter);
        });
    });

    function displayTasks(tasks) {
        tasksContainer.innerHTML = '';
        tasks.forEach(task => {
            const taskElement = createTaskElement(task);
            tasksContainer.appendChild(taskElement);
        });
    }

    function createTaskElement(task) {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task', task.category);
        taskElement.innerHTML = `
            <h3>${task.title}</h3>
            <p>${task.description}</p>
            <button class="complete-btn" data-id="${task.id}">Mark as Complete</button>
        `;
        return taskElement;
    }

    function filterTasks(category) {
        const tasks = document.querySelectorAll('.task');
        tasks.forEach(task => {
            if (category === 'all' || task.classList.contains(category)) {
                task.style.display = 'block';
            } else {
                task.style.display = 'none';
            }
        });
    }
});
