#pragma strict

private var totemTimerStarted = false; //Has this totem begun to decay?
private final var totemTotalLife = 3.0; //How many seconds totems live
private final var approximateFrameRate = 50;
private var totemRemainingLife = totemTotalLife * approximateFrameRate;
private final var totemDeathSoundLife = 0.2 * approximateFrameRate; //Frames before death to play death sound at

var deathSound : AudioClip;

function Start () {

}

function Update () {
	// Destroy totems a limited period after they are touched //
	if (totemTimerStarted) {
		totemRemainingLife--;
	}

	if (totemRemainingLife == totemDeathSoundLife) { //Begin death sound and flyaway
		if (deathSound) AudioSource.PlayClipAtPoint(deathSound, transform.position, 4.0);
		var rigidbody : Rigidbody = gameObject.GetComponent("Rigidbody");
		rigidbody.AddForce(Vector3(0.0, 9000.0, 0.0));
	}

	if (totemRemainingLife <= 0) {
		Destroy(this.gameObject);
	}
}

function OnCollisionEnter (col : Collision)
{
    if(col.gameObject.tag == "Agent3D") {
        totemTimerStarted = true;
    }
}
