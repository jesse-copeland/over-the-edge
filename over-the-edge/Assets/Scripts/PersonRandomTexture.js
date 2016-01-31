#pragma strict

// Textures //
var tex1 : Texture;
var tex2 : Texture;
var tex3 : Texture;
var tex4 : Texture;

//var renderer : Renderer;

function Start () {
	// When a person spawns, assign a random one of four textures to them //
	var renderer : Renderer = this.gameObject.GetComponent("Renderer");
	renderer.material.EnableKeyword("_DETAIL_MULX2");
	var randomNum = Random.Range(0.0, 4.0);
	if (randomNum < 1.0) {
		renderer.material.SetTexture("_DetailAlbedoMap", tex1);
		Debug.Log("ONE");
	} else if (randomNum < 2.0) {
		renderer.material.SetTexture("_DetailAlbedoMap", tex2);
		Debug.Log("TWO");
	} else if (randomNum < 3.0) {
		renderer.material.SetTexture("_DetailAlbedoMap", tex3);
		Debug.Log("THREE");
	} else {
		renderer.material.SetTexture("_DetailAlbedoMap", tex4);
		Debug.Log("FOUR");
	}
}

function Update () {

}