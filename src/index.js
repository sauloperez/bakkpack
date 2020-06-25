import './styles.css';

function setState(checkbox) {
  localStorage.setItem(checkbox.id, checkbox.checked);
}

function loadState(checkbox) {
  return localStorage.getItem(checkbox.id) === 'true';
}

var checkboxes = document.querySelectorAll("input[type='checkbox']");

checkboxes.forEach(checkbox => {
  const label = checkbox.labels[0]

  checkbox.addEventListener('change', () => {
    label.classList.toggle('line-through');

    setState(checkbox);
  });

  checkbox.checked = loadState(checkbox);
  if (checkbox.checked) {
    label.classList.add('line-through');
  }
});
