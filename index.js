// Cтворіть функцію конструктор Продукт з властивостями:
// назва(рядок), ціна(число), кількість(число - залишок на складі)

function Product(name, price, amountValue) {
    this.name = name;
    this.price = price;
    this.amountValue = amountValue;
    if (!new.target) {
        return new Product(name, price, amountValue);
    }
}

// Cтворіть функцію конструктор прототипу Продукту з функціоналом:
// showInfo() - повертає рядок з усіма данними
// setSaleToPrice(value=0) - встановлює знижку і повертає нову ціну
// buyAmountProduct(amountValue) - повертає загальну вартість, якщо є достатня кількість, якщо не має повертаєте - null

function ProductPrototype() {
    this.showInfo = function(){
        return this.name + "\nPrice: " + this.price + "\nAmount available: " + this.amountValue
    }
    this.setDiscountForPrice = function(value) {
        if (this.price - value > 0) {
            return this.price -= value;
        }
        return this.price;
    }
    this.buyAmountProduct = function (value) {
        if (this.amountValue > value) {
            return this.amountValue -= value;
        }
        return null;
    }
};


Product.prototype = new ProductPrototype();

const product1 = new Product('bread', 30, 50);
const product2 = Product('milk', 35, 20);
console.log(product1.showInfo());
console.log(product1.setDiscountForPrice(10));
console.log(product1.buyAmountProduct(51));
console.log(product2.showInfo());
console.log(product2.setDiscountForPrice(17));
console.log(product2.buyAmountProduct(3));