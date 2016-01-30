#pragma strict

//Attach this script to the people prefab

var speed : float = 0; //Recommended speed is 4 or 5
var DebugMode : boolean = false;



private var defaultAngle : float=0;

function Start() //Initial Velocity
{
	GetComponent(Rigidbody2D).velocity = Vector2.right * speed;
}

function OnCollisionEnter2D(col : Collision2D)
{
	if(col.gameObject.name == "North Wall")
	{
		if(DebugMode==true)
		{
			Debug.Log("I hit the North wall!");
		}
		GetComponent(Rigidbody2D).velocity = Vector2(1 * speed, Random.Range(-1,1)); //Angle used to be negative
	}
	if(col.gameObject.name == "South Wall")
	{
		if(DebugMode==true)
		{
			Debug.Log("I hit the South wall!");
		}
		GetComponent(Rigidbody2D).velocity = Vector2(-1 *speed ,Random.Range(-1,1));//Angle used to be positive
		
	}
	if(col.gameObject.name == "East Wall")
	{
		if(DebugMode==true)
		{
			Debug.Log("I hit the East wall!");
		}
		GetComponent(Rigidbody2D).velocity = Vector2(-1 * speed,Random.Range(-1,1));//Angle used to be negative
		
	}
	if(col.gameObject.name == "West Wall")
	{
		if(DebugMode==true)
		{
			Debug.Log("I hit the  wall!");
		}
		GetComponent(Rigidbody2D).velocity = Vector2(1 * speed,Random.Range(-1,1));//Angle used to be positive
	}
}


		