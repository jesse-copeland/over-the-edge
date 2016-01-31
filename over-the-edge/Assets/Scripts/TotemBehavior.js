﻿#pragma strict

private final var rangeOfInfluence = 25;
private final var forceMagnitude = 50;

function Start () {

}

function Update () {
	var people : GameObject[];
	people = GameObject.FindGameObjectsWithTag("Agent3D"); 
	var withinRange = 0;
	for (var person in people) {
		var deltaX = this.gameObject.transform.position.x - person.transform.position.x;
		var deltaZ = this.gameObject.transform.position.z - person.transform.position.z;
		var angle = Mathf.Atan2(deltaZ, deltaX);
		var forceVector : Vector3 = Vector3(Mathf.Cos(angle) * forceMagnitude, 0, Mathf.Sin(angle) * forceMagnitude);
		var rigidbody : Rigidbody = person.GetComponent("Rigidbody");
    	if (Mathf.Pow(deltaX, 2) + Mathf.Pow(deltaZ, 2) <= Mathf.Pow(rangeOfInfluence, 2)) {
    		rigidbody.AddForce(forceVector);
    		withinRange++;
    	}
	}
}