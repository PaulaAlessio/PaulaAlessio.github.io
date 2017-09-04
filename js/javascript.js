// Hover over Links
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

$(document).ready(function(){
    $('[data-toggle="dropdown"]').tooltip();
});


$(document).ready(function(){
       $('[data-toggle="popover"]').popover();   
});




// This is to show a random sequence of images of different categories

var furniture_imgs = ['beach_chair.jpg', 'bed.jpg', 'bookshelf.jpg', 
    'chair_1.jpg',  'chair_2.jpg', 'chair_3.jpg', 
    'little_table.jpg', 'sofa_bed.jpg', 'storage_furniture.jpg']

var household_imgs = ['clotheshorse.jpg',  'dehumificator.jpg',  'duvet.jpg',  
    'paperbin.jpg',  'pillow.jpg',  'shoerack1.jpg',  'shoerack2.jpg']

var games_imgs = ['anno_domini.jpg', 'carcassone.jpg', 'dominion_intrigue.jpg', 
'puzzle_escher2.jpg', 'puzzle_marocco.jpg', 'puzzle_rizzi.jpg', 'suburbia.jpg',
'back_gammon.jpg', 'dominion_bluetezeit.jpg', 'dominion_thealchimist.jpg',  
'puzzle_gray.jpg', 'puzzle_neuschwanstein.jpg', 'settlers_of_catan.jpg',
'black_stories.jpg', 'dominion_darkages.jpg', 'puzzle_escher1.jpg',
'puzzle_jovendelaperla.jpg', 'puzzle_paris.jpg', 'star_realms.jpg']

var sport_imgs = ['basketball.jpg', 'bike1.jpg',  'bike2.jpg',  
    'bike_bjorn.jpg',  'football.jpg', 'dumbbell.jpg', 'dumbbells.jpg']

var garden_imgs = ['jardineras.jpg', "maceta.jpg"]

var cables_imgs = ['umbrella.jpg', 'USB_extension.jpg', 'USB_extension2.jpg',
'USB_microUSB.jpg', 'USB_miniUSB.jpg', 'USB_socket.jpg', 
'american_adapter.jpg', 'desktop_plug.jpg', 'english_adapter.jpg',
'ethernet_cables.jpg', 'mouse.jpg', 'network_cards.jpg',
'vga.jpg', 'vga2rgb.jpg']



/**
 *  * Returns a random integer between min (inclusive) and max (inclusive)
 *   * Using Math.round() will give you a non-uniform distribution!
 *    */
function getRandomInt(min, max) {
       return Math.floor(Math.random() * (max - min + 1)) + min;
}

function displayNextImage(id, imgs, path) {
    x = getRandomInt(0,imgs.length-1)
    document.getElementById(id).src =  path + imgs[x];
}

function startTimer(id, imgs, path,t) {
    setInterval(function (){ displayNextImage(id, imgs, path)}, t);
}




