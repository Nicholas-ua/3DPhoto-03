$(function () {
    //Load the image URLs into an Array.
    var arr = new Array();
    $("#dvImages img").each(function () {
    arr.push($(this).attr("src"));
    });
    //Set the first image URL as source for the Product.
    $("#product1, #product2, #product3").attr("src", arr[0]);
    //Click mode.
    $("#product1").threesixty({ images: arr,
    method: 'click',
    direction: 'forward',
    sensibility: 2
    });
    });