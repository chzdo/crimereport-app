
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
           
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
      this.receivedEvent('deviceready')
     document.addEventListener("volumeupbutton", this.volumeup, false);
     document.addEventListener("backbutton", this.backbtn, false);
      StatusBar.styleDefault();
        StatusBar.show();
     var autoHideNavigationBar = false;
     
	window.navigationbar.setUp(true);
       console.log("ready");
       NavigationBar.show();
       
    $.post("http://192.168.43.156/crime_app/user/",data,(data)=>{alert("p"+ data)})


    },
    
    volumeup: function() { 
        alert('pressed');
        },
 backbtn: function() { 
        alert('backbtn');
        },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
         
      //  $("#main").empty();
         
       
     //    $("#main").removeAttr('hidden');
     //   var parentElement = document.getElementById(id);
     //   var listeningElement = parentElement.querySelector('.listening');
        //var receivedElement = parentElement.querySelector('.received');

       // listeningElement.setAttribute('style', 'display:none;');
    //    receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    
   seLocalStorage : function () { 
        document.getElementById('in').value = 'hello';
} ,
};

app.initialize();


$("#nav_reg").click((e)=>{
 

document.location = "registration.html";
})

$(".nav_log").click((e)=>{
 

document.location = "index.html";
})