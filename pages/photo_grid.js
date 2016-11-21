/**
 * Handles a click on a photo by showing a popup with more information.
 * @param {event} event The click event.
 */
function onPhotoClick(event) {
  document.getElementById('overlay').style.display = 'block';
  var parent = event.currentTarget;
  var id = parent.id;
  var description = descriptions[id];
  document.getElementById('description').textContent = description;
}

/**
 * Handles a click on the grayed out overlay by closing the popup.
 * @param {event} event The click event.
 */
function onOverlayClick(event) {
  event.preventDefault();
  document.getElementById('overlay').style.display = 'none';
}

var descriptions = {
  'allison': 'Description of Allison',
  'miles': 'Description of Miles',
}