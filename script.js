const timeframes = document.querySelector('.timeframes')
const daily = document.querySelector('.time-daily')
const weekly = document.querySelector('.time-weekly')
const monthly = document.querySelector('.time-monthly')
const gridWorkHours = document.getElementById('grid-work-hours')
const gridWorkLast = document.getElementById('grid-work-last')

const gridPlayHours = document.getElementById('grid-play-hours')
const gridPlayLast = document.getElementById('grid-play-last')

const gridStudyHours = document.getElementById('grid-study-hours')
const gridStudyLast = document.getElementById('grid-study-last')
const gridExerciseHours = document.getElementById('grid-exercise-hours')
const gridExerciseLast = document.getElementById('grid-exercise-last')
const gridSocialHours = document.getElementById('grid-social-hours')
const gridSocialLast = document.getElementById('grid-social-last')
const gridSelfCareHours = document.getElementById('grid-selfCare-hours')
const gridSelfCareLast = document.getElementById('grid-selfCare-last')

// fetching JSON file
// fetch('./data.json')
// 	.then((response) => response.json())
// 	.then((data) => console.log(data))

function setDailyActive() {
	const subgrid = document.getElementById('subgrid')
	const grid2 = document.querySelector('grid-item-2')
	if (!daily.classList.contains('active')) {
		daily.classList.add('active')
		weekly.classList.remove('active')
		monthly.classList.remove('active')
	}
	fetch('./data.json')
		.then((res) => res.json())
		.then((data) => {
			console.log(data[5])
			setDaily(data)
		})
}

function setDaily(data) {
	console.log('sammoo')
	console.log(data[1].timeframes.daily.previous)

	// WORK
	if (data[0].timeframes.daily.current != 1) {
		gridWorkHours.textContent = `
    ${data[0].timeframes.daily.current} hrs
  `
	} else {
		gridWorkHours.textContent = `
    ${data[0].timeframes.daily.current} hr
  `
	}
	if (data[0].timeframes.daily.previous != 1) {
		gridWorkLast.textContent = `Yesterday - 
    ${data[0].timeframes.daily.previous} hrs
  `
	} else {
		gridWorkLast.textContent = `Yesterday - 
    ${data[0].timeframes.daily.previous} hr
  `
	}
	// PLAY
	if (data[1].timeframes.daily.current != 1) {
		gridPlayHours.textContent = `
    ${data[1].timeframes.daily.current} hrs
  `
	} else {
		gridPlayHours.textContent = `
    ${data[1].timeframes.daily.current} hr
  `
	}
	if (data[1].timeframes.daily.previous != 1) {
		gridPlayLast.textContent = `Yesterday - 
    ${data[1].timeframes.daily.previous} hrs
  `
	} else {
		gridPlayLast.textContent = `Yesterday - 
    ${data[1].timeframes.daily.previous} hr
  `
	}
	// STUDY
	if (data[2].timeframes.daily.current != 1) {
		gridStudyHours.textContent = `
    ${data[2].timeframes.daily.current} hrs
  `
	} else {
		gridStudyHours.textContent = `
    ${data[2].timeframes.daily.current} hr
  `
	}
	if (data[2].timeframes.daily.previous != 1) {
		gridStudyLast.textContent = `Yesterday - 
    ${data[2].timeframes.daily.previous} hrs
  `
	} else {
		gridStudyLast.textContent = `Yesterday - 
    ${data[2].timeframes.daily.previous} hr
  `
	}
	// EXERCISE
	if (data[3].timeframes.daily.current != 1) {
		gridExerciseHours.textContent = `
    ${data[3].timeframes.daily.current} hrs
  `
	} else {
		gridExerciseHours.textContent = `
    ${data[3].timeframes.daily.current} hr
  `
	}
	if (data[3].timeframes.daily.previous != 1) {
		gridExerciseLast.textContent = `Yesterday - 
    ${data[3].timeframes.daily.previous} hrs
  `
	} else {
		gridExerciseLast.textContent = `Yesterday - 
    ${data[3].timeframes.daily.previous} hr
  `
	}
	// SOCIAL
	if (data[4].timeframes.daily.current != 1) {
		gridSocialHours.textContent = `
    ${data[4].timeframes.daily.current} hrs
  `
	} else {
		gridSocialHours.textContent = `
    ${data[4].timeframes.daily.current} hr
  `
	}
	if (data[4].timeframes.daily.previous != 1) {
		gridSocialLast.textContent = `Yesterday - 
    ${data[4].timeframes.daily.previous} hrs
  `
	} else {
		gridSocialLast.textContent = `Yesterday - 
    ${data[4].timeframes.daily.previous} hr
  `
	}
	// SELFCARE
	if (data[5].timeframes.daily.current != 1) {
		gridSelfCareHours.textContent = `
    ${data[5].timeframes.daily.current} hrs
  `
	} else {
		gridSelfCareHours.textContent = `
    ${data[5].timeframes.daily.current} hr
  `
	}
	if (data[5].timeframes.daily.previous != 1) {
		gridSelfCareLast.textContent = `Yesterday - 
    ${data[5].timeframes.daily.previous} hrs
  `
	} else {
		gridSelfCareLast.textContent = `Yesterday - 
    ${data[5].timeframes.daily.previous} hr
  `
	}
}

