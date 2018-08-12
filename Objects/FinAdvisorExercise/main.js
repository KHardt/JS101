//financial advisor practice object:

const finAdvisor = Object.create(null, {
    company: {
        value: "Alliance",
        writable: true,
        enumerable: true,
    },

    speciality: {
        value: "401K",
        writable: true,
        enumerable: true,
    },

    name: {
        value: "Deborah Long",
        writable: true //tested security feature by setting to false
    },

    portfolio: {
        value: [
            {
                stock: "Amz",
                price: 34,
                quantity: 65
            }
        ],
        enumerable: true
    },

    worth: {
            value: function() {
            let netWorth = 0;
            for (let i =0; i < this.portfolio.length; i++) {
            let stockWorth = this.portfolio[i].quantity * this.portfolio[i].price;
            netWorth += stockWorth
        }
        return netWorth
    },
        enumerable: true,
        writable: true
    },

    purchase: {
        enumerable: false,
        value: function (stock, price, quantity) {
            let purchaseStock = {
                stock: stock,
                price: price,
                quantity: quantity,
               
        }
        finAdvisor.portfolio.push(purchaseStock)
    }
},



//don't really understand Meg's logic on the sell function. Since OR statement based on price or quantity could pick the first match regardless of stock name. Unless Im missing something which i prob am. Went with Will's recommendation which is to target the stock name- then make the calculations. Array method I chose is irrelevant
    sell: {
        value: function (stock, price, quantity) {
            let portfolioArray = finAdvisor.portfolio;
            portfolioArray.forEach(function (element) {
                if (stock === element.stock) {
                    element.price -= price;
                    element.quantity -= quantity;
                }
            })
        }
    },
    /*
    sell: {
        value: function (stock, price, quantity) {
             let removeStock =  {
                stock: stock,
                quantity: quantity,
                price: price
                
            }
            }
            finAdvisor.portfolio.slice(removeStock)
        
        
        }*/
    
     
    });


//console.log(finAdvisor)
finAdvisor.name ="Brenda Long";//apparently Deborah is incorrect!
//console.log(finAdvisor.name)

finAdvisor.purchase("TMZ", 25, 400); //purchase updates portforlio
console.log(finAdvisor.portfolio)

finAdvisor.sell("TMZ", 25, 400)
console.log(finAdvisor.worth())

/*
const addStuff = document.querySelector("#advisorInfo")
const testPage = document.createElement("article");
addStuff.appendChild(testPage) */

