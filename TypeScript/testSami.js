var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var myArray = [
    { type: "PDT", price: 10.10 },
    { type: "MAI", price: 12.53 },
    { type: "CAR", price: 11.38 }
];
var myArrayCulture = [
    {
        field: 1,
        type: "PDT",
        qty: "1200"
    },
    {
        field: 2,
        type: "PDT",
        qty: "34"
    },
    {
        field: 1,
        type: "MAI",
        qty: "50"
    },
    {
        field: 1,
        type: "CAR",
        qty: "88"
    }, {
        field: 2,
        type: "CAR",
        qty: "88"
    }
];
//Question 1
//Price
var Price = (function () {
    function Price(type, price) {
        this.type = type;
        this.price = price;
    }
    return Price;
}());
var reformattedArray = myArray.map(function (obj) {
    return new Price(obj["type"], obj["price"]);
});
//console.log("reformattedArray : ", reformattedArray);
//Culture
var Culture = (function () {
    function Culture(field, type, qty) {
        this.field = field;
        this.type = type;
        this.qty = qty;
    }
    return Culture;
}());
var reformattedArrayCulture = myArrayCulture.map(function (obj) {
    return new Culture(obj["field"], obj["type"], obj["qty"]);
});
//console.log("reformattedArrayCulture : ",reformattedArrayCulture);
//Question 2
var UniqueType = (function (_super) {
    __extends(UniqueType, _super);
    function UniqueType(field, type, qty) {
        _super.call(this, field, type, qty);
    }
    return UniqueType;
}(Culture));
var uniqueCultureType = reformattedArrayCulture.map(function (cultureType) { return cultureType.type; }).sort().filter(function (elem, index, self) {
    return index === self.indexOf(elem);
});
var add = function (a, b) { return a + b; };
var sortedQtyArray = [];
for (var _i in uniqueCultureType) {
    var qtyArray = [];
    for (var _j in reformattedArrayCulture) {
        if (reformattedArrayCulture[_j].type === uniqueCultureType[_i]) {
            qtyArray.push(Number(reformattedArrayCulture[_j].qty));
        }
    }
    var formattedQtyTotal = {
        'type': uniqueCultureType[_i],
        'total': qtyArray.reduce(add)
    };
    sortedQtyArray.push(formattedQtyTotal);
}
//console.log("sortedQtyArray", sortedQtyArray);
//Question 3
var formattedTotalSaleArray = [];
var priceArray = reformattedArray.sort();
var multipliedBy = function (a, b) { return a * b; };
for (var _k in priceArray) {
    var mergedArray = [];
    mergedArray.push(priceArray[_k].price, sortedQtyArray[_k].total);
    var formattedTotalSale = {
        'type': uniqueCultureType[_k],
        'totalSale': mergedArray.reduce(multipliedBy)
    };
    formattedTotalSaleArray.push(formattedTotalSale);
}
//console.log("formattedTotalSaleArray",formattedTotalSaleArray);
//Question 4 
