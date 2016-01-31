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