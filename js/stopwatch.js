var time = -15;

var title = document.getElementById("title")
var description = document.getElementById("description")
var image = document.getElementById("image");
var button = document.getElementById("startButton");

var audioSpart = [document.getElementById("audioSpart0"),document.getElementById("audioSpart1"),document.getElementById("audioSpart2"),document.getElementById("audioSpart3"),document.getElementById("audioSpart4"),document.getElementById("audioSpart5"),document.getElementById("audioSpart6"),document.getElementById("audioSpart7"),document.getElementById("audioSpart8"),document.getElementById("audioSpart9")];
var audioCount = [document.getElementById("audio1"),document.getElementById("audio2"),document.getElementById("audio3"),document.getElementById("audio4"),document.getElementById("audio5"),document.getElementById("audio6"),document.getElementById("audio7"),document.getElementById("audio8"),document.getElementById("audio9"),document.getElementById("audio10")];
var aud10seconds = document.getElementById("audio10sec");
var audio15sec = document.getElementById("audio15sec");
var audio30sec = document.getElementById("audio30sec");
var audioBegin = document.getElementById("audioBegin");
var audioFinish = document.getElementById("audioFinish");
var audioRest = document.getElementById("audioRest");
var audioRound = document.getElementById("audioRound");

var startExercise = 0;
var round = 0;
var paused = true;

function stopWatch() {
	
	if (time < 0) {

		title.innerHTML= "Next Exercise: " +  titles[startExercise]  + " in " + (-time) + " seconds! Get Ready!";

		if (image.src != images[startExercise]) {
			image.src = images[startExercise];
			description.innerHTML = descriptions[startExercise];
		}

		if (time == -13){audioSpart[startExercise].play();}
		if (time == -10){audio10sec.play();}
		if (time >= -5){audioCount[-time-1].play();}
	}
	else if (time < 60) {

		title.innerHTML= "Round " + (round+1) + ", Exercise " + (startExercise+1) + ":  " + titles[startExercise]  + ": " + (60-time) + " seconds.";
		
		if (image.src != images[startExercise]) {
			image.src = images[startExercise];
			description.innerHTML = descriptions[startExercise];
		}

		if (time == 0){audioBegin.play();}
		if (time == 30){audio30sec.play();}
		if (time == 45){audio15sec.play();}
		if (time >= 50){audioCount[59-time].play();}
	}
	else {

		startExercise++;

		if (startExercise == 10) {
			if (round == 2) {

				title.innerHTML= "You Have Finished the Spartacus Workout!!!";
				audioFinish.play();
				startExercise = 0;
				round = 0;
				time = -15;
				paused = true;
				button.value="Start"
				return;

			}
			else{

				title.innerHTML= "Round " + (round) + "  Complete!";
				audioRound.play();
				round++;
				startExercise = 0;
				time = -120;

			}

		}
		else
		{
			title.innerHTML= "Exercise Complete!";
			time = -15;
			audioRest.play();
		}
	}

	time++;

	if (paused == false) {
		setTimeout(function() {stopWatch()}, 1000);
	}
}

				
function start() {
	
	if (paused == true) {

		paused = false;

		button.value="Pause";

		stopWatch();

	} else {

		paused = true;
		button.value="Resume";

	}
}

var i = 0;
var images = new Array(10);
while(i < 10)
{
	images[i] = "./img/spart" + i + ".jpg";
	i++;
}

var titles = ["Goblet Squat","Mountain Climber","Single-arm Dumbbell Swing","T-pushup","Split Jump","Dumbbell Row","Dumbbell Side Lunge and Touch","Pushup-position Row","Dumbbell Lunge and Rotation","Dumbbell Push Press"];

var descriptions = ["With both hands, grab one end of a dumbbell to hold it vertically in front of your chest, and stand with your feet slightly beyond shoulder width [A]. Keeping your back naturally arched, push your hips back, bend your knees, and lower your body until the tops of your thighs are at least parallel to the floor [B]. Pause, and push yourself up to the starting position. If that\'s too hard, do a body-weight squat instead.`",
	"Assume a pushup position with your arms completely straight. Your body should form a straight line from your head to your ankles [A]. Without allowing your lower-back posture to change, lift your right foot off the floor and slowly move your right knee toward your chest [B]. Return to the starting position, and repeat with your left leg. Alternate back and forth for the duration of the set.",
	"Hold a dumbbell (or a kettlebell) at arm\'s length in front of your waist. Without rounding your lower back, bend at your hips and knees and swing the dumbbell between your legs [A]. Keeping your arm straight, thrust your hips forward and swing the dumbbell to shoulder level as you rise to a standing position [B]. Swing the weight back and forth. At the 30-second mark, switch arms.",
	"Grab a pair of hex dumbbells and assume a pushup position, your arms straight [A]. Bend your elbows and lower your body until your chest nearly touches the floor [B]. As you push yourself back up, lift your right hand and rotate the right side of your body as you raise the dumbbell straight up over your shoulder until your body forms a T [C]. Reverse the move and repeat, this time rotating your left side.",
	"Stand in a staggered stance with your feet 2 to 3 feet apart, your right foot in front of your left. Keeping your torso upright, bend your legs and lower your body into a lunge [A]. Now jump with enough force to propel both feet off the floor [B]. While you\'re in the air, scissor-kick your legs so you land with your left leg forward. Repeat, alternating your forward leg for the duration of the set.<P>NOTE: If you haven\'t worked out recently or are overweight, just do a regular lunge instead.",
	"Grab a pair of dumbbells, bend at your hips (don\'t round your lower back), and lower your torso until it\'s nearly parallel to the floor. Let the dumbbells hang at arm\'s length [A]. Without moving your torso, row the weights upward by raising your upper arms, bending your elbows, and squeezing your shoulder blades together [B]. Pause, lower the dumbbells, and repeat.",
	"Hold a pair of dumbbells at arm\'s length at your sides [A]. Take a big step to your left and lower your body by pushing your hips backward and bending your left knee. As you lower your body, bend forward at your hips and touch the dumbbells to the floor [B]. Repeat for 30 seconds, and then switch to your right leg. If the exercise is too hard, do the move without the dumbbells; just reach for the floor with your hands.",
	"Grab a pair of hex dumbbells and assume a pushup position, your arms straight [A]. Keeping your core stiff, row the dumbbell in your right hand to the side of your chest, bending your arm as you pull it upward [B]. Pause, and then quickly lower the dumbbell. Repeat with your left arm.",
	"Grab a dumbbell and hold it horizontally by its ends, just under your chin [A]. Step forward with your right foot and lower your body into a lunge. As you lunge, rotate your upper body to the right [B]. Return to the starting position, and repeat with your left leg. Alternate left and right until your 60 seconds are up. If the exercise is too hard, perform the movement without the dumbbell.",
	"Stand holding a pair of dumbbells just outside your shoulders, with your arms bent and palms facing each other. Stand with your feet shoulder-width apart and knees slightly bent [A]. Dip your knees [B], and then explosively push up with your legs as you press the weights straight over your shoulders [C]. Lower the dumbbells back to the starting position and repeat."];

document.getElementById("startButton").addEventListener("click", start);