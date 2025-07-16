 document.querySelector('button').addEventListener('click', function(event) {
  event.preventDefault();
  toggleIngredients('ingredientsList');
});
function toggleIngredients(id) {
  const el = document.getElementById(id);
  if (el) {
    el.style.display = el.style.display === 'none' ? 'block' : 'none';
  }
}
// Footer feedback form handler
  document.getElementById('footer-feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('footer-feedback-message').style.display = 'block';
    this.reset();
  });
