'use strict';

/* APP-ONE */
new Vue({
    el: "#app-one",
    data: { // Link data on view html
        message: "It's my first app",
        date: Date.now("d/m/YYYY") // Use object Date with method now() "timestamp"
    }
});

