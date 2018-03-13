  var myArray = [
    {type: "PDT", price: 10.10},
    {type: "MAI", price: 12.53},
    {type: "CAR", price: 11.38}
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
  class Price {
    constructor(readonly type: string, readonly price: number) {

    }
  }
  var reformattedArray = myArray.map(obj => {
    return new Price(obj["type"], obj["price"]);
  });
  //console.log("reformattedArray : ", reformattedArray);
  //Culture
  class Culture {
    constructor(readonly field: number, readonly type: string, readonly qty : any) {}
  }
  var reformattedArrayCulture = myArrayCulture.map(obj => {
    return new Culture(obj["field"], obj["type"],obj["qty"]);
  });
  //console.log("reformattedArrayCulture : ",reformattedArrayCulture);
//Question 2
  class UniqueType extends Culture {
    constructor(field: number,type: string,qty : any) { 
      super(field,type,qty); 
    }   
  }
  var uniqueCultureType = reformattedArrayCulture.map(cultureType => cultureType.type).sort().filter(function(elem, index, self) {
    return index === self.indexOf(elem);
  });
  var add = (a, b) => a + b;
  var sortedQtyArray = [];
  for (let _i in uniqueCultureType) {
    let qtyArray = [];
    for (let _j in reformattedArrayCulture) {
      if(reformattedArrayCulture[_j].type === uniqueCultureType[_i]){
        qtyArray.push(Number(reformattedArrayCulture[_j].qty));
      }
    }
    const formattedQtyTotal = {
      'type': uniqueCultureType[_i],
      'total': qtyArray.reduce(add)
    } 
    sortedQtyArray.push(formattedQtyTotal);
  }
  //console.log("sortedQtyArray", sortedQtyArray);

//Question 3
  var  formattedTotalSaleArray = [];
  var priceArray = reformattedArray.sort();  
  var multipliedBy = (a,b) => a * b;
  for (let _k in priceArray){
      let mergedArray = [];
      mergedArray.push(priceArray[_k].price,sortedQtyArray[_k].total);
      const formattedTotalSale = {
        'type': uniqueCultureType[_k],
        'totalSale': mergedArray.reduce(multipliedBy)
      }
      formattedTotalSaleArray.push(formattedTotalSale);
  }
  //console.log("formattedTotalSaleArray",formattedTotalSaleArray);
  
//Question 4 
  
  

  