// Smartbotic Service
var SERVICE_UUID = 'FF10';
var SWITCH_UUID = 'FF11';
var DIMMER_UUID = 'FF12';

var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {

        blePeripheral.onWriteRequest(app.didReceiveWriteRequest);
        blePeripheral.onBluetoothStateChange(app.onBluetoothStateChange);

       app.createServiceJSON();
   },
   createServiceJSON: function() {

       var property = blePeripheral.properties;
       var permission = blePeripheral.permissions;

       var flashlightService = {
           uuid: SERVICE_UUID,
           characteristics: [
               {
                   uuid: SWITCH_UUID,
                   properties: property.WRITE | property.READ,
                   permissions: permission.WRITEABLE | permission.READABLE,
                   descriptors: [
                       {
                           uuid: '2901',
                           value: 'Switch'
                       }
                   ]
               }
           ]
       };

       Promise.all([
           blePeripheral.createServiceFromJSON(flashlightService),
           blePeripheral.startAdvertising(flashlightService.uuid, 'Flashlight')
       ]).then(
           function() {document.getElementById("devices").innerHTML = ('Created Advertising Service'); },
          function() { document.getElementById("devices").innerHTML = ('Failed device doesnt support Advertising '); }
       );
   },
   
   onBluetoothStateChange: function(state) {
       console.log('Bluetooth State is', state);
       outputDiv.innerHTML += 'Bluetooth  is ' +  state + '<br/>';
   }
};

app.initialize();
