

module.exports.bootstrapLoader = function () {
    var loader = function () { }
    loader.prototype.init = function (context) { }
    loader.prototype.bundleEnd = function (context) {
        context.source.addContent(`FuseBox.import("fuse-box-aurelia-loader")`);
        context.source.addContent(`FuseBox.import("aurelia-bootstrapper")`);
        context.source.addContent(`window.FUSEBOX_AURELIA_LOADER_RELOAD = true;`);
        context.source.addContent(`window.FUSEBOX_AURELIA_LOADER_LOGGING = true;`);
    }
    return new loader();
}