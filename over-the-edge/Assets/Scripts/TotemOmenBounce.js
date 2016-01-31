#pragma strict

// Causes totems and omens to visually bounce when they enter the field //

var basePlane : GameObject;

// Constants //
private final var gravity = -1;
private final var stopBounceThreshold = -1; //Largest speed the totem / omen will stop bouncing at

private var velY = 0;

function Start () {

}

function Update () {
	// Apply gravity //
	velY -= gravity / Application.targetFrameRate;

	// Apply motion //
	gameObject.transform.position.y -= velY;

	// Apply ground collision, if necessary //
	//TODO: When heightmap is implemented, check for contact with the plane 
}