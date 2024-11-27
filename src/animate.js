activeClusters = []

function animate() {
	if (running) {
		// If game is running
		requestAnimationFrame(animate); // Request to animate the next frame
	}
	// update the state of the element
	updateBalloonsPosition()
	updateMonkeysPosition()
	updateArrowsPosition()
	updateAnimations()
	updateCoins()

	time++ // how many frames have we been through
	printFrame()
	if (infoSession) {
		startDrawBubble()
	}
	
	if (AUTO_START && currentRound > 1) {
		isBetweenRounds = false
	}
	// console.log(roundTime)
	if (!isBetweenRounds) {
		
		// roundTime++
		

		
		if (activeClusters.length == 0 && balloons.length == 0) { // if round ended
			nextRound()
		} else {
			for (let i = 0; i < activeClusters.length; i++) {
				const cluster = activeClusters[i]
				const deploy = 
					cluster.count > 0 && time >= cluster.start &&
					(time - cluster.start) % (cluster.rate | 1) == 0
				if (deploy) {
					activeClusters[i].count--
					addBalloon(cluster.type)
				}
				if (activeClusters[i].count == 0) {
					activeClusters.splice(i, 1)
				}
			}
		}
	}
}

function nextRound() {
	currentRound++
	setupRound(currentRound)
	times[times.length-1][1] = new Date()
	console.log(activeClusters);
	
}

function setupRound(round) {
	const roundData = ROUNDS_DATA[round-1]
	for (let i in roundData) {
		const cluster = roundData[i]
		const start = cluster.start * FRAMES_IN_SECOND + time
		const end = cluster.end * FRAMES_IN_SECOND + time
		const rate = Math.floor((end - start) / cluster.count)
		const newCluster = {
			type: cluster.type,
			start,
			rate,
			count: cluster.count,
		}
		activeClusters.push(newCluster)
	}
}

function printFrame() {
	clear() // Clear the canvas from the previous frame
	printBackground() // Print the background image
	// printTunnels()
	// print elements on screen
	printBalloons()
	printArrows()
	printMonkeys()
	printCoins()
	printAnimations()
	printMenu()
	if (printMenuMonkeyVar) { // if 0 then false
		printMenuMonkey()
	}


	// print upper layer stuff
	printMoneyHearts()
	gameOverCheck()
}

	// Function to clear the canvas
function clear() {
	ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas from the previous frame
}