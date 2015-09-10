var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    Greeter.prototype.showGreeting = function () {
        return "Greeting: " + this.greeting;
    };
    return Greeter;
})();
