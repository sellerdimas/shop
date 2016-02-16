Template.tovar.events({
    'click .tovar':function(e, tmpl) {
        e.preventDefault();
    /*    console.log(e.target);
        tmpl.semerko = 'vou';
        console.log(tmpl.semerko);
        console.log(this);
*/
        
        
    }
});
Template.modal1.onRendered(function () {
    $('select').material_select();
})
Template.main.onRendered(function () {
    
  $( '.tovar img' ).hover(
        function() {
            var imgSrc = $(this).attr('src');
            var newImgSrc = 'H' + imgSrc;
            $( this ).attr('src', newImgSrc);
        
        },function() {
            var imgSrc = $(this).attr('src'); 
            imgSrc = imgSrc.slice(1);
            $( this ).attr('src', imgSrc);
  
            
        }
    );
  $('.tovarBlock').click(function (e) {
        var tovarId = $(this).attr('name');

        /*var tovarHeader = this.childNodes[3].childNodes[1].innerText;
        var firma = this.childNodes[3].childNodes[3].innerText;
        var akcii = this.childNodes[3].childNodes[5].childNodes[1].innerText;
        var price = this.childNodes[3].childNodes[5].childNodes[3].innerText;
        var imgSrc = this.childNodes[1].childNodes[1].getAttribute('src');*/
        Session.set('tovarId', tovarId);
      /*  Session.set('firma', firma);
        Session.set('akcii', akcii);
        Session.set('price', price);
        Session.set('imgSrc', imgSrc);*/
        $('#modal1').openModal();

    })

       
});



