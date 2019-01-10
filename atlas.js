function AtlasColumn(atlasColumn,atlasRows,mapColumns,mapRows,defaults){
	this.rows=[];
	while(this.rows.length<atlasRows){
		var map = new Map(mapColumns,mapRows,defaults);
		map.atlasColumn=atlasColumn;
		map.atlasRow=this.rows.length;
		this.rows.push(map);
	}
}
function Atlas(atlasColumns,atlasRows,mapColumns,mapRows,defaults){
	this.columns=[];
	while(this.columns.length<atlasColumns){
		this.columns.push(new AtlasColumn(this.columns.length,atlasRows,mapColumns,mapRows,defaults));
	}
	this.width=function(){
		return this.columns.length;
	};
	this.height=function(){
		return this.columns[0].rows.length;
	};
}