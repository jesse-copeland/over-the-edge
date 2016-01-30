#pragma strict

//Attach to Cursor prefab

/*****This Script Spawns Totems*******/

var sprite : Transform;
var objectSpawned : Transform; //Instance of Transform, you drag and drop a prefab into this variable in Unity!*/
var debugmode : boolean = false; //Toggles Debugmode, self explanatory
var speed : float = 1f; //Speed of Cursor


function Update () //Updates Every Frame
{ 
	var move = Vector3(Input.GetAxis("Horizontal"), Input.GetAxis("Vertical"), 0); //Takes info from wasd and arrow keys
	transform.position = transform.position + (move * speed * Time.deltaTime);	//Translates the cursor according to keys
	
	if (Input.GetKeyDown("space")) //Detects when "space" is "PRESSED"//
	{
	    if(debugmode==true)
	    {
			print("You spawned a totem!"); //Debug Message//
		}
		
		Instantiate(objectSpawned, Vector2(transform.position.x,transform.position.y),Quaternion.identity); 
		////////////////////////////////////////////////////////////
		//-Creates an instance of objectSpawned variable (Transform),
		// 	translates it to the current position of the cursor.  
		// -Quanternion.identy, just means there is no rotation and it is
		// 	perfectly aline with the world axis. 
		/////////////////////////////////////////////////////////////
	}
	
}// End of code
