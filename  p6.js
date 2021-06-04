/*
    CIT 281: Project 6
    Meagan Kiefer
*/

class Shape {
    constructor(sides = []) {
        this.sides = sides;
    }
    perimeter = () => this.sides.length > 1 ? this.sides.reduce((accumulator, currentValue) => accumulator + currentValue) : 0;
}
 
//console.log(new Shape([5, 10]).perimeter());  // 15
//console.log(new Shape([1, 2, 3, 4, 5]).perimeter()); // 15
//console.log(new Shape().perimeter()); // 0

class Rectangle extends Shape {
    constructor(length = 0, width = 0, sides = [length, width, length, width]) {
        super(sides);
        this.length = length;
        this.width = width;
    }
    area = () => this.length * this.width;
}

//console.log(new Rectangle(4, 4).perimeter());  // 16
//console.log(new Rectangle(4, 4).area());  // 16
//console.log(new Rectangle(5, 5).perimeter()); // 20
//console.log(new Rectangle(5, 5).area()); // 25
//console.log(new Rectangle().perimeter()); // 0
//console.log(new Rectangle().area()); // 0

class Triangle extends Shape {
    constructor(sideA = 0, sideB = 0, sideC = 0, sides = [sideA, sideB, sideC]) {
        super(sides);
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }
    
    area = () => {
        let s = (this.sideA + this.sideB + this.sideC)/2;
        //console.log(s);
        return Math.sqrt(s *(s - this.sideA)*(s - this.sideB)*(s - this.sideC));
    }
}

//console.log(new Triangle(3, 4, 5).perimeter());  // 12
//console.log(new Triangle(3, 4, 5).area());  // 6
//console.log(new Triangle().perimeter()); // 0
//console.log(new Triangle().area()); // 0

const data = [ [3, 4], [5, 5], [3, 4, 5], [10], [] ];

for (const item of data) {

} 
let shape = null;
data.map( (item) => {  
    switch(item.length) {
        case 2:
            shape = new Rectangle(...item); 
            if (item[0] == item[1]) {console.log(`Square with sides ${item.toString()} has perimeter of ${shape.perimeter()} and area of ${shape.area()}`);}
            else {console.log(`Rectangle with sides ${item.toString()} has perimeter of ${shape.perimeter()} and area of ${shape.area()}`);}
            break;
        case 3:
            shape = new Triangle(...item);
            console.log(`Triangle with sides ${item.toString()} has perimeter of ${shape.perimeter()} and area of ${shape.area()}`);
            break;
        default:
            console.log(`Shape with ${item.length} side unsupported`);
            break; 
    }
   
})