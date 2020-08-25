//autocomplete feature using a trie prefix tree data structure

//create a class for a typical node in our Trie
class PrefixTreeNode {
  constructor(value) {
    this.children = {};
    this.endWord = null;
    this.value = value;
  }
}
//every node can contain any subsequent letter which will be a key in children
class PrefixTree extends PrefixTreeNode {
  constructor() {
    super(null);
  }
  //the addWord method essentially looks at each character in the string and checks to see if that node has been created yet.
  //if not, we create a node for that character
  //then at the end of the string, we set the endWord property
  addWord(string) {
    const addWordHelper = (node, str) => {
      if (!node.chidren[str[0]]) {
        node.children[str[0]] = new PrefixTreeNode(str[0]);
        if (str.length === 1) {
          node.children[str[0]].endWord = 1;
        }
      }
      if (str.length > 1) {
        addWordHelper(node.children[str[0]], str.slice(1));
      }
    };
    addWordHelper(this, string);
  }

  //create a method to predict words -- that is to say, given a string of characters, return all words in our tree that begin with that string
  predictWord(string) {
    let getRemainingTree = (string, tree) => {
      let node = tree;
      while (string) {
        node = node.children[string[0]];
        string = string.substr(1);
      }
      return node;
    };

    let allWords = [];

    let allWordsHelper = (stringSoFar, tree) => {
      for (let k in tree.children) {
        const child = tree.children[k];
        let newString = stringSoFar + child.value;
        if (child.endWord) {
          allWords.push(newString);
        }
        allWordsHelper(newString, child);
      }
    };

    let remainingTree = getRemainingTree(string, this);
    if (remainingTree) {
      allWordsHelper(string, remainingTree);
    }

    return allWords;
  }

  logAllWords() {
    console.log("-------ALL WORDS IN PREFIX TREE---------");
    console.log(this.predictWord(""));
  }
}
