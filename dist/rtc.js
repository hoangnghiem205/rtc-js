/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function rtc(config) {

    if (rtc.instance === null) {
        rtc.instance = this;
    } else {
        return rtc.instance;
    }
    
    this.signaling = new WebSocket(config.wsURL);
    this.signals = [];

    this.on = function(signal, operation) {
        this.signals[signal] = operation;
    };

    this.exec = function(event, data) {
        for (var signal in this.signals) {
            if (event === signal) {
                return this.signals[event](this, data);
            }
        }       
        console.log('Event ' + event + ' do not have defined function');
    };

    this.connect = function () {
        console.log('rtc connect');
    };

    this.call = function (call_id) {
        console.log('rtc call ' + call_id);
    };

    this.accept = function() {
        console.log('rtc accept');
    };

    this.reject = function() {
        console.log('rtc reject');
    };

    this.disconnect = function() {
        console.log('rtc disconnect');
    };

    /* signaling listener */

    this.signaling.onmessage = function(event) {
        console.log("req: " + event.data);
        var signal = JSON.parse(event.data);
        rtc.instance.exec(signal.signal, signal);
    };

    this.signaling.onclose = function(event) {
        rtc.instance.exec('close', event);
    };

    this.signaling.onerror = function(event) {
        rtc.instance.exec('error', event);
    };
    
    /* ------------------ */
    
    this.init = function() {
        console.log('init rtc');
    };
    
    this.init();

};

rtc.instance = null;

var error = function (error) {
    console.log('error ' + JSON.stringify(error));
};

var success = function (success) {
    console.log('success ' + JSON.stringify(success));
};