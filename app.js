window.onload = function() {
  // today date
  const dateTitle = document.querySelector('.cover-date');
  const utc = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
  dateTitle.textContent = utc;

  
}