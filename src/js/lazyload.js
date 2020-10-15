jQuery(document).ready(function ($) {
    $("img").lazyload({
        effect: "fadeIn",
        skip_invisible : false
    });
});