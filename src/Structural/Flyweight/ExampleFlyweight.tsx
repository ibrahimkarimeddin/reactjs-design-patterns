type Flyweight = {
    color: string;
    size: number;
};

class ShapeFlyweightFactory {
    private flyweights: { [key: string]: Flyweight } = {};

    getFlyweight(color: string, size: number): Flyweight {
        const key = `${color}-${size}`;
        if (!this.flyweights[key]) {
            this.flyweights[key] = { color, size };
        }
        return this.flyweights[key];
    }
}

const shapeFlyweightFactory = new ShapeFlyweightFactory();
