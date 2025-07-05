$(document).ready(function() {
    updateDeleteAllButton();

    $('#todo-form').on('submit', function(e) {
    e.preventDefault();

    const taskText = $('#todo-input').val().trim();

if (taskText !== '') {
    // We'll add the task here
    addTask(taskText);

}
$('#todo-input').val('');
    
});

function addTask(taskText) {
    const taskId = Date.now();
    
    const taskHTML = `
        <li class="list-group-item d-flex justify-content-between align-items-center" data-id="${taskId}">
            <div class="task-content">
                <input type="checkbox" class="form-check-input me-2 task-checkbox">
                <span class="task-text">${taskText}</span>
            </div>
            <button class="btn btn-danger btn-sm delete-task">Delete</button>
        </li>
    `;
    
    $('#todo-list').append(taskHTML);
    updateDeleteAllButton();
}
function updateDeleteAllButton() {
    if ($('#todo-list li').length > 0) {
        $('#delete-all-btn').show();
    }else {
        $('#delete-all-btn').hide();
    }                   
}


$(document).on('click', '#delete-all-btn', function() {
    $('#todo-list').empty();
    updateDeleteAllButton();
});

$(document).on('click', '.delete-task', function() {
    $(this).closest('li').remove();
    updateDeleteAllButton();
});
$(document).on('change', '.task-checkbox', function() {
    const taskText = $(this).siblings('.task-text');
    
    if ($(this).is(':checked')) {
        taskText.css('text-decoration', 'line-through');
        taskText.css('opacity', '0.6');
    } else {
        taskText.css('text-decoration', 'none');
        taskText.css('opacity', '1');
    }
});

});