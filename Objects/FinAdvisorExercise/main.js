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
        enumerable: true
    },

    portfolio: {
        value: ["Amazon", "Exxon", "Google"],
        enumerable: false
    },

    worth: {
        value: function () {
            const netWorth = "";
            for (let i =0; i < portfolio.value.length; i++)
            netWorth = portfolio.value.length[i];
        }
    },

    purchase: {
        enumerable: false,
        purchaseStuff: function (stock, price, quantity) {
            finAdvisor.portfolio.value ++;
        }
    },

    sell: {
        enumerable: false,
        sellStuff: function (stock, price, quantity) {
        finAdvisor.portfolio.value ++;
        }
    }



    
}  
)

console.log(finAdvisor.company)

test = document.createElement("div1")
test.appendChild()

