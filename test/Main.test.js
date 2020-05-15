const assert = require('assert')
const Main = require('./../src/Main.js')

it("Lyrics show 'This is the house that Jack built' with recite 1", () => {
  let result = Main.ShowLyrics(1);
  let expect = "This is the house that Jack built";
  assert.equal(expect, result)
});


it("Lyrics show 'This is the malt that lay in the house that Jack built' with recite 2", () => {
  let result = Main.ShowLyrics(2);
  let expect = "This is the malt that lay in the house that Jack built";
  assert.equal(expect, result)
});

it("Lyrics show all lyrics with recite 12", () => {
  let result = Main.ShowLyrics(12);
  let expect = "This is the horse and the hound and the horn that belonged to the farmer sowing his corn that kept the rooster that crowed in the morn that woke the priest all shaven and shorn that married the man all tattered and torn that kissed the maiden all forlorn that milked the cow with the crumpled horn that tossed the dog that worried the cat that killed the rat that ate the malt that lay in the house that Jack built";
  assert.equal(expect, result)
});

it("Not found lyrics with recite 13", () => {
  let result = Main.ShowLyrics(13);
  let expect = "Not found";
  assert.equal(expect, result)
});

it("Not found lyrics with recite 0", () => {
  let result = Main.ShowLyrics(0);
  let expect = "Not found";
  assert.equal(expect, result)
});

it("Subject show 'this is the house' with recite 1", () => {
  let result = Main.ShowSubject(1);
  let expect = "this is the house";
  assert.equal(expect, result)
});

it("Subject show 'this is the malt and the house' with recite 2", () => {
  let result = Main.ShowSubject(2);
  let expect = "this is the malt and the house";
  assert.equal(expect, result)
});

it("Subject show 'this is the rat, the malt and the house' with recite 3", () => {
  let result = Main.ShowSubject(3);
  let expect = "this is the rat, the malt and the house";
  assert.equal(expect, result)
});

it("Not found with recite 13", () => {
  let result = Main.ShowLyrics(13);
  let expect = "Not found";
  assert.equal(expect, result)
});
