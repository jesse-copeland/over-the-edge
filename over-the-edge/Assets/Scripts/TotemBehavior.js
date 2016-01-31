#pragma strict

function Start () {

}

function Update () {
	var people = GameObject.FindGameObjectsWithTag("Agent3D");

	for (var person in people) {
		Debug.Log("AAAAHHH");
    }
}