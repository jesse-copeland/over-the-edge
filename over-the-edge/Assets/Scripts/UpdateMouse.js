#pragma strict

/* 
	This script handles interactions when the mouse is pressed, such as calling other scripts to spawn totems
	Might remake later as "invisible object" to simplify adding behaviors
*/

var maxMouthDepth = 255; //Maximum raycast distance

// Objects //
var prefabTotem : GameObject;
var prefabOmen : GameObject;
var terrain : GameObject;
private var terrainCollider : TerrainCollider;

private final var approximateFrameRate = 50;

// Mouse button mapping //
private final var mouseButtonLeft = 0;
private final var mouseButtonRight = 1;
private final var mouseButtonMiddle = 2;

// Constants //
private final var spawnHeight = 13;

// Omen spawning stuff //
private var omenReserves = 3; //How many omens does the player have to spend?
private final var maxOmenReserves = 5; //How many omens can a player hold in reserve?
private final var maxSimultaneousOmens = 3; //How many omens can the player have active at once?
private final var secondsToGainOmen = 15;
private final var framesToGainOmen = secondsToGainOmen * approximateFrameRate;
private var omenGainTimer = framesToGainOmen;
private final var secondsToCooldownOmen = 1;
private final var framesToCooldownOmen = secondsToCooldownOmen * approximateFrameRate;
private var omenCooldown = 0;

function Start () {
	terrainCollider = terrain.GetComponent("TerrainCollider");
}

function Update () {
	// Handle omen gain stuff //
	// Omen gain timer //
	if (omenGainTimer > 0) {
		omenGainTimer--;
	} else if (omenReserves < maxOmenReserves) {
		omenReserves++;
		omenGainTimer = framesToGainOmen;
	}

	// Omen cooldown timer //
	if (omenCooldown > 0) omenCooldown--;

	if (Input.GetMouseButtonDown(mouseButtonLeft)) mousePressedLeft();
	if (Input.GetMouseButtonDown(mouseButtonRight)) mousePressedRight();
	if (Input.GetMouseButtonDown(mouseButtonMiddle)) mousePressedMiddle();
}

function getMouseVector() { //Returns a Vector3 of the mouse's position
	var ray : Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
	var hit : RaycastHit;
	if (terrainCollider.Raycast(ray, hit, maxMouthDepth)) {
		return hit.point;
		//return ray.GetPoint(hit.distance);
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

	// Make sure we've clicked on something... once we have the heightmap implemented, check if it's that we're clicking //
	if (clickedObject === null) return;

	var x = clickPosition.x;
	var y = spawnHeight;
	var z = clickPosition.z;
	Instantiate(prefabTotem, Vector3 (x, y, z), Quaternion.identity);
}

function mousePressedRight() {
	// Things that happen when the mouse is right-clicked will go here //
	var clickPosition : Vector3 = getMouseVector();
	var clickedObject : GameObject = getObjectClicked();

	// Make sure we've clicked on something... once we have the heightmap implemented, check if it's that we're clicking //
	if (clickedObject === null) return;

	var x = clickPosition.x;
	var y = spawnHeight;
	var z = clickPosition.z;

	// Make sure we have enough omens //
	if (omenReserves <= 0 || omenCooldown > 0) return;

	omenReserves--;
	omenCooldown = framesToCooldownOmen;
	Instantiate(prefabOmen, Vector3 (x, y, z), Quaternion.identity);
}

function mousePressedMiddle() {
	// Things that happen when the mouse is middle-clicked will go here //
	var clickPosition : Vector3 = getMouseVector();
	var clickedObject : GameObject = getObjectClicked();
}