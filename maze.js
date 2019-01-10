var Utility={
	randomRange:function(min,max){
		return Math.floor(Math.random()*(max-min+1))+min;
	},
	randomArray:function(array){
		return array[this.randomRange(0,array.length-1)];
	}
};
function Directions(){
	var nexts=[1,2,3,0];
	var prevs=[3,0,1,2];
	var opposites=[2,3,0,1];
	var deltaXs=[0,1,0,-1];
	var deltaYs=[-1,0,1,0];
	var flags = [1,2,4,8];
	this.next=function(direction){
		return nexts[(direction)];
	};
	this.previous=function(direction){
		return prevs[direction];
	};
	this.opposite=function(direction){
		return opposites[direction];
	};
	this.nextX=function(x,y,direction){
		return x+deltaXs[direction];
	};
	this.nextY=function(x,y,direction){
		return y+deltaYs[direction];
	};
	this.flag=function(direction){
		return flags[direction];
	};
	this.count=function(){
		return 4;
	};
};
function MazeDoor(){
	this.open=false;
}
function MazeCell(column,row,directions){
	this.directions=directions;
	this.column=column;
	this.row=row;
	this.doors=[null,null,null,null];
	this.neighbors=[null,null,null,null];
	this.outside=true;
	this.flagify=function(){
		var flags=0;
		for(var direction=0;direction<this.directions.count();++direction){
			if(this.neighbors[direction]!=null){
				if(this.doors[direction].open){
					flags+=this.directions.flag(direction);
				}
			}
		}
		return flags;
	};
	this.deflagify=function(flags){
		for(var direction=0;direction<this.directions.count();++direction){
			if(this.neighbors[direction]!=null){
				this.doors[direction].open=((flags&this.directions.flag(direction))>0);
			}
		}
	};
	this.zonify=function(zone){
		if(this.zone!=null) return;
		this.zone=zone;
		for(var direction=0;direction<this.directions.count();++direction){
			if(this.neighbors[direction]!=null){
				if(this.doors[direction].open){
					this.neighbors[direction].zonify(zone);
				}
			}
		}
	};
}
function MazeColumn(column,rows,directions){
	this.directions=directions;
	this.rows=[];
	while(this.rows.length<rows){
		this.rows.push(new MazeCell(column,this.rows.length,directions));
	}
	this.flagify=function(){
		var flags=[];
		for(var row=0;row<this.rows.length;++row){
			flags.push(this.rows[row].flagify());
		}
		return flags;
	};
	this.deflagify=function(flags){
		for(var row=0;row<this.rows.length;++row){
			this.rows[row].deflagify(flags[row]);
		}
	};
}
function Maze(columns,rows,directions){
	this.columns=[];
	this.directions=directions;
	while(this.columns.length<columns){
		this.columns.push(new MazeColumn(this.columns.length,rows,directions));
	}
	for(var column=0;column<this.columns.length;++column){
		for(var row=0;row<this.columns[column].rows.length;++row){
			var cell = this.columns[column].rows[row];
			for(var direction=0;direction<directions.count();++direction){
				var nextColumn=directions.nextX(column,row,direction);
				var nextRow=directions.nextY(column,row,direction);
				if((nextColumn>=0) && (nextRow>=0) && (nextColumn<columns) && (nextRow<rows) && (cell.neighbors[direction]==null)){
					var nextCell = this.columns[nextColumn].rows[nextRow];
					var opposite = directions.opposite(direction);
					var door = new MazeDoor();
					cell.doors[direction]=door;
					cell.neighbors[direction]=nextCell;
					nextCell.doors[opposite]=door;
					nextCell.neighbors[opposite]=cell;
				}
			}
		}
	}
	this.width=function(){
		return this.columns.length;
	};
	this.height=function(){
		return this.columns[0].rows.length;
	};
	this.flagify=function(){
		var flags=[];
		for(var column=0;column<this.columns.length;++column){
			flags.push(this.columns[column].flagify());
		}
		return flags;	
	};
	this.deflagify=function(flags){
		for(var column=0;column<this.columns.length;++column){
			this.columns[column].deflagify(flags[column]);
		}
	};
}
function MazeGenerator(directions){
	this.directions=directions;
	this.generate=function(maze){
		var column = Utility.randomRange(0,maze.width()-1);
		var row = Utility.randomRange(0,maze.height()-1);
		var cell = maze.columns[column].rows[row];
		delete cell.outside;
		var frontier = [];
		for(var direction=0;direction<this.directions.count();++direction){
			var nextCell = cell.neighbors[direction];
			if(nextCell!=null && nextCell.outside==true){
				nextCell.outside=false;
				frontier.push(nextCell);
			}
		}
		while(frontier.length>0){
			var index=Utility.randomRange(0,frontier.length-1);
			cell = frontier[index];
			frontier[index]=frontier[frontier.length-1];
			frontier.pop();
			var directions = [];
			for(var direction=0;direction<this.directions.count();++direction){
				var nextCell = cell.neighbors[direction];
				if(nextCell!=null && nextCell.outside==null){
					directions.push(direction);
				}				
			}
			var direction = Utility.randomArray(directions);
			cell.doors[direction].open=true;
			delete cell.outside;
			for(var direction=0;direction<this.directions.count();++direction){
				var nextCell = cell.neighbors[direction];
				if(nextCell!=null && nextCell.outside==true){
					nextCell.outside=false;
					frontier.push(nextCell);
				}
			}
		}
	};
	this.doubleFlags=function(flags){
		var table=[
			[[6,3],[12,9]],
			[[5,3],[5,9]],
			[[6,3],[10,10]],
			[[5,3],[3,10]],
			[[6,5],[12,5]],
			[[5,5],[5,5]],
			[[6,5],[10,6]],
			[[5,5],[3,6]],
			[[10,10],[12,9]],
			[[9,10],[5,9]],
			[[10,10],[10,10]],
			[[9,10],[3,10]],
			[[10,12],[12,5]],
			[[9,12],[5,5]],
			[[10,12],[10,6]],
			[[9,12],[3,6]]
		];
		var columns=flags.length;
		var rows=flags[0].length;
		var result=[];
		while(result.length<columns*2){
			var column=[];
			while(column.length<rows*2){
				column.push(0);
			}
			result.push(column);
		}
		for(var column=0;column<columns;++column){
			for(var row=0;row<rows;++row){
				var flag=flags[column][row];
				for(var x=0;x<2;++x){
					for(var y=0;y<2;++y){
						result[column*2+x][row*2+y]=table[flag][x][y];
					}
				}
			}
		}
		return result;
	};
}
