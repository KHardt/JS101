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

sangerDB.push(districtInfo, platFormStatements);
console.log(sangerDB)
console.log(sangerDB[0])

