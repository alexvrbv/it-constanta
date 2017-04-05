$(function() {
    
    var items_quantity = 0;
    
    //Ajust content and panel height
    $(window).on("load resize", function() {
		$(".panel").css({'height':($(window).height())+'px'});
		$(".content").css({'height':($(window).height())+'px'});
	});	

    //Open and close side panel
    $(".button-open-close-panel").click(function() {
        $(".content").toggleClass("half", 'slow');
        $(".panel").toggle('slow');
        if ($(this).val() == "Open menu") {
            $(this).val("Close menu");
            } else {
            $(this).val("Open menu");
         }
    });
    
    //Add item and left paragraph
    $(".button-add-item").click(function() {
        items_quantity++;
        $("#items").append( "<div class='item item-"+items_quantity+"'>\
        <p>Item #"+items_quantity+"</p>\
        <textarea class='txtArea item-"+items_quantity+"' rows='4' cols='50'></textarea>\
        <div class='clr'></div>\
        <input type='button' value='Remove item' name='btn' class='button-remove-item item-"+items_quantity+"'>\
        </div>" );
        $(".content").append("<p class='item-content item-"+items_quantity+"'></p>");
    });
    
    //Text input values dynamically adds to content
    $( "#wrapper" ).on( "change keyup paste", ".txtArea", function( event ) {
        var currentVal = $(this).val();
        var itemClass = $(this).attr("class").replace('txtArea ', '');
        var itemContainer = $("p."+itemClass);
        $(itemContainer).empty();
        $(itemContainer).append(currentVal);
    });
    
     //Click on remove button
    $( "#wrapper" ).on( "click", ".button-remove-item", function( event ) {
        //Change button text and class
        if ($(this).val() == "Remove item") {
            $(this).val("Restore");
            $(this).addClass("restore");
            } else {
            $(this).val("Remove item");
            $(this).removeClass("restore");
        }
        var itemClass = $(this).attr("class").replace('button-remove-item ', '').replace(' restore', '');
        var itemTextarea = $("textarea."+itemClass);
        $(itemTextarea).val('');
        $(itemTextarea).prop('disabled', true);
        var itemContainer = $("p."+itemClass);
        $(itemContainer).css('display', 'none');
    });
    
     //Click on restore button
    $( "#wrapper" ).on( "click", ".restore", function( event ) {
        console.log("restore");
        var itemClass = $(this).attr("class").replace('button-remove-item ', '').replace(' restore', '');
        console.log(itemClass);
        var itemContainer = $("p."+itemClass);
        $(itemContainer).css('display', 'block');
        var itemTextarea = $("textarea."+itemClass);
         $(itemTextarea).prop('disabled', false);
        $(itemTextarea).val(itemContainer.text());
    });    
    
});
 