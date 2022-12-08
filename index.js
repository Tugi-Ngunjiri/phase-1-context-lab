/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}



function  createGeneralManager(){
    const Title = "GeneralManager";
    console.log("GeneralManager");
    }
    
    
    function createPay(){
    const Pay = "50,000 on 15 th May 2022";
    console.log("50,000 on 15 th May 2022");
    }
    
    
    function createTimeInEvent(){
    const TimeinEvents = "Beginning of work Day at 1.00pm";
    console.log("Beginning of Work Day at 1.00pm to 6.00pm");
    }
    
    
    function createTimeOutEvent(){
    const TimeOutEvents = "End of Day; at 6.00pm"
    console.log("End of Working Day at 6.00pm")
    }
    
    function DebtRecord(){
    const DebtToPay  = "Debt of 20.000 to pay by 15 th April 2022"
    console.log("Debt of 20,00 to pay before 15 th April 2022")
    
    }
     function  createWorkHours(){
    const HoursWorked = "Worked for 5hours"
    console.log("5hoursworked")
    
     }
    
     function createWagesEarned(){
    const WagesEarned = " Wages between 50,000k to 100,000k"
    console.log("Wages between 50,000k and 100,000k ")
     }
    
     function createAllWagesForGeoffery(){
    const allWages = "Up to 100,000"
    console.log("up to 100,000k")
     }
     function createFindingEmployeeByFirstName(){
        const  FindingEmployeeByFirstName ="That is Geoffery";
        console.log("Thast is Geoffery")
  
        }
     function CreatePayRoll(){
    const PayRoll = "100,000k"
    console.log("100,00k")
      }