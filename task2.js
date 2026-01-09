export class FriendNames {
    name1;
    name2;
    name3;
    constructor(name1, name2, name3) {
      this.name1 = name1;
      this.name2 = name2;
      this.name3 = name3;
    }
  }

const n1 = process.argv[2];
const n2 = process.argv[3];
const n3 = process.argv[4];

const amigosDeEd = new FriendNames(n1, n2, n3);