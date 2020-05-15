const Constants = require('./Constants.js')
const Utils = require('./Utils.js')

const GetLyrics = numbRecite => {   
    let lyrics = [...Constants.lyrics];
    return  lyrics.splice(lyrics.length - numbRecite);
}

const ShowLyrics = numbRecite => numbRecite > Constants.lyrics.length || numbRecite < 1 ? 'Not found' : `This is ${GetLyrics(numbRecite).join(' ')}`;

const ShowLyricsRandom = () => ShowLyrics(Utils.RandomLine(Constants.lyrics.length));

const ShowSubject = numbRecite => {
    return  numbRecite > Constants.lyrics.length || numbRecite < 1 ? 'Not found' : `this is ${GetLyrics(numbRecite).map((lyric,index, lyrics ) => {
        let subStringThat = lyric.slice(0, lyric.indexOf("that")).slice(0, lyric.indexOf("with"));
        var wordAfterLastThe  = subStringThat.slice(subStringThat.lastIndexOf("the")).split(' ')[1];
        return lyric.slice(0, lyric.lastIndexOf(wordAfterLastThe) + wordAfterLastThe.length);
    }).reduce((result, subject, index, subjects)=>
        index !== 0 ? result + `${subjects.length - 1 === index ? ' and ' : ', '}` + subject : subject, '')}`;
}

const ShowSubjectRandom = () => ShowSubject(Utils.RandomLine(Constants.lyrics.length));

module.exports = { ShowLyrics, ShowLyricsRandom, ShowSubject, ShowSubjectRandom}