export class Headboards {
    static solteiro = new Headboards('Solteiro');
    static solteirao = new Headboards('Solteirão');
    static casal = new Headboards('Casal');
    static queen = new Headboards('Queen');
    static king = new Headboards('King');
    static superking = new Headboards('Super King');

    constructor(name){
        this.name = name;
    }

    toString(){
        return `Direction.${this.name}`;
    }
}



// class Direction {
//     static Up = new Direction('Up');
//     static Down = new Direction('Down');
//     static Left = new Direction('Left');
//     static Right = new Direction('Right');
  
//     constructor(name) {
//       this.name = name;
//     }
//     toString() {
//       return `Direction.${this.name}`;
//     }
//   }