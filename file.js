var answer = {
  a: "this",
  y: function () {
    this.ans = "hou";
    console.log(answer.a);
  },
  n: function () {
  this.answer = "hey";
  console.log(answer.a);
  }
}

console.log(answer)

/*
class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right right;
  }
}*/
