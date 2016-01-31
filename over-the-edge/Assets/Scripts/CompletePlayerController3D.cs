using UnityEngine;
using System.Collections;

//Adding this allows us to access members of the UI namespace including Text.
using UnityEngine.UI;

public class CompletePlayerController3D : MonoBehaviour
{

    public float maxSpeed;             //Floating point variable to store the player's movement speed.
    public Text countText;          //Store a reference to the UI Text component which will display the number of pickups collected.
    public Text winText;            //Store a reference to the UI Text component which will display the 'You win' message.

    private Rigidbody rb3d;       //Store a reference to the Rigidbody2D component required to use 2D Physics.
    private int count;              //Integer to store the number of pickups collected so far.
    private float oldAngle;

    // Use this for initialization
    void Start()
    {
        maxSpeed = Random.value*20+10;
   
        //Get and store a reference to the Rigidbody2D component so that we can access it.
        rb3d = GetComponent<Rigidbody>();

        rb3d.MovePosition(new Vector3(Random.value * 50 - 25, 0, Random.value * 50 - 25));
        rb3d.AddForce(new Vector3(Random.value * 5000, 0, Random.value * 5000));
    }

    //FixedUpdate is called at a fixed interval and is independent of frame rate. Put physics code here.
    void FixedUpdate()
    {
        if (rb3d.velocity.magnitude > maxSpeed)
        {
            rb3d.AddForce(-rb3d.velocity * (rb3d.velocity.magnitude - maxSpeed));
        }
        float angle = (float)((Mathf.Rad2Deg * Mathf.Atan2(rb3d.velocity.x, rb3d.velocity.z)))*0.3f+oldAngle*0.7f;
        oldAngle = angle;
        rb3d.rotation = Quaternion.AngleAxis(angle, Vector3.up);

        //rb3d.AddForce(new Vector3(Random.value*50,0, Random.value * 50));

        //Store the current horizontal input in the float moveHorizontal.
        //float moveHorizontal = Input.GetAxis ("Horizontal");

        //Store the current vertical input in the float moveVertical.
        //float moveVertical = Input.GetAxis ("Vertical");

        //Use the two store floats to create a new Vector2 variable movement.
        //Vector2 movement = new Vector2 (moveHorizontal, moveVertical);

        //Call the AddForce function of our Rigidbody2D rb2d supplying movement multiplied by speed to move our player.
        //rb2d.AddForce (movement * speed);
    }


    void OnTriggerStay(Collider other)
    {
        
        if (other.gameObject.CompareTag("Agent3D"))
        {
            Vector3 delta = new Vector3(rb3d.position.x - other.bounds.center.x, 0, rb3d.position.z - other.bounds.center.z);

            float forceRange = 5;
            float forceMagnitude = 0.1f;
            float repulseFactor = 2;

            rb3d.AddForce(other.attachedRigidbody.velocity / 100);
            
            if (delta.magnitude > forceRange && delta.magnitude < forceRange*2)
            { 
                rb3d.AddForce(-delta * forceMagnitude);
            }
            if (delta.magnitude <= forceRange)
            {
                rb3d.AddForce(delta * forceMagnitude * repulseFactor);
            }
        } 
        
        if (other.gameObject.CompareTag("Arena3D"))
        {
            Vector3 forceVector;
            float forceMagnitude = 1;

            if (rb3d.position.x - (other.bounds.center.x - other.bounds.extents.x) < other.bounds.size.x / 5)
            {
                forceVector = new Vector3(other.bounds.size.x / 5 + (rb3d.position.x - (other.bounds.center.x - other.bounds.extents.x)), 0, 0);
                rb3d.AddForce(forceVector * forceMagnitude);
            }

            if (rb3d.position.x - (other.bounds.center.x + other.bounds.extents.x) > -other.bounds.size.x / 5)
            {
                forceVector = new Vector3(-other.bounds.size.x / 5 + (rb3d.position.x - (other.bounds.center.x + other.bounds.extents.x)), 0, 0);
                rb3d.AddForce(forceVector * forceMagnitude);
            }

            if (rb3d.position.z - (other.bounds.center.z + other.bounds.extents.z) > -other.bounds.size.z / 5)
            {
                forceVector = new Vector3(0, 0, -other.bounds.size.z / 5 + (rb3d.position.z - (other.bounds.center.z + other.bounds.extents.z)));
                rb3d.AddForce(forceVector * forceMagnitude);
            }

            if (rb3d.position.z - (other.bounds.center.z - other.bounds.extents.z) < other.bounds.size.z / 5)
            {
                forceVector = new Vector3(0, 0, other.bounds.size.z / 5 + (rb3d.position.z - (other.bounds.center.z - other.bounds.extents.z)));
                rb3d.AddForce(forceVector * forceMagnitude);
            }
        } 
    }
   
    void OnTriggerExit(Collider other)
    {

    }

    //OnTriggerEnter2D is called whenever this object overlaps with a trigger collider.
    void OnTriggerEnter(Collider other)
    {
        //Check the provided Collider2D parameter other to see if it is tagged "PickUp", if it is...
       
    }

}
