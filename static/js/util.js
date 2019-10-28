function getParam(name) {
    if (name == null){
        return;
    }
    var params = window.location.search.substring(1);
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var result = params.match(reg);
    if (result != null){
        return unescape(result[2]);
    }
    return null;
}