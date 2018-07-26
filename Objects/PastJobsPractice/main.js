//since the defaults are set to false not sure why I would specify that
const AllMeds = Object.create({}, {
    business: {
        enumerable: true,
        value: "AllMeds Inc"
    },
    employmentStart: {
        enumerable: true,
        value: "08-01-2008"
    },
    employmentEnd: {
        enumerable: true,
        value: "02-01-2018"
    }
})

const ChildFamily = Object.create({}, {
    business: {
        enumerable: true,
        value: "Child and Family Services"
    },
    employmentStart: {
        enumerable: true,
        configurable: true,
        value: "11-1-94"
    },
    employmentEnd: {
        writable: true,
        enumerable: true,
        value: "9-01-2004"
    }
})


//the below will make a simple object but not object.create I think
function JobMaker(business, employmentStart, employmentEnd, enumerable) {
    this.business= business;
    this.employmentStart= employmentStart;
    this.employmentEnd= employmentEnd;
    this.enumerable= enumerable;

}

let kroger = new JobMaker("Kroger", "a long time ago", "in a galaxy far far away", true, false, true)

console.log(kroger)
