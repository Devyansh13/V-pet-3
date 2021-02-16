class Food {
    constructor(foodStock,lastFed){
      this.foodStock=0;
      this.image=loadImage("Milk.png")
      this.lastFed
    }

    updateFoodStock(foodStock){
      this.foodStock=foodStock
    }

    getFedTime(lastFed){
      lastFed=this.lastFed
    }

    reduceFood(){
      if(this.foodStock>0){
        this.foodStock=this.foodStock-1;
      }
    }

    getFoodStock(){
      return this.foodStock;
    }
   
    display(){
      var x=80, y=150;
      imageMode(CENTER)
      image(this.image,700,200,100,100)
      if(this.foodStock>=0){
      for(var i=0;i<this.foodStock;i=i+1){
        if(i%10==0){
          x=80,
          y=y+40
        }
        image(this.image,x,y,50,50);
        x=x+20;
      }

      }
    }
    bedroom(){
      background(bedroomImg,800,200)
    }

    bathroom(){
      background(bathroomImg,800,200)
    }

    garden(){
      background(gardenImg,800,200)
    }
    
  }
