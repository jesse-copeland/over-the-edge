#pragma strict

var xOffset : int;
var yOffset : int;
var scoreText : UI.Text;
var volcanoScript : VolcanoFear;

function Start () {
	// Lock the Score object in the upper right //
	gameObject.transform.position = Vector3(Screen.width - xOffset, Screen.height - yOffset, 0.0);
}

function Update () {
	scoreText.text = volcanoScript.score.ToString();
}