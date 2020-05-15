const Main = require('./src/Main.js')
const Utils = require('./src/Utils.js')

// Phase 1
Utils.Show(Main.ShowLyrics(1));
Utils.Show(Main.ShowLyrics(2));
Utils.Show(Main.ShowLyrics(12));
Utils.Show(Main.ShowLyrics(13));
Utils.Show(Main.ShowLyricsRandom());

Utils.Show(Main.ShowSubject(1));
Utils.Show(Main.ShowSubject(2));
Utils.Show(Main.ShowSubject(3));
Utils.Show(Main.ShowSubject(0));
Utils.Show(Main.ShowSubjectRandom());