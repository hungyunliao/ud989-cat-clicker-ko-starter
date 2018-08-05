// This is just like the normal functions in JS
//function ViewModel() {
var ViewModel = function() {
    this.clickCount = ko.observable(0);
    this.level = ko.computed(function() {
        if (this.clickCount() < 10) {
            return 'Infant';
        } else if (this.clickCount() < 100) {
            return 'Child';
        } else {
            return 'Teen';
        }
    }, this);   // Need to pass 'this' into the function so that it can be used inside the function.
    this.name = ko.observable('Taddy');
    this.imgSrc = ko.observable('./img/1413379559_412a540d29_z.jpg');
    this.nickNames = ko.observableArray([
        {nickName: 'A', pre: 'Mr.'},
        {nickName: 'B', pre: 'Sr.'},
        {nickName: 'C', pre: 'Jr.'}
    ]);
    
    
    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };
};

ko.applyBindings(new ViewModel());