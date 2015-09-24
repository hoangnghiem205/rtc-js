RTC JS
==================

This application is based on elsoufy appengine's WebRTC example ported to Java, it shows how to create an WebRTC
application using a Java server (Jetty).

contructor
 - rtc = new rtc(config)
method
 - rtc.connect()
 - rtc.on(“connect”) - sự kiện khi kết nối server
 - rtc.call(call_id)
 - rtc.on(“call”) - sự kiện khi có cuộc gọi đến 
 - rtc.on(“close”) - khi quá lâu ko có accept 
 - rtc.accept() - nhận cuộc gọi
 - rtc.reject() - từ chối cuộc gọi
 - rtc.disconnect()
 - rtc.on(“disconnect”)
 - rtc.on(“error”)