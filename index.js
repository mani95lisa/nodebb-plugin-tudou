(function(module) {
    "use strict";
    var TuDou = {},
        embed = '<div class="video-container"><iframe class="tudou-plugin" src="http://www.tudou.com/programs/view/html5embed.action?type=0&code=$2&lcode=&resourceId=339959839_06_05_99" allowtransparency="true" scrolling="no" border="0" frameborder="0"></iframe></div>';

    TuDou.parse = function(postContent, callback) {
        var re = /(<p><a href=")http?:\/\/www\.tudou.com\/programs\/view\/(.*?)\/.*?<\/a><\/p>/gm;
        if (re.test(postContent) !== false) {
            postContent = postContent.replace(re, embed);
        }
        callback(null, postContent);
    };

    module.exports = TuDou;
}(module));