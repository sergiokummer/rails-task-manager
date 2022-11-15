//= link_tree ../images
//= link_directory ../stylesheets .css
//= link_tree ../../javascript .js
//= link_tree ../../../vendor/javascript .js
document.querySelector( "#retrobg-sun" ).onclick = () => {
  document.querySelector( "#retrobg" ).classList.toggle( "retrobg-shutdown" );
};
