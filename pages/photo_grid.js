/**
 * Handles a click on a photo by showing a popup with more information.
 * @param {event} event The click event.
 */
onPhotoClick: function(event) {
  document.getElementById('overlay').style.display = 'block';
  var parent = event.target;
  var description = parent.getElementsByClassName('description')[0];
  this.currentDescription = description;
  description.style.display = 'block';
},

/**
 * Handles a click on the grayed out overlay by closing the popup.
 * @param {event} event The click event.
 */
onOverlayClick: function(event) {
  event.preventDefault();
  this.currentDescription.style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
}