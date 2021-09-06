function make_fixtures(Team1, Team2){
	var array = [];
	for (var player1=0; player1< Team1.length; player1++){
		for(var player2=0; player2< Team2.length; player2++){
			if(Math.floor(Math.random()*2) == 1){
				var venue = "(H)";
			}
			else{
				var venue = "(A)";
			}
			array.push(Team1[player1].value + venue  + " <input type='text' placeholder='NA' name='Score1' class='score'> : <input type='text' placeholder='NA' name='Score2' class='score'> " + Team2[player2].value);
		}
	}

	array = shuffle(array);

	for (var count = 1; count<10; count++){
		var label_id = "Fixture" + count.toString();
		document.getElementById(label_id).innerHTML = count.toString() + "} " + array[count-1];
	}
}

function shuffle(array) {
  var currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function update_results(Score1, Score2){
	var Result1 = 0;
	var Result2 = 0;
	var gd1 = 0;
	var gd2 = 0;

	for(var i=0;i<9;i++){
		if(Score1[i].value &&  Score2[i].value){
		if(Score1[i].value > Score2[i].value){
			Result1 += 3;
			gd1 += Score1[i].value;
		}
		else if (Score1[i].value < Score2[i].value){
			Result2 +=3;
			gd2 += Score2[i].value;
		}
		else{
			Result2 += 1;
			Result1 += 1;
		}
	}

	}

	document.getElementById("Result1").innerHTML = Result1;
	document.getElementById("Result2").innerHTML = Result2;
	document.getElementById("gd1").innerHTML = "(" + gd1 + ")";
	document.getElementById("gd2").innerHTML = "(" + gd2 + ")";
}