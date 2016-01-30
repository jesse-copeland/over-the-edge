#pragma strict

/*****This Script Spawns Totems*******/

var sprite : Transform;
var objectSpawned : Transform; //Instance of Transform, you drag and drop a prefab into this variable in Unity!*/
var debugmode : boolean = false; //Toggles Debugmode, self explanatory
var speed : float = 1f; //Speed of Cursor


private var cursorPosX : float = 0f;
private var cursorPosY : float = 0f;


function Update () //Updates Every Frame
{ 
	var move = Vector3(Input.GetAxis("Horizontal"), Input.GetAxis("Vertical"), 0);
	transform.position = transform.position + (move * speed * Time.deltaTime);
	
	if (Input.GetKeyDown("space")) //Detects when "space" is "PRESSED"//
	{
	    if(debugmode==true)
	    {
			print("You spawned a totem!"); //Debug Message//
		}
		
		Instantiate(objectSpawned, Vector2(transform.position.x,transform.position.y),Quaternion.identity); 
		////////////////////////////////////////////////////////////
		//-Creates an instance of objectSpawned variable (Transform),
		// 	Translate it to x axis 2, and y axis 0. 
		// -Quanternion.identy, just means there is no rotation and it is
		// 	perfectly aline with the world axis. 
		/////////////////////////////////////////////////////////////
	}
	
}// End of code
