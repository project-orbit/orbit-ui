var count = 1;
var size = 300;
var margin = -150;
var zindex = 99;

var item1 = {
  "name": "Keys",
  "signal": "-45dB"
}

var item2 = {
  "name": "Backpack",
  "signal": "-74dB"
}

var item3 = {
  "name": "Laptop",
  "signal": "-12dB"
}

var items = {
  "1": item1,
  "2": item2,
  "3": item3,
}



/**
*
*  Adds a planet as an HTML element
*
*  Uses a global list of planets right now, which can be 
*  fetched before the page is built. Shitty implementation,
*  maybe I'll change it.
*
**/

function addPlanet(obj) {
  
  var newOrbit = $('<div>')
                          .addClass(`orbit device-orbit orb${count}`)
                          .attr('data-itemid', count);
                          
  var newPlanet = $('<div>')
                          .addClass('planet device-planet')
                          .attr('data-itemid', count);
  
  $(newPlanet).append($('<text>').text(count));
  
  
  
  var speed = Math.floor(Math.random() * 10) + 20;
  
  $(newOrbit).css('animation', `spin-right ${speed}s linear infinite`)
                   .css('margin', `${margin}px 0 0 ${margin}px`)
                   .css('width', `${size}px`)
                   .css('height', `${size}px`)
                   .css('z-index', `${zindex}`);
  
  $(newOrbit).append(newPlanet);
  $('.system').append(newOrbit);
  
  var name = items[count].name;
  var sig = items[count].signal;
  var infoText = $('<text>').text(`${count}. ${name} (${sig})`);
  $(infoText).addClass(`info-text info-text-${count}`);
  $(infoText).attr('data-itemid', count);
  $('.side-nav').append(infoText);
  
  size += 100;
  margin -= 50;
  count += 1;
  zindex -= 1;
}




/**
*
*  Highlight all relevant info about any given planet (item)
*
**/

$('body').on('mouseover', '.device-orbit, .info-text', function() {
  var id = $(this).data('itemid');
  $('*').removeClass('active-tag');
  $(`*[data-itemid=${id}]`).addClass('active-tag');
});


/**
*
*  Remove highlight on mouseout
*
**/

$('body').on('mouseout', '.device-orbit, .info-text', function() {
  $('*').removeClass('active-tag');
});


/**
*  (in progress)
*  More info + object management in pretty modal form
*
**/

$('body').on('click', '.device-orbit, .info-text', function() {
  var item = items[$(this).data('itemid')];
  $('.info-modal').show();
  $('.info-modal .item-name').text(item.name);
});


// Bullshit test inits

addPlanet();
addPlanet();
addPlanet();

