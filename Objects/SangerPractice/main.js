const sangerDB = [];


  const districtInfo = {
        repName: "Elizabeth Sanger",
        name: "5th Congressional District",
        location: "Nashville, TN",
        Time: "2003-present"
  }

  const platFormStatements = {
      Taxes: "lower",
      Jobs: "reduce outsourcing",
      Infrastructure: "fix highways",
      HealthCare: "pro Obama-care",
      Crime_Enforcement: "increase funding"
  }

  const donationForm = {
      url: "https://en.wikipedia.org/wiki/Jim_Cooper",
  }

  const eventCalender = {
      July: "MAD speaking engagement",
      August: "Party meeting",
      Sept: "Titan's Dinner event"
  }

  const volunteerList = [
     {
         name: "",
         address: "",
         email: "",
         PhoneNumber: "",
         Available: "",
         //Activities = ["poling", "phones"]

    }
]
const personalBio = {
    name: "Elizabeth Sanger",
    dateOfBirth: "01-04-62",
    placeOfBirth: "St Louis, MS",
    children: "none",
    parents: "Bret and Margaret Sanger"
}

const imageGallery = {
    headShot: "",
    familyPics: "",
    constituentPics: ""
}

const missionStatement = {
    statement: "we hold these truths to be self-evident"
}

const voterRegistration = {
    url: "",
}

sangerDB.push(districtInfo, platFormStatements, donationForm, eventCalender, volunteerList, personalBio, imageGallery, missionStatement, voterRegistration);
//console.log(sangerDB)
//console.log(sangerDB[0])

function changeDistrictInfo (name, location, Time) {
    sangerDB[0].name = name;
    sangerDB[0].location = location;
    sangerDB[0].Time = Time;
}

changeDistrictInfo("6th", "Cookeville", "Present") //works!
//console.log(sangerDB)

function changePlatform (taxes, jobs, infra, healthcare, crime) {
    sangerDB[1].Taxes = Taxes;
    sangerDB[1].Jobs = Jobs;
    sangerDB[1].Infrastructure = Infrastructure;
    sangerDB[1].HealthCare = HealthCare;
    sangerDB[1].Crime_Enforcement = Crime_Enforcement
}

function changeDonationForm (currentURL) {
    sangerDB[2].url = url;
}

//the below works but order is scrambled in consolelog
function changeEventCal (Month, newEvent) {
    return sangerDB[3][Month] = newEvent;
}
changeEventCal("October", "nothing")

console.log(sangerDB)

//the below actually f-in worked: ...
let findDiv = document.querySelector("#fif")
let addStuff = document.createElement("h3")
addStuff.textContent = sangerDB[0].repName;
findDiv.appendChild(addStuff)

