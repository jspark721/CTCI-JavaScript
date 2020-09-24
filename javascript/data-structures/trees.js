//general tree with multiple children

class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  insertChild(value) {
    const newTree = new Tree(value);
    this.children.push(newTree);
    return newTree;
  }
  removeChild(value) {}
}

const myTree1 = new Tree(1);
const myTree2 = myTree1.insertChild(2);
myTree2.insertChild(3);

console.log(myTree1);
console.log(myTree2);

// coding a chatbot question and answer example
const chatBot = {
  question: "Do you want to cook?",
  yes: {
    question: "Do you have eggs?",
    yes: {
      /*question */
    },
    no: {
      /*question */
    },
  },
  no: {
    question: "Do you want to get delivery?",
    yes: {
      question: "Do you want to order pizza?",
      yes: {
        /*question */
      },
      no: {
        /*question */
      },
    },
  },
};

class ChatBotTree {
  constructor(question) {
    this.question = question;
    this.yes = null;
    this.no = null;
  }

  insertChild(question, side) {
    const newTree = new ChatBotTree(question);
    this[side] = newQuestion;
    return newQuestion;
  }
}

//traverse the tree
function traverse(tree) {
  console.log(tree.name);
  tree.children.forEach((child) => {
    if (!child) return;
    traverse(child);
  });
}

const family = {
  name: "Bob",
  children: [
    {
      name: "Elle",
      children: [
        {
          name: "Abby",
          children: [
            {
              name: "Pat",
              children: [],
            },
          ],
        },
      ],
    },
    {
      name: "Alex",
      children: [
        {
          name: "Ash",
          children: [],
        },
      ],
    },
  ],
};

console.log(traverse(family));
