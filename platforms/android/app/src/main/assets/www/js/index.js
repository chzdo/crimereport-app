
var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);

    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        this.receivedEvent('deviceready')



      //  StatusBar.styleDefault();
        StatusBar.show();

        console.log(sms);

        window.navigationbar.setUp(true);
        console.log("ready");
        NavigationBar.show();

  app.requestSMSPermission();
        document.addEventListener("backbutton", this.backbtn, false);



    },
    showNetworkDialog: function (respfunc) {
        var message = "Connection Problem! Check Internet connection";
        var title = "Network Error";
        var buttonLabels = "RETRY,EXIT";
        navigator.notification.confirm(message, respfunc, title, buttonLabels);

    }
    ,

    backbtn: function () {
        if (window.localStorage.length > 0){
               var message = "Do you want to log out?";
    
    }else{
                   var message = "Do you want to exit App?";
    
    }
        var title = "Notice";
        var buttonLabels = "Yes,No";
        var response = (i) => {
            if (i == 1) {
            (window.localStorage.length > 0)?  logout(): navigator.app.exitApp();
            } else {
             
            }
        }
      
        navigator.notification.confirm(message, response, title, buttonLabels);
    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {

        console.log('Received Event: ' + id);
    },

    requestSMSPermission: () => {
        var success = (hasPermission) => {
            if (!hasPermission) {
                sms.requestPermission(() => {
                    console.log("granted");
                }, (error) => {
                    console.log("permsion denied")
                })
            }
        }
        var error = (e) => {
            alert(e);
        }
        sms.hasPermission(success, error);
    }

}
app.initialize();


$("#nav_reg").click((e) => {


    document.location = "registration.html";
})

$(".nav_log").click((e) => {


    document.location = "index.html";
})


function logout() {

    window.localStorage.removeItem('id');
    document.location = 'index.html';
}

 