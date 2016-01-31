#pragma strict

private final var rangeOfInfluence = 200;
private final var forceMagnitude = 0;//-1000; //OH GOD IT'S A VOLCANO WITH TEETH
private final var forceDistanceExponent = -0.5; //Well, at a distance it's not so bad...

function Start () {

}

function Update () {
	var people : GameObject[];
	people = GameObject.FindGameObjectsWithTag("Agent3D"); 
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
    	}
	}
}

// Entering the volcano = DEATH //
function OnTriggerEnter (other : Collider)
{
    if(other.gameObject.tag == "Agent3D") {
        Destroy(other.gameObject);
    }

    //TODO: Increment score and add scream
}