/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function Spinner(state) {
    var interval = setInterval(function () {
        $.mobile.loading(state);
        clearInterval(interval);
    }, 1);
}

function toast(message) {
    new $.nd2Toast({// The 'new' keyword is important, otherwise you would overwrite the current toast instance
        message: message, // Required

        ttl: 8000 // optional, time-to-live in ms (default: 3000)
    });
}


function switchPage(page){
    document.location = page;
    //  $.mobile.changePage(page, {reloadPage: true, changeHash: true});
                                                                                
}

