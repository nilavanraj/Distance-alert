# Distance-alert using Cordova bluetooth

BR1 V1.0.0 <br>
-> The application needs bluetooth and location enabled to run <br>
-> A location permission is requested and should be enabled (API level 18) <br>
-> BluetoothSerial plugin is used in order to find all available devices which 
includes a phone without BLE setup. <br>
-> This requires 15-30 seconds to search. <br>
-> Advertising is triggered when the application starts. <br>
-> A error pops-up when the hardware does not meet the BLE configuration. <br>


# Plugins requried 

cordova-plugin-ble-peripheral <br>
cordova-plugin-bluetoothle <br>
cordova-plugin-bluetooth-serial <br>

![Screenshot 2021-04-05 225844](https://user-images.githubusercontent.com/58332892/113604361-cc17b800-9662-11eb-86cb-67247bff694c.png)

