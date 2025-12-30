document.addEventListener('DOMContentLoaded', () => {
    const taskinp = document.getElementById('task-inp');
    const taskbtn = document.getElementById('task-btn');
    const tasklist = document.getElementById('task-list');

    let tasks = JSON.parse(localStorage.getItem('tasklist')) || [];

    // render saved tasks on load
    tasks.forEach(task => rendertask(task));

    function Addtask() {
        if (taskinp.value.trim() === '') return;

        const task = {
            id: Date.now(),
            text: taskinp.value,
            completed: false
        };

        tasks.push(task);
        rendertask(task);
        savetasks();
        taskinp.value = '';
    }

    function rendertask(task) {
        const li = document.createElement('li');
        li.dataset.id = task.id;

        const span = document.createElement('span');
        span.textContent = task.text;

        const delbtn = document.createElement('button');
        delbtn.textContent = 'Delete';

        li.appendChild(span);
        li.appendChild(delbtn);
        tasklist.appendChild(li);

        if (task.completed) li.classList.add('completed');

        // toggle completed
        li.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') return;
            task.completed = !task.completed;
            li.classList.toggle('completed');
            savetasks();
        });

        // delete task
        delbtn.addEventListener('click', () => {
            tasks = tasks.filter(t => t.id !== task.id);
            li.remove();
            savetasks();
        });

        // edit task on double click
        span.addEventListener('dblclick', () => {
            const editInput = document.createElement('input');
            editInput.type = 'text';
            editInput.value = task.text;

            li.replaceChild(editInput, span);
            editInput.focus();

            function saveEdit() {
                const newText = editInput.value.trim();
                if (newText === '') return;

                task.text = newText;
                span.textContent = newText;
                li.replaceChild(span, editInput);
                savetasks();
            }

            editInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') saveEdit();
            });

            editInput.addEventListener('blur', saveEdit);
        });
    }

    function savetasks() {
        localStorage.setItem('tasklist', JSON.stringify(tasks));
    }

    taskbtn.addEventListener('click', Addtask);

    taskinp.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') Addtask();
    });
});
