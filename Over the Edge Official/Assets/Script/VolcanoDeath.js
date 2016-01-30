#pragma strict

//Attach this script to the volcano prefab

// Destroys object with this script if collides with volcano tag sprite
function OnCollisionEnter2D(col:Collision2D)
{
	if(col.gameObject.tag=="Volcano")
	{
		Destroy(this.gameObject);
	}
}