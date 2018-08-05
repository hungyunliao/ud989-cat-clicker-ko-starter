/* ===== MODEL ===== */
var CatList = [
    {
        clickCount: 0,
        name: 'Taddy',
        imgSrc: './img/1413379559_412a540d29_z.jpg',
        nickNames: [
            {nickName: 'A', pre: 'Mr.'},
            {nickName: 'B', pre: 'Sr.'},
            {nickName: 'C', pre: 'Jr.'}
        ]
    },
    {
        clickCount: 0,
        name: 'Bubble',
        imgSrc: './img/22252709_010df3379e_z.jpg',
        nickNames: [
            {nickName: '1', pre: 'Mr.'},
            {nickName: '2', pre: 'Sr.'},
            {nickName: '3', pre: 'Jr.'}
        ]
    }
];

var Cat = function(data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.nickNames = ko.observableArray(data.nickNames);
    
    this.level = ko.computed(function() {
        if (this.clickCount() < 10) {
            return 'Infant';
        } else if (this.clickCount() < 100) {
            return 'Child';
        } else {
            return 'Teen';
        }
    }, this);   // Need to pass 'this' into the function so that it can be used inside the function.
};

/* ===== CONTROLLER =====*/
// This is just like the normal functions in JS
//function ViewModel() {
var ViewModel = function() {
    var self = this; // A pointer pointing to the ViewModel itself which is out of the function scopes.
    
    this.catList = ko.observableArray([]);
    
    CatList.forEach(function(cat) {
        self.catList.push(new Cat(cat));    // Use pointer 'self' here
    });
    
    this.currentCat = ko.observable(this.catList()[0]);
    
    this.setCurrentCat = function(index) {
        self.currentCat(self.catList()[index]);
    };
    
    this.incrementCounter = function() {
        // Approuch 1: the 'this' here is in the 'with' binding context which means that 'this' here == 'this.currentCat()', so here we cannot use this.currentCat().clickCount anymore.
//        this.clickCount(this.clickCount() + 1);
        
        // Approuch 2: use 'self' the ViewModel     
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };
};

ko.applyBindings(new ViewModel());