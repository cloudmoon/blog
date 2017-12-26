import '../sass/style_blog.scss';

$(document).ready(function () {
  $('.ui.dropdown').dropdown()

  $('.post-cotent .avatar-link').popup({
    inline: true,
    position: 'bottom right',
    lastResort: 'bottom right'
  })
})