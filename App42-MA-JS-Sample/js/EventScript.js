function trackEvent() {
    var event = new App42Event();      // Initialize "event" As New App42Event.
    var eventName = $("#activityName").val();
    var properties = {
        "UserType": "Free",
        "Product": "App42"
    };
    event.trackEvent(eventName, properties, {
        success: function (object) {
            var eventAuthObj = JSON.parse(object)
            console.log("Success Obj :: ", object);
            alert("Success.");
        },
        error: function (error) {
            console.log("Error Obj :: ", error);
            alert("Error.");
        }
    });
}