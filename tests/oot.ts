class vec2 {
    x : number = 0;
    y : number = 0;

    constructor(x? : number, y? : number){
        x = x === undefined ? 0 : x ;
        y = y === undefined ? x : y ;

        this.x = x;
        this.y = y;
    }

    ["+"] (left) {
        return new vec2(this.x + left.x, this.y + left.y);
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

let c : vec2 = a + b;
c.print("c");