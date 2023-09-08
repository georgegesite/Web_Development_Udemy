function Employee(title) {
    this.title = title;
}

Employee.prototype.setTitle = function (newtitle) {
    this.title = newtitle;
};

Employee.prototype.getTitle = function () {
    return this.title;
};

// Engineer constructor that inherits from Employee
function Engineer(title, isManager) {
    // Call the Employee constructor with the title
    Employee.call(this, title);

    // Additional properties specific to Engineer
    this.isManager = isManager;
}

// Set up the prototype chain for inheritance
Engineer.prototype = Object.create(Employee.prototype);
Engineer.prototype.constructor = Engineer;

// Additional method specific to Engineer
Engineer.prototype.getIsManager = function () {
    return this.isManager;
};

Engineer.prototype.setIsManager = function (manager) {
    this.isManager = manager;
};