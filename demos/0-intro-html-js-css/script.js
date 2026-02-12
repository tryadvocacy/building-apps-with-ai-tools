
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
const emptyMessage = document.getElementById('emptyMessage');

// Load todos from localStorage
function loadTodos() {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
}

// Save todos to localStorage
function saveTodos(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Update dashboard stats
function updateDashboard() {
    const todos = loadTodos();
    const total = todos.length;
    const completed = todos.filter(t => t.completed).length;
    const pending = total - completed;
    const progress = total > 0 ? (completed / total) * 100 : 0;

    document.getElementById('totalTasks').textContent = total;
    document.getElementById('completedTasks').textContent = completed;
    document.getElementById('pendingTasks').textContent = pending;
    document.getElementById('progressBar').style.width = progress + '%';
}

// Render todos
function renderTodos() {
    const todos = loadTodos();
    todoList.innerHTML = '';

    if (todos.length === 0) {
        emptyMessage.style.display = 'block';
    } else {
        emptyMessage.style.display = 'none';

        todos.forEach((todo, index) => {
            const li = document.createElement('li');
            li.className = `todo-item ${todo.completed ? 'completed' : ''}`;

            li.innerHTML = `
                <input 
                    type="checkbox" 
                    ${todo.completed ? 'checked' : ''}
                    onchange="toggleTodo(${index})"
                >
                <span class="todo-text">${escapeHtml(todo.text)}</span>
                <button class="delete-btn" onclick="deleteTodo(${index})">Delete</button>
            `;

            todoList.appendChild(li);
        });
    }

    updateDashboard();
}

// Add todo
function addTodo() {
    const text = todoInput.value.trim();
    if (!text) return;

    const todos = loadTodos();
    todos.push({ text, completed: false });
    saveTodos(todos);
    todoInput.value = '';
    renderTodos();
    todoInput.focus();
}

// Toggle todo completion
function toggleTodo(index) {
    const todos = loadTodos();
    todos[index].completed = !todos[index].completed;
    saveTodos(todos);
    renderTodos();
}

// Delete todo
function deleteTodo(index) {
    const todos = loadTodos();
    todos.splice(index, 1);
    saveTodos(todos);
    renderTodos();
}

// Allow Enter key to add todo
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTodo();
});

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Initial render
renderTodos();