function setWeeklyActive() {
	const subgrid = document.getElementById('subgrid')
	const grid2 = document.querySelector('grid-item-2')
	if (!weekly.classList.contains('active')) {
		daily.classList.remove('active')
		weekly.classList.add('active')
		monthly.classList.remove('active')
	}
	fetch('./data.json')
		.then((res) => res.json())
		.then((data) => {
			console.log(data[0])
			setWeekly(data)
		})
}

// WEEKLY

function setWeekly(data) {
	console.log('sammoog')
	console.log(data[1].timeframes.weekly.previous)

	// WORK
	if (data[0].timeframes.weekly.current != 1) {
		gridWorkHours.textContent = `
    ${data[0].timeframes.weekly.current} hrs
  `
	} else {
		gridWorkHours.textContent = `
    ${data[0].timeframes.weekly.current} hr
  `
	}
	if (data[0].timeframes.weekly.previous != 1) {
		gridWorkLast.textContent = `Last Week - 
    ${data[0].timeframes.weekly.previous} hrs
  `
	} else {
		gridWorkLast.textContent = `Last Week - 
    ${data[0].timeframes.weekly.previous} hr
  `
	}
	// PLAY
	if (data[1].timeframes.weekly.current != 1) {
		gridPlayHours.textContent = `
    ${data[1].timeframes.weekly.current} hrs
  `
	} else {
		gridPlayHours.textContent = `
    ${data[1].timeframes.weekly.current} hr
  `
	}
	if (data[1].timeframes.weekly.previous != 1) {
		gridPlayLast.textContent = `Last Week - 
    ${data[1].timeframes.weekly.previous} hrs
  `
	} else {
		gridPlayLast.textContent = `Last Week - 
    ${data[1].timeframes.weekly.previous} hr
  `
	}
	// STUDY
	if (data[2].timeframes.weekly.current != 1) {
		gridStudyHours.textContent = `
    ${data[2].timeframes.weekly.current} hrs
  `
	} else {
		gridStudyHours.textContent = `
    ${data[2].timeframes.weekly.current} hr
  `
	}
	if (data[2].timeframes.weekly.previous != 1) {
		gridStudyLast.textContent = `Last Week - 
    ${data[2].timeframes.weekly.previous} hrs
  `
	} else {
		gridStudyLast.textContent = `Last Week - 
    ${data[2].timeframes.weekly.previous} hr
  `
	}
	// EXERCISE
	if (data[3].timeframes.weekly.current != 1) {
		gridExerciseHours.textContent = `
    ${data[3].timeframes.weekly.current} hrs
  `
	} else {
		gridExerciseHours.textContent = `
    ${data[3].timeframes.weekly.current} hr
  `
	}
	if (data[3].timeframes.weekly.previous != 1) {
		gridExerciseLast.textContent = `Last Week - 
    ${data[3].timeframes.weekly.previous} hrs
  `
	} else {
		gridExerciseLast.textContent = `Last Week - 
    ${data[3].timeframes.weekly.previous} hr
  `
	}
	// SOCIAL
	if (data[4].timeframes.weekly.current != 1) {
		gridSocialHours.textContent = `
    ${data[4].timeframes.weekly.current} hrs
  `
	} else {
		gridSocialHours.textContent = `
    ${data[4].timeframes.weekly.current} hr
  `
	}
	if (data[4].timeframes.weekly.previous != 1) {
		gridSocialLast.textContent = `Last Week - 
    ${data[4].timeframes.weekly.previous} hrs
  `
	} else {
		gridSocialLast.textContent = `Last Week - 
    ${data[4].timeframes.weekly.previous} hr
  `
	}
	// SELFCARE
	if (data[5].timeframes.weekly.current != 1) {
		gridSelfCareHours.textContent = `
    ${data[5].timeframes.weekly.current} hrs
  `
	} else {
		gridSelfCareHours.textContent = `
    ${data[5].timeframes.weekly.current} hr
  `
	}
	if (data[5].timeframes.weekly.previous != 1) {
		gridSelfCareLast.textContent = `Last Week - 
    ${data[5].timeframes.weekly.previous} hrs
  `
	} else {
		gridSelfCareLast.textContent = `Last Week - 
    ${data[5].timeframes.weekly.previous} hr
  `
	}
}

