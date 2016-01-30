#pragma strict

function Start()
{
	StartCoroutine(destroy());
}

function destroy()
{
	yield WaitForSeconds(3);
	Destroy(this.gameObject);
}