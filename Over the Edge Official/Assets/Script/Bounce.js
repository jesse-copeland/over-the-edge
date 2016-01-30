#pragma strict

var posX : int = 0;
var posY : int = 0;
private var bounce : boolean = false;
private var mover: Transform;

function OnCollisionEnter2D(col: Collision2D)
{
	if(col.gameObject.tag == "Wall")
	{
		Debug.Log("I hit a wall.");
		bounce = true; 
	}
}

function Update()
{
	if(bounce == true)
	{
		if(transform.position.x>=10)
		{
			bounce = false;
		}
	}
}

