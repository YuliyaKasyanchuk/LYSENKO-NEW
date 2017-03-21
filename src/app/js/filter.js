
$(document).ready(function() {

    $('.hidden-menu li a').click(function () {

        $('.hidden-menu .item-masonry sizer4').removeClass('selected');
        $(this).parent('li').addClass('selected');

        imgWidth = '200px';
        thisItem = $(this).attr('rel');

        if (thisItem != "all") {

            $('#gallery .item-masonry sizer4[rel=' + thisItem + ']').stop()
                .animate({
                    'width': imgWidth,
                    'opacity': 1,
                    'marginRight': '.5em',
                    'marginLeft': '.5em'
                });

            $('#gallery .item-masonry sizer4[rel!=' + thisItem + ']').stop()
                .animate({
                    'width': 0,
                    'opacity': 0,
                    'marginRight': 0,
                    'marginLeft': 0
                });
        } else {

            $('#gallery .-masonry sizer4').stop()
                .animate({
                    'opacity': 1,
                    'width': imgWidth,
                    'marginRight': '.5em',
                    'marginLeft': '.5em'
                });
        }
    })

    $('.item-masonry sizer4 li img').animate({'opacity': 0.5}).hover(function () {
        $(this).animate({'opacity': 1});
    }, function () {
        $(this).animate({'opacity': 0.5});







    });




    /* initialize shuffle plugin */
    var $grid = $('#gallery')


    //noinspection JSAnnotator
    $grid.shuffle({
        itemSelector: '.item'

    });

    $('#filter a').click(function (e) {
        e.preventDefault();

// set active class
        $('#filter a').removeClass('active');
        $(this).addClass('active');

// get group name from clicked item
        var groupName = $(this).attr('data-group');

// reshuffle grid
        $grid.shuffle('shuffle', groupName );
    });




});




