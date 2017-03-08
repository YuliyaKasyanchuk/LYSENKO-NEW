//
// function breadcrumbs(){
//     sURL = new String;
//     bits = new Object;
//     var x = 0;
//     var stop = 0;
//     var output = "<a href="/"/\"">Home</a>  >  ";
//     sURL = location.href;
//     sURL = sURL.slice(8,sURL.length);
//     chunkStart = sURL.indexOf("/");
//     sURL = sURL.slice(chunkStart+1,sURL.length),
//     while(!stop){
//         chunkStart = sURL.indexOf("/");
//         if (chunkStart != -1){
//             bits[x] = sURL.slice(0,chunkStart),
//             sURL = sURL.slice(chunkStart+1,sURL.length);
//         }else{
//             stop = 1;
//         }
//         x++;
//     }
//     for(var i in bits){
//         output += "<a href="/"";" for=" " output=" " bits=" ">" + bits[i] + "</a>  >  ";
//     }
//     document.write(output + document.title);
// }
//


function bindEventToNavigation(){
    $.each($(".hidden-menu > li > a"), function(index, element){
        $(element).click(function(event){
            breadcrumbStateSaver($(this).attr('href'), $(this).text());
            showBreadCrumb();
        });
    });
}

function breadcrumbStateSaver(link, text) {
    if (typeof (Storage) != "undefined") {
        if (sessionStorage.breadcrumb) {
            var breadcrumb = sessionStorage.breadcrumb;
            sessionStorage.breadcrumb = breadcrumb + " >> <a href='" + link + "'>" + text + "</a>";
        } else {
            sessionStorage.breadcrumb = "<a href='" + link + "'>" + text + "</a>";
        }
    }
}

$(document).ready(function(){
    bindEventToNavigation();
    showBreadCrumb(); //Show the breadcrumb when you arrive on the new page
});