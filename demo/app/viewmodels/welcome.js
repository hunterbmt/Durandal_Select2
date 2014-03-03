define(['plugins/widget','knockout'],function(widget,ko) {
    var ctor = function () {
        this.select2_items = ko.observableArray([{name:'test',value:'test1'}]);
        this.my_select2_options = {
            width: '240px'
        }
    };
    ctor.prototype.add_opts = function(){
        this.select2_items.push({name:'new_options',value:'new'});
    }
    widget.registerKind('select2');
    return ctor;
});