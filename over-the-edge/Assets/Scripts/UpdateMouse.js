#pragma strict

/* 
	This script handles interactions when the mouse is pressed, such as calling other scripts to spawn totems
	Might remake later as "invisible object" to simplify adding behaviors
*/

var maxMouthDepth = 255; //Maximum raycast distance

// Mouse button mapping //
private final var mouseButtonLeft = 0;
private final var mouseButtonRight = 1;
private final var mouseButtonMiddle = 2;

function Start () {

}

function Update () {
	if (Input.GetMouseButtonDown(mouseButtonLeft)) mousePressedLeft();
	if (Input.GetMouseButtonDown(mouseButtonRight)) mousePressedMiddle();
	if (Input.GetMouseButtonDown(mouseButtonMiddle)) mousePressedMiddle();
}

function getMouseVector() { //Returns a Vector3 of the mouse's position
	var ray : Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
	var hit : RaycastHit;
	if (Physics.Raycast(ray, hit, maxMouthDepth)) {
		return hit.point;
	}
	return null;
}

function getObjectClicked() {
	var ray : Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
	var hit : RaycastHit;
	if (Physics.Raycast(ray, hit, maxMouthDepth)) {
		return hit.collider.gameObject;
	}
	return null;
}

function mousePressedLeft() {
	// Things that happen when the mouse is clicked will go here //
	var clickPosition : Vector3 = getMouseVector();
	var clickedObject : GameObject = getObjectClicked();
}

function mousePressedRight() {
	// Things that happen when the mouse is right-clicked will go here //
	var clickPosition : Vector3 = getMouseVector();
	var clickedObject : GameObject = getObjectClicked();
}

function mousePressedMiddle() {
	// Things that happen when the mouse is middle-clicked will go here //
	var clickPosition : Vector3 = getMouseVector();
	var clickedObject : GameObject = getObjectClicked();
}