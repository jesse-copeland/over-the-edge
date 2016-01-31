#pragma strict

private var totemTimerStarted = false; //Has this totem begun to decay?
private final var totemTotalLife = 3.0; //How many seconds totems live
private final var approximateFrameRate = 50;
private var totemRemainingLife = totemTotalLife * approximateFrameRate;

function Start () {

}

function Update () {
	// Destroy totems a limited period after they are touched //
	if (totemTimerStarted) {
		totemRemainingLife--;
	}

	if (totemRemainingLife <= 0) {
		Destroy(this.gameObject);
		return;
	}
}

/*
function OnTriggerEnter(other: Collider) { //When we encounter a person, begin the self-destruct sequence
	if (other === null) return;
	var otherGameObject = other.transform.parent.gameObject;
	if (otherGameObject.tag == "Agent3D") {
		totemTimerStarted = true;
	}
}
*/

function OnCollisionEnter (col : Collision)
{
	print("Test");
    if(col.gameObject.tag == "Agent3D") {
        Destroy(this.gameObject);
    }
}
