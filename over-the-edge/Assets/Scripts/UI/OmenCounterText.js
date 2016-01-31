#pragma strict

var xOffset : int;
var yOffset : int;
var counterText : UI.Text;
var mouseScript : UpdateMouse;

function Start () {
	// Lock the Score object in the upper right //
	gameObject.transform.position = Vector3(Screen.width - xOffset, yOffset, 0.0);
}

function Update () {
	counterText.text = mouseScript.omenReserves.ToString();
}