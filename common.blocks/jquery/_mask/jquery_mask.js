modules.define('jquery_mask', ['jquery'], function (provide, $) {
    window.jQuery = $;
    /* borschik:include:../../node_modules/jquery-mask-plugin/dist/jquery.mask.min.js */;
    provide($);
});