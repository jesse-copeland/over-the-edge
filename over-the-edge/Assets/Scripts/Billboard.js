#pragma strict

function Start () {

}

function Update () {
	this.transform.LookAt(Camera.main.transform);
}