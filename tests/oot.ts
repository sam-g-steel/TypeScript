class vec2 {
    x : number = 0;
    y : number = 0;

    constructor(x? : number, y? : number){
        x = x === undefined ? 0 : x ;
        y = y === undefined ? x : y ;

        this.x = x;
        this.y = y;
    }

    __asterisk(right){
        return new vec2(this.x * right.x, this.y * right.y);
    }

    __minus (right) {
        return new vec2(this.x - right.x, this.y - right.y);
    }

    __plus (right) {
        return new vec2(this.x + right.x, this.y + right.y);
    }

    __slash(right){
        return new vec2(this.x / right.x, this.y / right.y);
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