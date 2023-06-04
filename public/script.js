var checkbox = document.getElementsByClassName('checkbox');
var taskParagraph = document.getElementsByClassName('task_content_paragraph');

var checkedStatus = false;
var taskText = Object.keys(taskParagraph);
var check = Object.keys(checkbox);

var task = {
  name: 'Stretching after workout',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo reiciendis cupiditate corporis perferendis sed! Rerum voluptatem fuga magni fugit. Nulla soluta, delectus vero et porro nobis illum ipsam! Pariatur, aliquam.',
  priority: 1,
  status: checkedStatus,
};

// console.log(taskParagraph[0]);

//Loop through paragraphs of tasks and checkboxes in order to add style changes to specific element using the keys
check.forEach(function (key) {
  checkbox[key].addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
      task.status = true;
      taskParagraph[key].style.textDecoration = 'line-through';
      console.log(task.status);
    } else {
      task.status = !task.status;
      taskParagraph[key].style.textDecoration = 'none';
      console.log(task.status);
    }
  });
});
