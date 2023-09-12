

exports.getDate = function() {
    let date = new Date();
    let options = {
        weekday: "long",
        day:"numeric",
        month:"long"
    }
    return date.toLocaleString("en-US", options)
    
}
exports.getKoDate = function() {
    let date = new Date();
    let options = {
        weekday: "long",
        day:"numeric",
        month:"long"
    }
    return date.toLocaleString("ko-KO", options)
    
}
exports.getDay = function() {
    let date = new Date();
    let options = {
        weekday: "long"        
    }
   return date.toLocaleString("en-US", options)
    
}
