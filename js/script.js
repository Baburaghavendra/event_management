// Stop annoying page refresh!
const submit = document.querySelector('#btn-submit'),
form = document.querySelector('#form');

submit.addEventListener('click', e => {
  e.preventDefault();
  form.reset();
}, false);


// ----News&Events-----
$(document).ready(function() {
    $('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');});
    $('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item');$('#products .item').addClass('grid-group-item');});
});