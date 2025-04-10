
        const todoInput = document.getElementById('todo-input');
        const addButton = document.getElementById('add-button');
        const todoList = document.getElementById('todo-list');

        function addTask() {
            const taskText = todoInput.value.trim();

            if (taskText !== '') {
                const listItem = document.createElement('li');
                listItem.className = "flex items-center justify-between bg-blue-50 hover:bg-blue-100 rounded-md p-3";

                const taskSpan = document.createElement('span');
                taskSpan.textContent = taskText;
                taskSpan.className = "flex-grow";

                const buttonContainer = document.createElement('div');
                buttonContainer.className = "space-x-2";

                const completeButton = document.createElement('button');
                completeButton.textContent = 'Complete';
                completeButton.className = "bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm";
                completeButton.addEventListener('click', () => {
                    listItem.classList.toggle('completed');
                    if (listItem.classList.contains('completed')) {
                        taskSpan.classList.add('line-through', 'text-gray-400');
                    } else {
                        taskSpan.classList.remove('line-through', 'text-gray-400');
                    }
                });

                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.className = "bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-sm";
                deleteButton.addEventListener('click', () => {
                    listItem.remove();
                });

                buttonContainer.appendChild(completeButton);
                buttonContainer.appendChild(deleteButton);

                listItem.appendChild(taskSpan);
                listItem.appendChild(buttonContainer);
                todoList.appendChild(listItem);

                todoInput.value = ''; // Clear the input
            } else {
                alert('Please enter a task!');
            }
        }

        addButton.addEventListener('click', addTask);
        todoInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                addTask();
            }
        });
