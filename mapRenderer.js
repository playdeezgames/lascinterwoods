function MapRenderer(context,options,images,terrains,items,creatures,effects){
	this.context=context;
	this.options=options;
	this.images=images;
	this.terrains=terrains;
	this.items=items;
	this.creatures=creatures;
	this.effects=effects;
	this.render=function(map){
		for(var column=0;column<this.options.columns;++column){
			for(var row=0;row<this.options.rows;++row){
				var x = this.options.x+column*this.options.cellWidth;
				var y = this.options.y+row*this.options.cellHeight;
				var cell = map.columns[column].cells[row];
				
				var image = this.images[this.terrains[cell.terrain].image];
				this.context.drawImage(image,x,y,this.options.cellWidth,this.options.cellHeight)
				
				image = this.images[this.items[cell.item].image];
				this.context.drawImage(image,x,y,this.options.cellWidth,this.options.cellHeight)
				
				image = this.images[this.creatures[cell.creature].image];
				this.context.drawImage(image,x,y,this.options.cellWidth,this.options.cellHeight)
				
				image = this.images[this.effects[cell.effect].image];
				this.context.drawImage(image,x,y,this.options.cellWidth,this.options.cellHeight)
				
			}
		}
	}
}