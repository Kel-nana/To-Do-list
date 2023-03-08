import './style.css';

const li = document.querySelector('.clear');
const listData = [{ description: 'Wake up at 8:00am', completed: false, index: 0 },
  { description: 'Shower and take breakfast', completed: false, index: 1 },
  { description: 'Workout and watch funny video', completed: false, index: 2 },
  { description: 'Attend class', completed: false, index: 3 },
];
const populateData = () => {
  listData.forEach((data) => {
    li.insertAdjacentHTML('beforebegin', `<li><p><input type="checkbox" id="checkbox">${data.description}</p><i class="fa-solid fa-ellipsis-vertical"></i></li>`);
  });
};

populateData();