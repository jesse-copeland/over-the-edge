#pragma strict

private final var rangeOfInfluence = 200;
private final var forceMagnitude = -200; //OH GOD IT'S A VOLCANO WITH TEETH
private final var forceDistanceExponent = -2; //Well, at a distance it's not so bad...

function Start () {

}

function Update () {
	var people : GameObject[];
	people = GameObject.FindGameObjectsWithTag("SwarmAgent"); 
	var withinRange = 0;
	for (var person in people) {
		var deltaX = this.gameObject.transform.position.x - person.transform.position.x;
		var deltaZ = this.gameObject.transform.position.z - person.transform.position.z;
		var angle = Mathf.Atan2(deltaZ, deltaX);
		var rigidbody : Rigidbody = person.GetComponent("Rigidbody");
		var distance = Mathf.Sqrt(Mathf.Pow(deltaX, 2) + Mathf.Pow(deltaZ, 2));
		var distanceMultiplier = Mathf.Pow(distance, forceDistanceExponent);
		var forceVector : Vector3 = Vector3(Mathf.Cos(angle) * forceMagnitude * distanceMultiplier, 0, Mathf.Sin(angle) * forceMagnitude * distanceMultiplier);
    	if (distance <= rangeOfInfluence) {
    		rigidbody.AddForce(forceVector);
    		withinRange++;
    	}
	}
}