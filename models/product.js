const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');

const getProductsFormFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    });
}
module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save(){
        getProductsFormFile(Product=>{
            Product.push(this);
            fs.writeFile(p,JSON.stringify(Product),err=>{
                console.log(err);
            });
        });
    }

    static fetchAll(cb) {
        getProductsFormFile(cb);
    }
};
