class dustbin
{
	constructor(x,y)
	{
		var options={
			isStatic:true,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}
		
        this.leftbody=Bodies.rectangle(x-100+10, y-60-10-50,20,100, options)
        this.rightbody=Bodies.rectangle(x+100-10, y-60-10-50,20,100, options)
        this.centerbody=Bodies.rectangle(x, y-60,200,20, options)
        World.add(world, this.leftbody);
        World.add(world, this.rightbody);
        World.add(world, this.centerbody);

	}
	display()
	{
			
				

			
			push();
			rectMode(CENTER)
		
			fill(255,0,255)
           
            rect(this.centerbody.position.x,this.centerbody.position.y,200,20)
            rect(this.leftbody.position.x,this.leftbody.position.y,20,100)
            rect(this.rightbody.position.x,this.rightbody.position.y,20,100)
		    pop();
			
	}

}