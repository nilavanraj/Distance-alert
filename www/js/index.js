
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        bluetoothle.initialize(initializeResult, {
        "request": true,
        "statusReceiver": false,
        "restoreKey" : "bluetoothleplugin"
        });
        function initializeResult(data){
         document.getElementById("services").innerHTML =(data.status);
        }
        bluetoothle.requestPermission(function success(){ }, function fail(){ alert("error requestPermission"); });
        bluetoothle.startScan(startScanSuccess, startScanError, { services: [] });
        function startScanSuccess(result){
            if (result.status === "scanStarted") {
               // alert("Scanning for devices (will continue to scan until you select a device)...", "status");
            }
             else if (result.status === "scanResult") {
           document.getElementById("services").innerHTML =('FOUND DEVICE:');
           myFunction();
            function myFunction() {
            var name_id = result.name ;
            var name_rssi = result.rssi ;
            var myEle = document.getElementById(name_id);
            if(myEle){
                 document.getElementById(name_id).innerHTML=name_id +" xx "+name_rssi;
            }else{
                var para = document.createElement("P");
                para.setAttribute("id", name_id);
                para.setAttribute("class", "device");
                para.innerHTML = name_id +" RSSI "+name_rssi;
                document.getElementById("myDIV1").appendChild(para);}

            } } }
        function startScanError(){
            alert("error in scan");
        }
        bluetoothle.isScanning(isScanning);
        function isScanning(data){
        //alert(data.isScanning);
        }
        setInterval(function(){
        bluetoothSerial.discoverUnpaired(function(devices) {
         devices.forEach(function(device) {
            var name_id = device.name ;
            var name_rssi = device.class ;
            var myEle = document.getElementById(name_id+"atb");
            if(myEle){
             document.getElementById(name_id+"atb").innerHTML=name_id +" class "+name_rssi;
            }else{
             var para = document.createElement("P");
             para.setAttribute("id", name_id +"atb");
             para.setAttribute("class", "device");
             para.innerHTML = name_id +" class "+name_rssi;
             document.getElementById("myDIV").appendChild(para);}
            })
        }, function(){alert("error");});  }, 30000);
        },

    // Update DOM on a Received Event
    receivedEvent: function(id) {

    }
};

app.initialize();