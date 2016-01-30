#pragma strict
//Attach this script to the totem prefab

var deathTimer : int = 3;

function Start()
{
	StartCoroutine(destroy()); //Initiates destroy function
}

function destroy()
{
	yield WaitForSeconds(deathTimer); //Waits for 3 seconds
	Destroy(this.gameObject);	//Destroys object
}