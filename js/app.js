var ViewModel = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Taddy');
    this.imgSrc = ko.observable('./img/1413379559_412a540d29_z.jpg');
    
    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };
};

ko.applyBindings(new ViewModel());