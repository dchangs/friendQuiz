var p1name = document.getElementById('username').value

function submitAns() {	
	var p1name = document.getElementById('username').value
	var p1answer1 = document.getElementById('answer1').value
	var p1answer2 = document.getElementById('answer2').value
	var p1answer3 = document.getElementById('answer3').value
	var p1answer4 = document.getElementById('answer4').value
	var p1answer5 = document.getElementById('answer5').value
	var p1answer6 = document.getElementById('answer6').value
	var p1answer7 = document.getElementById('answer7').value

	var p1answerArr = [p1answer1, p1answer2, p1answer3, p1answer4, p1answer5, p1answer6, p1answer7]

	var p1result = document.getElementById('p1name')
	var p1nameText = document.createTextNode(p1name)
	p1result.appendChild(p1nameText)

	for (i = 0; i < p1answerArr.length; i++) {
		var p1 = document.getElementById('p1')
		var p1ansLi = document.createElement('li')
		var p1ansText = document.createTextNode(p1answerArr[i])
		p1ansLi.appendChild(p1ansText)
		p1.appendChild(p1ansLi)
	}

	console.log(p1answerArr)

	var p1answers = document.getElementById('p1answers')
	var p2answers = document.getElementById('p2answers')
	p1answers.className = 'animated slideOutLeft'
	p2answers.className = 'animated slideInRight'

	var p1namePoss = p1name + "'s"
	$('.user1name').append(p1name)
	$('.user1nameposs').append(p1namePoss)
}


function getScore() {
	var p2name = document.getElementById('username2').value
	var p2result = document.getElementById('p2name')
	var p2nameText = document.createTextNode(p2name)
	p2result.appendChild(p2nameText)

	var p1name = document.getElementById('username').value
	var p1answer1 = document.getElementById('answer1').value
	var p1answer2 = document.getElementById('answer2').value
	var p1answer3 = document.getElementById('answer3').value
	var p1answer4 = document.getElementById('answer4').value
	var p1answer5 = document.getElementById('answer5').value
	var p1answer6 = document.getElementById('answer6').value
	var p1answer7 = document.getElementById('answer7').value

	var p1answerArr = [p1answer1, p1answer2, p1answer3, p1answer4, p1answer5, p1answer6, p1answer7]
	
	var p2answer1 = document.getElementById('p2answer1').value
	var p2answer2 = document.getElementById('p2answer2').value
	var p2answer3 = document.getElementById('p2answer3').value
	var p2answer4 = document.getElementById('p2answer4').value
	var p2answer5 = document.getElementById('p2answer5').value
	var p2answer6 = document.getElementById('p2answer6').value
	var p2answer7 = document.getElementById('p2answer7').value

	var p2answerArr = [p2answer1, p2answer2, p2answer3, p2answer4, p2answer5, p2answer6, p2answer7]

	console.log(p2answerArr)

	var score = 0
	for (i = 0; i < p2answerArr.length; i++) {
		var p2 = document.getElementById('p2')
		var p2ansLi = document.createElement('li')
		var p2ansText = document.createTextNode(p2answerArr[i])
		p2ansLi.appendChild(p2ansText)
		p2.appendChild(p2ansLi)
		if (p2answerArr[i].toLowerCase() == p1answerArr[i].toLowerCase()) {
			p2ansLi.className = 'blue'
			score++
		} else {
			p2ansLi.className = 'red'
		}
	}

	var yourScore = "You scored " + score + "/7!"
	var yourScoreText = document.createTextNode(yourScore)
	var scoreDisplay = document.getElementById('score')
	scoreDisplay.appendChild(yourScoreText)

	if (score >= 4) {
		scoreDisplay.className = 'blue'
	} else {
		scoreDisplay.className = 'red'
	}

	var results = document.getElementById('results')
	results.className = 'animated slideInUp'


	
}