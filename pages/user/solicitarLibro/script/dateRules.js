// DATES, DATE LIMIT AND DAYS BETWEEN DATES FUNCTIONS


const today = new Date()

//inputs
const rentalStartDate = document.getElementById('rentalStartDate')
const rentalDeadlineDate = document.getElementById('rentalDeadline')
const rentalDuration = document.getElementById('rentalDuration')

//places current date by default and as minimum value onto rentalStartDate 
const todayConverted = today.toISOString().split('T')[0];
rentalStartDate.value = todayConverted
rentalStartDate.min = todayConverted

//sets minimum date as the next day after current date onto rentalDeadline
function updateDeadlineMin () {
    const startDate = new Date(rentalStartDate.value)
    const minDeadline = new Date(startDate)
    minDeadline.setDate(minDeadline.getDate() + 1)

    const minDeadlineConverted = minDeadline.toISOString().split('T')[0]
    rentalDeadlineDate.min = minDeadlineConverted
    rentalDeadlineDate.value = minDeadlineConverted

    //if rentalDeadline has a lower date than rentalStartDate
    if (rentalDeadlineDate.value < minDeadlineConverted){
        rentalDeadlineDate.value = ""
    }
    calculateDays()
}

//sets maximum date as three months from today onto rentalDeadline
function updateMaxDate(){
    const currentDeadline = new Date(rentalStartDate.value)
    const maxDeadline = new Date(currentDeadline)
    maxDeadline.setMonth(maxDeadline.getMonth() + 3)

    const maxDeadlineConverted = maxDeadline.toISOString().split('T')[0]
    rentalDeadlineDate.max = maxDeadlineConverted
    
    calculateDays()
}

//calculates the days between one date and another
const dayInMilisecs = 1000 * 60 * 60 * 24

function calculateDays(){
    const startDate = new Date(rentalStartDate.value)
    const deadlineDate = new Date(rentalDeadlineDate.value)
    if (rentalStartDate.value && rentalDeadlineDate.value){
        //substracts the deadline and the start date in miliseconds
        const differenceInMS = deadlineDate.getTime() - startDate.getTime()
        //converts the substraction in days
        const differenceInDays = Math.round(differenceInMS / dayInMilisecs)

        rentalDuration.value = differenceInDays + " día(s)"

    }
    else{
        rentalDuration.value = ""
    }
}

rentalStartDate.addEventListener("change", updateDeadlineMin)
rentalStartDate.addEventListener("change", updateMaxDate)
rentalStartDate.addEventListener("change", calculateDays)
rentalDeadlineDate.addEventListener("change", calculateDays)

updateDeadlineMin()
updateMaxDate()
calculateDays()

