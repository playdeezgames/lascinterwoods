function MapCell(column,row,defaults){
	this.column=column;
	this.row=row;
	for(var i in defaults){
		this[i]=defaults[i];
	}
}
function MapColumn(column,rows,defaults){
	this.cells=[];
	while(this.cells.length<rows){
		this.cells.push(new MapCell(column,this.cells.length,defaults));
	}
}
function Map(columns,rows,defaults){
	this.columns=[];
	while(this.columns.length<columns){
		this.columns.push(new MapColumn(this.columns.length,rows,defaults));
	}
	this.width=function(){
		return this.columns.length;
	};
	this.height=function(){
		return this.columns[0].rows.length;
	};	
}