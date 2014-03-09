Trie = function(){
  this.characters = {};
};

Trie.prototype.learn = function(word, index){
  index = index || 0
  char = word[index];
  // This function should add the given word,
  // starting from the given index,
  // to this Trie.

  // It will be recursive.  It will tell
  // the correct child of this Trie to learn the word
  // starting from a later index.

  // Consider what the learn function should do
  // when it reaches the end of the word?
  // A word does not necessarily end at a leaf.
  // You must mark nodes which are the ends of words,
  // so that the words can be reconstructed later.
};

Trie.prototype.getWords = function(words, currentWord){
  currentWord = currentWord || '';
  words = words || [];
  if(this.isWord) {
  words.push(currentWord);
}

$.each(this.characters, function(character, charTrie) {
  if(words.length < 100) {
      words.concat(charTrie.getWords(words, currentWord + character));
  }
});

return words;

  // This function will return all the words which are
  // contained in this Trie.
  // it will use currentWord as a prefix,
  // since a Trie doesn't know about its parents.
};

Trie.prototype.find = function(word, index){
  index = index || 0;
  if(word.length <= index){
    return this;
  }
  if(this.character[word[index]] === null) {
    return false;
  }
  return this.characters[word[index]].find(word, index +1);

  // This function will return the node in the trie
  // which corresponds to the end of the passed in word.

  // Be sure to consider what happens if the word is not in this Trie.
};

Trie.prototype.autoComplete = function(prefix){
  var complete = this.find(prefix);
  if(complete) {
    return complete.getWords([], prefix);

  }
  return [];

  // This function will return all completions
  // for a given prefix.
  // It should use find and getWords.
};
