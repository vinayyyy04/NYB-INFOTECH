const shoppingCart = {
    items: ["Laptop", "Mouse", "Keyboard", "Headphones"],

    [Symbol.iterator]() {
        let index = 0;

        return {
            next: () => {
                if (index < this.items.length) {
                    return {
                        value: this.items[index++],
                        done: false
                    };
                }

                return {
                    value: undefined,
                    done: true
                };
            }
        };
    }
};

// Using the custom iterator
for (const item of shoppingCart) {
    console.log(item);
}