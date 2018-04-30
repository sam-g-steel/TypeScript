class vec2 {
    x : number = 0;
    y : number = 0;

    constructor(x? : number, y? : number){
        x = x === undefined ? 0 : x ;
        y = y === undefined ? x : y ;

        this.x = x;
        this.y = y;
    }

    __asterisk(left){
        return new vec2(left.x * this.x, left.y * this.y);
    }

    __minus (left) {
        return new vec2(left.x - this.x, left.y - this.y);
    }

    __plus (left) {
        return new vec2(left.x + this.x, left.y + this.y);
    }

    __slash(left){
        return new vec2(left.x / this.x, left.y / this.y);
    }

    print(name?: string){
        let text ="";
        if(name) text = `${name} = `;
        text += `{ x: ${this.x},  y: ${this.y}}`;
        console.log(text);
    }
}

let a = new vec2(3);
let b = new vec2(1, 2);

a.print("a");
b.print("b");

let c : vec2 = a + b * new vec2(0.5);

c.print("c");

 c = a * b;// new v2(1.1) * new v2(0.5);

c.print("c");

c = new vec2(1) / new vec2(2);

c.print("c");
