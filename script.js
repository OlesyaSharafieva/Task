$(document).ready(function AddTask(){
$('#confirm').click(function () {
    const TextDiv = $('input[name=textInput]').val();
    $('input[type="text"]').val('');
    var back = ['blue-task','pink-task','violet-task','blue-task','aqua-task','yellow-task'];
    const rand = back[Math.floor(Math.random() * back.length)];
    $(".textOutput").append(`<div class="${rand}"><div class='check'><input id='checkbox' type='checkbox'></div><p class="line">${TextDiv}</p></div>`);
 });
});
$(function() {  
      $('.red').click(function(){
        const color = $(this).data('color');
        $('input[type=checkbox]:checked')
          .parent()
          .removeClass()
          .addClass('square')
          .addClass(color);
      });
    
        });

$(document).ready(function() {
  $('input').keydown(function(e) {
  if(e.keyCode === 13) {
  const TextDiv = $('input[name=textInput]').val();
    $('input[type="text"]').val('');
    var back = ['blue-task','pink-task','violet-task','blue-task','aqua-task','yellow-task'];
    const rand = back[Math.floor(Math.random() * back.length)];
    $(".textOutput").append(`<div class="${rand}"><div class='check'><input id='checkbox' type='checkbox'></div><p class="line">${TextDiv}</p></div>`);
  }
  });
});