// MONTHLY
function setMonthlyActive() {
	const subgrid = document.getElementById('subgrid')
	const grid2 = document.querySelector('grid-item-2')
	if (!monthly.classList.contains('active')) {
		daily.classList.remove('active')
		weekly.classList.remove('active')
		monthly.classList.add('active')
	}
	fetch('./data.json')
		.then((res) => res.json())
		.then((data) => {
			console.log(data[5])
			setMonthly(data)
		})
}

function setMonthly(data) {
	console.log('sammoozz')
	console.log(data[1].timeframes.monthly.previous)

	// WORK
	if (data[0].timeframes.monthly.current != 1) {
		gridWorkHours.textContent = `
    ${data[0].timeframes.monthly.current} hrs
  `
	} else {
		gridWorkHours.textContent = `
    ${data[0].timeframes.monthly.current} hr
  `
	}
	if (data[0].timeframes.monthly.previous != 1) {
		gridWorkLast.textContent = `Last Month - 
    ${data[0].timeframes.monthly.previous} hrs
  `
	} else {
		gridWorkLast.textContent = `Last Month - 
    ${data[0].timeframes.monthly.previous} hr
  `
	}
	// PLAY
	if (data[1].timeframes.monthly.current != 1) {
		gridPlayHours.textContent = `
    ${data[1].timeframes.monthly.current} hrs
  `
	} else {
		gridPlayHours.textContent = `
    ${data[1].timeframes.monthly.current} hr
  `
	}
	if (data[1].timeframes.monthly.previous != 1) {
		gridPlayLast.textContent = `Last Month - 
    ${data[1].timeframes.monthly.previous} hrs
  `
	} else {
		gridPlayLast.textContent = `Last Month - 
    ${data[1].timeframes.monthly.previous} hr
  `
	}
	// STUDY
	if (data[2].timeframes.monthly.current != 1) {
		gridStudyHours.textContent = `
    ${data[2].timeframes.monthly.current} hrs
  `
	} else {
		gridStudyHours.textContent = `
    ${data[2].timeframes.monthly.current} hr
  `
	}
	if (data[2].timeframes.monthly.previous != 1) {
		gridStudyLast.textContent = `Last Month - 
    ${data[2].timeframes.monthly.previous} hrs
  `
	} else {
		gridStudyLast.textContent = `Last Month - 
    ${data[2].timeframes.monthly.previous} hr
  `
	}
	// EXERCISE
	if (data[3].timeframes.monthly.current != 1) {
		gridExerciseHours.textContent = `
    ${data[3].timeframes.monthly.current} hrs
  `
	} else {
		gridExerciseHours.textContent = `
    ${data[3].timeframes.monthly.current} hr
  `
	}
	if (data[3].timeframes.monthly.previous != 1) {
		gridExerciseLast.textContent = `Last Month - 
    ${data[3].timeframes.monthly.previous} hrs
  `
	} else {
		gridExerciseLast.textContent = `Last Month - 
    ${data[3].timeframes.monthly.previous} hr
  `
	}
	// SOCIAL
	if (data[4].timeframes.monthly.current != 1) {
		gridSocialHours.textContent = `
    ${data[4].timeframes.monthly.current} hrs
  `
	} else {
		gridSocialHours.textContent = `
    ${data[4].timeframes.monthly.current} hr
  `
	}
	if (data[4].timeframes.monthly.previous != 1) {
		gridSocialLast.textContent = `Last Month - 
    ${data[4].timeframes.monthly.previous} hrs
  `
	} else {
		gridSocialLast.textContent = `Last Month - 
    ${data[4].timeframes.monthly.previous} hr
  `
	}
	// SELFCARE
	if (data[5].timeframes.monthly.current != 1) {
		gridSelfCareHours.textContent = `
    ${data[5].timeframes.monthly.current} hrs
  `
	} else {
		gridSelfCareHours.textContent = `
    ${data[5].timeframes.monthly.current} hr
  `
	}
	if (data[5].timeframes.monthly.previous != 1) {
		gridSelfCareLast.textContent = `Last Month - 
    ${data[5].timeframes.monthly.previous} hrs
  `
	} else {
		gridSelfCareLast.textContent = `Last Month - 
    ${data[5].timeframes.monthly.previous} hr
  `
	}
}

daily.addEventListener('click', setDailyActive)
weekly.addEventListener('click', setWeeklyActive)
monthly.addEventListener('click', setMonthlyActive)
