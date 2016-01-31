#pragma strict

var width : int;
var height : int;

function Start () {
	// Lock the Score object in the upper right //
	gameObject.transform.position = Vector3(Screen.width - (width / 2), height / 2, 0.0);
}

function Update () {

}