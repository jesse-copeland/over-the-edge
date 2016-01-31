//GameObject.FindGameObjectsWithTag("Agent3D");

using UnityEngine;
using System.Collections;

public class CameraAction : MonoBehaviour
{


    public GameObject Arena3D;       //Public variable to store a reference to the player game object

    private Vector3 offset;         //Private variable to store the offset distance between the player and camera

    private int agentNumber;
    private Vector3 avgPos;
    private float maxX;
    private float maxZ;
    private float minX;
    private float minZ;

    //TODO: Tune
    private float camXMin = -75;
    private float camXMax = 200;
    private float camZMin = 0;
    private float camZMax = 200;
    private float camYMax = 80;

    // Use this for initialization
    void Start()
    {
        //Calculate and store the offset value by getting the distance between the player's position and camera's position.
        //offset = transform.position - Arena3D.transform.position;
    }

    // LateUpdate is called after Update each frame
    void LateUpdate()
    {
        // Set the position of the camera's transform to be the same as the player's, but offset by the calculated offset distance.
        GameObject[] agentList = GameObject.FindGameObjectsWithTag("Agent3D");
        agentNumber = 0;
        minX = 0;
        maxX = 0;
        minZ = 0;
        maxZ = 0;
        avgPos = new Vector3(0, 0, 0);
        foreach(GameObject agent in agentList)
        {
            agentNumber++;
            avgPos = avgPos + agent.transform.position;
            if (agent.transform.position.x > maxX)
            {
                maxX = agent.transform.position.x;
            }
            if (agent.transform.position.x < minX)
            {
                minX = agent.transform.position.x;
            }
            if (agent.transform.position.z > maxZ)
            {
                maxZ = agent.transform.position.z;
            }
            if (agent.transform.position.z < minZ)
            {
                minZ = agent.transform.position.z;
            }
        }
        if (agentNumber != 0)
        {
            avgPos = avgPos / agentNumber;
        } else
        {
            Debug.Log("Something weird happened...");
            avgPos = new Vector3(0, 0, 0);
        }
        float rangeX = maxX - minX;
        float rangeZ = maxZ - minZ;
        float avgRange = rangeX / 2 + rangeZ / 2;
        //print(rangeX);
        //avgPos.x = ;
        avgPos.z = maxZ;

        if (avgPos.x > camXMax) {
            avgPos.x = camXMax;
        } else if (avgPos.x < camXMin) {
            avgPos.x = camXMin;
        }

        if (avgPos.z > camZMax) {
            avgPos.z = camZMax;
        } else if (avgPos.z < camZMin) {
            avgPos.z = camZMin;
        }

        float camY = avgRange / 1.5f;
        if (camY > camYMax) camY = camYMax;

        transform.position = new Vector3(avgPos.x, camY, avgPos.z-50);// + offset;
    }
}
