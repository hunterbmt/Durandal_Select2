define(['select2','./cssLoader'], function(select2,cssLoader) {
    var ctor = function() {
        this.compositionComplete =  function () {
            cssLoader.loadCss("lib/select2/select2.css");
        };
        this.deactivate =  function () {
            cssLoader.removeModuleCss();
        }
    };
    ctor.prototype.activate = function(settings) {
        this.settings = settings;
        this.select2_opts = settings.select2_option||{};
    };
    ctor.prototype.attached = function(view){
       select2(view).select2(this.select2_opts);
    }
    return ctor;
});