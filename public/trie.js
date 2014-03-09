Trie = function(){
  this.characters = {};
};

Trie.prototype.learn = function(word, index){
  var index = index || 0
  var char = word[index];



  if(this.characters[char]){
    this.characters[char].learn(word, index+1);
  } else {
      if(index === word.length){
        this.isWord = true;
      } else {
          this.characters[char] = new Trie();
          this.characters[char].learn(word,index+1);
        }
      }
};

Trie.prototype.getWords = function(words, currentWord){
  currentWord = currentWord || '';
  words = words || [];
  if(this.isWord) {
    words.push(currentWord);
}

$.each(this.characters, function(character, charTrie) {
  if(words.length < 1000) {
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
  var word = word;
  var index = index || 0;
  var node = word[index];
  if(this.characters[node]){
    return this.characters[node].find(word, index+1);
  } else if(index === word.length){
      return this;
    }  else {
        return false;
      }

  // This function will return the node in the trie
  // which corresponds to the end of the passed in word.

  // Be sure to consider what happens if the word is not in this Trie.
};

Trie.prototype.autoComplete = function(prefix){
  var node = this.find(prefix);
  if(!node) {return [];}
  var result = node.getWords([], prefix);
  return node.getWords([], prefix);

  // This function will return all completions
  // for a given prefix.
  // It should use find and getWords.
};
