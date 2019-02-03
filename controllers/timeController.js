exports.getCurrentDate = () => {
    
    let d = Date(Date.now());
    let today = new Date(d);
    
    let date = {
        unix: Date.now(),
        utc: today.toUTCString()
    }
    return date;
}

exports.formatTime = (time) => {
    
    let timeStr = time;
    let dateString = new Date(timeStr);
    let payload = {};
    
    if (/^\d+$/.test(timeStr)){
        
        let unix = parseInt(timeStr);
        let utc = new Date(unix);
        payload.utc = utc.toUTCString();
        payload.unix = unix;
        
    } else if (dateString == 'Invalid Date'){

        payload.error = 'Invalid Date';
        
    } else {
        
        payload.utc = dateString.toUTCString();
        payload.unix = dateString.getTime();
    }

    return payload;
}