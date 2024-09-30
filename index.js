function shout(string){
    string = string.toUpperCase();
    return string;
}

function whisper(string) {
    string = string.toLowerCase();
    return string;
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    if(string == string.toLowerCase()) {
        return "I can't hear you!";
    } else if(string == string.toUpperCase()){
        return "YES INDEED!";
    } else if(string == "Let's have dinner together!"){
        return "I would love to!";
    }
}