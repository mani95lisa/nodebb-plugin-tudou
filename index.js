(function(module) {
    "use strict";
    var TuDou = {},
        embed = '<div class="video-container"><iframe class="tudou-plugin" src="http://www.tudou.com/programs/view/html5embed.action?type=0&code=$1&lcode=&resourceId=339959839_06_05_99" allowtransparency="true" scrolling="no" border="0" frameborder="0"></iframe></div>';

    TuDou.parse = function(postContent, callback) {
        var	regularUrl = /(?:http?:\/\/)www\.tudou.com\/programs\/view\/([\w]+)\//;

        if (postContent.match(regularUrl)) {
            postContent = postContent.replace(regularUrl, embed);
        }
        callback(null, postContent);
    };

    module.exports = TuDou;
}(module));