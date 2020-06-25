import './styles.css';

var checkboxes = document.querySelectorAll("input[type='checkbox']");

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    const label = checkbox.labels[0]
    label.classList.toggle('line-through');
  });
});
