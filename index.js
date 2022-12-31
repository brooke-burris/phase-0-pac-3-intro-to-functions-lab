function shout(string) {
return string.toUpperCase()
}
function whisper(string) {
    return string.toLowerCase()
}
function logShout(string) {
    console.log(shout("hello"))
}
function logWhisper(string) {
    console.log(whisper("HELLO"))
}
function sayHiToHeadphonedRoommate(string) {
   console.log(whisper('HELLO'))
   console.log(shout('hello'))
   return string.toLowerCase() 
} 