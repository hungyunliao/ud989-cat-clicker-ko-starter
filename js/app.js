/* ===== MODEL ===== */
var Cat = function() {
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
};

/* ===== CONTROLLER =====*/
// This is just like the normal functions in JS
//function ViewModel() {
var ViewModel = function() {
    var self = this; // A pointer pointing to the ViewModel itself which is out of the function scopes.
    
    this.currentCat = ko.observable(new Cat());
    
    this.incrementCounter = function() {
        // Approuch 1: the 'this' here is in the 'with' binding context which means that 'this' here == 'this.currentCat()', so here we cannot use this.currentCat().clickCount anymore.
//        this.clickCount(this.clickCount() + 1);
        
        // Approuch 2: use 'self' the ViewModel     
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };
};

ko.applyBindings(new ViewModel());