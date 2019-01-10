var gameController = {
	keys:{left:37,up:38,right:39,down:40},
	player:{},
	terrains:{
		"floor":{image:"empty",passable:true},
		"tree":{image:"tree",passable:false},
		"grass":{image:"grass",passable:true},
		"deadtagon":{image:"deadtagon",passable:true},
		"deadspider":{image:"deadspider",passable:true},
		"deadimp":{image:"deadimp",passable:true},
		"deadsnake":{image:"deadsnake",passable:true},
		"deadzombie":{image:"deadzombie",passable:true},
		"deadhellhorse":{image:"deadhellhorse",passable:true},
		"deadwhorl":{image:"deadwhorl",passable:true},
		"deadbat":{image:"deadbat",passable:true},
		"deadskeleton":{image:"deadskeleton",passable:true}	
	},
	items:{
		"none":{image:"empty",passable:true,takeable:false},
		"crimsontreasure":{image:"crimsontreasure",passable:false,takeable:true,zone:7,inventory:"items",achievement:12240},
		"coppertreasure":{image:"coppertreasure",passable:false,takeable:true,zone:6,inventory:"items",achievement:12278},
		"goldtreasure":{image:"goldtreasure",passable:false,takeable:true,zone:5,inventory:"items",achievement:12293},
		"jadetreasure":{image:"jadetreasure",passable:false,takeable:true,zone:4,inventory:"items",achievement:12299},
		"turquoisetreasure":{image:"turquoisetreasure",passable:false,takeable:true,zone:3,inventory:"items",achievement:12298},
		"azuretreasure":{image:"azuretreasure",passable:false,takeable:true,zone:2,inventory:"items",achievement:12226},
		"amethysttreasure":{image:"amethysttreasure",passable:false,takeable:true,zone:1,inventory:"items",achievement:12221},
		"silvertreasure":{image:"silvertreasure",passable:false,takeable:true,zone:0,inventory:"items",achievement:12284},
		"crimsonsword":{image:"crimsonsword",passable:false,takeable:true,zone:0,inventory:"weapons",achievement:12239},
		"coppersword":{image:"coppersword",passable:false,takeable:true,zone:1,inventory:"weapons",achievement:12277},
		"goldsword":{image:"goldsword",passable:false,takeable:true,zone:2,inventory:"weapons",achievement:12292},
		"jadesword":{image:"jadesword",passable:false,takeable:true,zone:3,inventory:"weapons",achievement:12282},
		"turquoisesword":{image:"turquoisesword",passable:false,takeable:true,zone:4,inventory:"weapons",achievement:12296},
		"azuresword":{image:"azuresword",passable:false,takeable:true,zone:5,inventory:"weapons",achievement:12225},
		"amethystsword":{image:"amethystsword",passable:false,takeable:true,zone:6,inventory:"weapons",achievement:12220},
		"silversword":{image:"silversword",passable:false,takeable:true,zone:7,inventory:"weapons",achievement:12287},
		"crimsonkey":{image:"crimsonkey",passable:false,takeable:true,zone:0,inventory:"keys",achievement:12237},
		"copperkey":{image:"copperkey",passable:false,takeable:true,zone:1,inventory:"keys",achievement:12275},
		"goldkey":{image:"goldkey",passable:false,takeable:true,zone:2,inventory:"keys",achievement:12290},
		"jadekey":{image:"jadekey",passable:false,takeable:true,zone:3,inventory:"keys",achievement:12280},
		"turquoisekey":{image:"turquoisekey",passable:false,takeable:true,zone:4,inventory:"keys",achievement:12289},
		"azurekey":{image:"azurekey",passable:false,takeable:true,zone:5,inventory:"keys",achievement:12223},
		"amethystkey":{image:"amethystkey",passable:false,takeable:true,zone:6,inventory:"keys",achievement:12218},
		"silverkey":{image:"silverkey",passable:false,takeable:true,zone:7,inventory:"keys",achievement:12285},
		"crimsondoor1":{image:"crimsondoor",passable:true,takeable:false,zone:0,key:"crimsonkey",destination:"crimsondoor2",inventory:"doors",achievement:12238},
		"copperdoor1":{image:"copperdoor",passable:true,takeable:false,zone:1,key:"copperkey",destination:"copperdoor2",inventory:"doors",achievement:12276},
		"golddoor1":{image:"golddoor",passable:true,takeable:false,zone:2,key:"goldkey",destination:"golddoor2",inventory:"doors",achievement:12291},
		"jadedoor1":{image:"jadedoor",passable:true,takeable:false,zone:3,key:"jadekey",destination:"jadedoor2",inventory:"doors",achievement:12281},
		"turquoisedoor1":{image:"turquoisedoor",passable:true,takeable:false,zone:4,key:"turquoisekey",destination:"turquoisedoor2",inventory:"doors",achievement:12295},
		"azuredoor1":{image:"azuredoor",passable:true,takeable:false,zone:5,key:"azurekey",destination:"azuredoor2",inventory:"doors",achievement:12224},
		"amethystdoor1":{image:"amethystdoor",passable:true,takeable:false,zone:6,key:"amethystkey",destination:"amethystdoor2",inventory:"doors",achievement:12219},
		"silverdoor1":{image:"silverdoor",passable:true,takeable:false,zone:7,key:"silverkey",destination:"silverdoor2",inventory:"doors",achievement:12286},
		"crimsondoor2":{image:"crimsondoor",passable:true,takeable:false,zone:1,key:"crimsonkey",destination:"crimsondoor1"},
		"copperdoor2":{image:"copperdoor",passable:true,takeable:false,zone:2,key:"copperkey",destination:"copperdoor1"},
		"golddoor2":{image:"golddoor",passable:true,takeable:false,zone:3,key:"goldkey",destination:"golddoor1"},
		"jadedoor2":{image:"jadedoor",passable:true,takeable:false,zone:4,key:"jadekey",destination:"jadedoor1"},
		"turquoisedoor2":{image:"turquoisedoor",passable:true,takeable:false,zone:5,key:"turquoisekey",destination:"turquoisedoor1"},
		"azuredoor2":{image:"azuredoor",passable:true,takeable:false,zone:6,key:"azurekey",destination:"azuredoor1"},
		"amethystdoor2":{image:"amethystdoor",passable:true,takeable:false,zone:7,key:"amethystkey",destination:"amethystdoor1"},
		"silverdoor2":{image:"silverdoor",passable:true,takeable:false,zone:0,key:"silverkey",destination:"silverdoor1"}
	},
	token:"\x34\x34\x30\x33\x63\x66\x66\x65\x32\x30\x66\x30\x63\x64\x35\x63\x31\x34\x66\x31\x30\x61\x65\x32\x35\x34\x34\x39\x62\x64\x36\x33",
	creatures:{
		"none":{image:"empty"},
		"tagon":{image:"tagon",zone:0,dead:"deadtagon"},
		"spider":{image:"spider",zone:0,dead:"deadspider",weapon:"crimsonsword",achievement:12241},
		"imp":{image:"imp",zone:1,dead:"deadimp",weapon:"coppersword",achievement:12279},
		"snake":{image:"snake",zone:2,dead:"deadsnake",weapon:"goldsword",achievement:12294},
		"zombie":{image:"zombie",zone:3,dead:"deadzombie",weapon:"jadesword",achievement:12283},
		"hellhorse":{image:"hellhorse",zone:4,dead:"deadhellhorse",weapon:"turquoisesword",achievement:12297},
		"whorl":{image:"whorl",zone:5,dead:"deadwhorl",weapon:"azuresword",achievement:12228},
		"bat":{image:"bat",zone:6,dead:"deadbat",weapon:"amethystsword",achievement:12222},
		"skeleton":{image:"skeleton",zone:7,dead:"deadskeleton",weapon:"silversword",achievement:12288},
	},
	endGameAchievements:{
		dead:12300,
		loot:12302,
		kill:12301,
		door:12303
	},
	effects:{
		"explored":{image:"empty"},
		"unexplored":{image:"unexplored"}
	},
	mapRendererOptions:{
		x:0,
		y:0,
		columns:15,
		rows:15,
		cellWidth:32,
		cellHeight:32
	},
	mapOptions:{
		columns:15,
		rows:15,
		mazeColumns:3,
		mazeRows:3,
		mazeColumnStride:5,
		mazeRowStride:5
	},
	mazeOptions:{
		columns:3,
		rows:3
	},
	atlasOptions:{
		columns:16,
		rows:16,
		zones:8
	},
	mapCellDefaults:{
		"terrain":"grass",
		"item":"none",
		"creature":"none",
		"effect":"unexplored"
	},
	random:function(min,max){
		return Math.floor(Math.random()*(max-min+1))+min;
	},
	loadImage:function(index,url){
		var image = new Image();
		var self=this;
		image.onload=function(){
			self.images[index]=this;
			self.imagesLeft--;
			if(self.imagesLeft<1){
				self.initGame();
			}
		}
		image.src=url;
	},
	loadImages:function(images){
		for(var i in images){
			this.imagesLeft++;
		}
		for(var i in images){
			this.loadImage(i,images[i]);
		}
	},
	init:function(){
		this.queryString=parseQueryString(window.location.search.substring(1));
		this.context = document.getElementById("myCanvas").getContext('2d');
		this.images={};
		this.imagesLeft=0;
		this.loadImages({
			"empty":"./images/empty.png",
			"tagon":"./images/tagon.png",
			"deadtagon":"./images/deadtagon.png",
			"tree":"./images/tree.png",
			"grass":"./images/grass.png",
			"unexplored":"./images/unexplored.png",
			"spider":"./images/spider.png",
			"imp":"./images/imp.png",
			"snake":"./images/snake.png",
			"zombie":"./images/zombie.png",
			"hellhorse":"./images/hellhorse.png",
			"whorl":"./images/whorl.png",
			"bat":"./images/bat.png",
			"skeleton":"./images/skeleton.png",

			"deadspider":"./images/deadspider.png",
			"deadimp":"./images/deadimp.png",
			"deadsnake":"./images/deadsnake.png",
			"deadzombie":"./images/deadzombie.png",
			"deadhellhorse":"./images/deadhellhorse.png",
			"deadwhorl":"./images/deadwhorl.png",
			"deadbat":"./images/deadbat.png",
			"deadskeleton":"./images/deadskeleton.png",

			"crimsonsword":"./images/crimsonsword.png",
			"coppersword":"./images/coppersword.png",
			"goldsword":"./images/goldsword.png",
			"jadesword":"./images/jadesword.png",
			"turquoisesword":"./images/turquoisesword.png",
			"azuresword":"./images/azuresword.png",
			"amethystsword":"./images/amethystsword.png",
			"silversword":"./images/silversword.png",
			"crimsondoor":"./images/crimsondoor.png",
			"copperdoor":"./images/copperdoor.png",
			"golddoor":"./images/golddoor.png",
			"jadedoor":"./images/jadedoor.png",
			"turquoisedoor":"./images/turquoisedoor.png",
			"azuredoor":"./images/azuredoor.png",
			"amethystdoor":"./images/amethystdoor.png",
			"silverdoor":"./images/silverdoor.png",
			"crimsonkey":"./images/crimsonkey.png",
			"copperkey":"./images/copperkey.png",
			"goldkey":"./images/goldkey.png",
			"jadekey":"./images/jadekey.png",
			"turquoisekey":"./images/turquoisekey.png",
			"azurekey":"./images/azurekey.png",
			"amethystkey":"./images/amethystkey.png",
			"silverkey":"./images/silverkey.png",
			"crimsontreasure":"./images/crimsontreasure.png",
			"coppertreasure":"./images/coppertreasure.png",
			"goldtreasure":"./images/goldtreasure.png",
			"jadetreasure":"./images/jadetreasure.png",
			"turquoisetreasure":"./images/turquoisetreasure.png",
			"azuretreasure":"./images/azuretreasure.png",
			"amethysttreasure":"./images/amethysttreasure.png",
			"silvertreasure":"./images/silvertreasure.png",
			"border":"./images/border.png",
			"play":"./images/play.png",
			"deadfail":"./images/deadfail.png",
			"lootwin":"./images/lootwin.png",
			"killwin":"./images/killwin.png",
			"doorwin":"./images/doorwin.png"
			});
	},
	initGame:function(){
		this.mapRenderer = new MapRenderer(this.context,this.mapRendererOptions,this.images,this.terrains,this.items,this.creatures,this.effects);
		
		var treeTable=[
			[[true,true,true,true,true],[true,false,false,false,true],[true,false,false,false,true],[true,false,false,false,true],[true,true,true,true,true]],
			[[true,true,true,true,true],[false,false,false,false,true],[false,false,false,false,true],[false,false,false,false,true],[true,true,true,true,true]],
			[[true,true,true,true,true],[true,false,false,false,true],[true,false,false,false,true],[true,false,false,false,true],[true,false,false,false,true]],
			[[true,true,true,true,true],[false,false,false,false,true],[false,false,false,false,true],[false,false,false,false,true],[true,false,false,false,true]],
			[[true,true,true,true,true],[true,false,false,false,false],[true,false,false,false,false],[true,false,false,false,false],[true,true,true,true,true]],
			[[true,true,true,true,true],[false,false,false,false,false],[false,false,false,false,false],[false,false,false,false,false],[true,true,true,true,true]],
			[[true,true,true,true,true],[true,false,false,false,false],[true,false,false,false,false],[true,false,false,false,false],[true,false,false,false,true]],
			[[true,true,true,true,true],[false,false,false,false,false],[false,false,false,false,false],[false,false,false,false,false],[true,false,false,false,true]],
			[[true,false,false,false,true],[true,false,false,false,true],[true,false,false,false,true],[true,false,false,false,true],[true,true,true,true,true]],
			[[true,false,false,false,true],[false,false,false,false,true],[false,false,false,false,true],[false,false,false,false,true],[true,true,true,true,true]],
			[[true,false,false,false,true],[true,false,false,false,true],[true,false,false,false,true],[true,false,false,false,true],[true,false,false,false,true]],
			[[true,false,false,false,true],[false,false,false,false,true],[false,false,false,false,true],[false,false,false,false,true],[true,false,false,false,true]],
			[[true,false,false,false,true],[true,false,false,false,false],[true,false,false,false,false],[true,false,false,false,false],[true,true,true,true,true]],
			[[true,false,false,false,true],[false,false,false,false,false],[false,false,false,false,false],[false,false,false,false,false],[true,true,true,true,true]],
			[[true,false,false,false,true],[true,false,false,false,false],[true,false,false,false,false],[true,false,false,false,false],[true,false,false,false,true]],
			[[true,false,false,false,true],[false,false,false,false,false],[false,false,false,false,false],[false,false,false,false,false],[true,false,false,false,true]],
		];

		
		
		//generate a maze
		var directions = new Directions();
		var maze = new Maze(this.mazeOptions.columns,this.mazeOptions.rows,directions);
		var mazeGenerator = new MazeGenerator(directions);
		mazeGenerator.generate(maze);
		
		//first doubling, gives 1 circuit
		var flags = maze.flagify();
		flags = mazeGenerator.doubleFlags(flags);
		
		//second doubling, gives 2 circuits
		flags = mazeGenerator.doubleFlags(flags);
		
		//third doubling, gives 4 circuits
		flags = mazeGenerator.doubleFlags(flags);
		
		//fourth doubling, gives 8 circuits
		flags = mazeGenerator.doubleFlags(flags);
		
		maze=new Maze(flags.length,flags[0].length,directions);
		maze.deflagify(flags);
		for(var zone=0;zone<this.atlasOptions.zones;++zone){
			var column=this.atlasOptions.zones-1-zone;
			var row=this.atlasOptions.zones-1-zone;
			maze.columns[column].rows[row].zonify(zone);
		}
		
	
		for(var id in this.items){
			var item = this.items[id];
			if(item.zone!=null){
				var column;
				var row;
				do{
					column=Utility.randomRange(0,maze.width()-1);
					row=Utility.randomRange(0,maze.height()-1);
				}while(maze.columns[column].rows[row].zone!=item.zone || maze.columns[column].rows[row].item!=null || maze.columns[column].rows[row].creature!=null);
				maze.columns[column].rows[row].item=id;
			}
		}

		for(var id in this.creatures){
			var creature = this.creatures[id];
			if(creature.zone!=null){
				var column;
				var row;
				do{
					column=Utility.randomRange(0,maze.width()-1);
					row=Utility.randomRange(0,maze.height()-1);
				}while(maze.columns[column].rows[row].zone!=creature.zone || maze.columns[column].rows[row].item!=null || maze.columns[column].rows[row].creature!=null);
				maze.columns[column].rows[row].creature=id;
			}
		}
		
		//create atlas
		this.atlas=new Atlas(this.atlasOptions.columns,this.atlasOptions.rows,this.mapOptions.columns,this.mapOptions.rows,this.mapCellDefaults);
		this.player={
			atlasColumn:0,
			atlasRow:0,
			mapColumn:0,
			mapRow:0,
			items:{},
			keys:{},
			doors:{},
			weapons:{},
			creatures:{},
			state:"play"
		};
		
		var columnStride=this.mapOptions.mazeColumnStride;
		var rowStride=this.mapOptions.mazeRowStride;
		for(var atlasColumn=0;atlasColumn<this.atlas.width();++atlasColumn){
			for(var atlasRow=0;atlasRow<this.atlas.height();++atlasRow){
				var map=this.atlas.columns[atlasColumn].rows[atlasRow];
				for(var mazeColumn=0;mazeColumn<this.mapOptions.mazeColumns;++mazeColumn){
					for(var mazeRow=0;mazeRow<this.mapOptions.mazeRows;++mazeRow){
						var flag=flags[atlasColumn*this.mapOptions.mazeColumns+mazeColumn][atlasRow*this.mapOptions.mazeRows+mazeRow];
						var mazeCell=maze.columns[atlasColumn*this.mapOptions.mazeColumns+mazeColumn].rows[atlasRow*this.mapOptions.mazeRows+mazeRow];
						for(x=0;x<columnStride;++x){
							for(y=0;y<columnStride;++y){
								var terrain="grass";
								if(treeTable[flag][x][y]){
									terrain="tree";
								}
								map.columns[mazeColumn*columnStride+x].cells[mazeRow*rowStride+y].terrain=terrain;
							}
						}
						map.columns[mazeColumn*columnStride+Utility.randomRange(1,3)].cells[mazeRow*rowStride+Utility.randomRange(1,3)].terrain="tree";
						map.columns[mazeColumn*columnStride+Utility.randomRange(1,3)].cells[mazeRow*rowStride+Utility.randomRange(1,3)].terrain="tree";
						if(mazeCell.item!=null){
							var x=Utility.randomRange(1,3);
							var y=Utility.randomRange(1,3);
							map.columns[mazeColumn*columnStride+x].cells[mazeRow*rowStride+y].terrain="grass";
							map.columns[mazeColumn*columnStride+x].cells[mazeRow*rowStride+y].item=mazeCell.item;
							this.items[mazeCell.item].atlasColumn=atlasColumn;
							this.items[mazeCell.item].atlasRow=atlasRow;
							this.items[mazeCell.item].mapColumn=mazeColumn*columnStride+x;
							this.items[mazeCell.item].mapRow=mazeRow*rowStride+y;
						}else if(mazeCell.creature!=null){
							var x=Utility.randomRange(1,3);
							var y=Utility.randomRange(1,3);
							map.columns[mazeColumn*columnStride+x].cells[mazeRow*rowStride+y].terrain="grass";
							map.columns[mazeColumn*columnStride+x].cells[mazeRow*rowStride+y].creature=mazeCell.creature;
							if(mazeCell.creature=="tagon"){
								this.player.atlasColumn=atlasColumn;
								this.player.atlasRow=atlasRow;
								this.player.mapColumn=mazeColumn*columnStride+x;
								this.player.mapRow=mazeRow*rowStride+y;
							}
						}
					}
				}
			}
		}
		
		this.map=this.atlas.columns[this.player.atlasColumn].rows[this.player.atlasRow];
		this.showPlayer();
		this.draw();
	},
	draw:function(){
		this.mapRenderer.render(this.map);
		this.context.drawImage(this.images[this.player.state],160,192,160,96);
	},
	updatePlayerStats:function(){
		this.context.drawImage(this.images.border,480,0,160,96);
		var complete=true;
		var items=[];
		for(var i in this.player.items){
			items.push(this.images[this.items[i].image]);
		}
		while(items.length<8){
			complete=false;
			items.push(this.images["unexplored"]);
		}
		for(var index=0;index<8;++index){
			var x = 480+16+(index%4)*32;
			var y = 16+Math.floor(index/4)*32;
			this.context.drawImage(items[index],x,y,32,32);			
		}
		if(complete){
			this.achievement(endGameAchievements.loot);
			//loot win sound
			this.player.state="lootwin";
		}
		
		this.context.drawImage(this.images.border,480,96,160,96);
		complete=true;
		items=[];
		for(var i in this.player.weapons){
			items.push(this.images[this.items[i].image]);
		}
		while(items.length<8){
			complete=false;
			items.push(this.images["unexplored"]);
		}
		for(var index=0;index<8;++index){
			var x = 480+16+(index%4)*32;
			var y = 96+16+Math.floor(index/4)*32;
			this.context.drawImage(items[index],x,y,32,32);			
		}
		
		this.context.drawImage(this.images.border,480,192,160,96);
		complete=true;
		items=[];
		for(var i in this.player.creatures){
			items.push(this.images[this.creatures[i].image]);
		}
		while(items.length<8){
			complete=false;
			items.push(this.images["unexplored"]);
		}
		for(var index=0;index<8;++index){
			var x = 480+16+(index%4)*32;
			var y = 192+16+Math.floor(index/4)*32;
			this.context.drawImage(items[index],x,y,32,32);			
		}
		if(complete){
			this.achievement(endGameAchievements.kill);
			//kill win sound
			this.player.state="killwin";
		}
		
		this.context.drawImage(this.images.border,480,288,160,96);
		complete=true;
		items=[];
		for(var i in this.player.keys){
			items.push(this.images[this.items[i].image]);
		}
		while(items.length<8){
			complete=false;
			items.push(this.images["unexplored"]);
		}
		for(var index=0;index<8;++index){
			var x = 480+16+(index%4)*32;
			var y = 288+16+Math.floor(index/4)*32;
			this.context.drawImage(items[index],x,y,32,32);			
		}
		
		this.context.drawImage(this.images.border,480,384,160,96);
		complete=true;
		items=[];
		for(var i in this.player.doors){
			items.push(this.images[this.items[i].image]);
		}
		while(items.length<8){
			complete=false;
			items.push(this.images["unexplored"]);
		}
		for(var index=0;index<8;++index){
			var x = 480+16+(index%4)*32;
			var y = 384+16+Math.floor(index/4)*32;
			this.context.drawImage(items[index],x,y,32,32);			
		}
		if(complete){
			this.achievement(endGameAchievements.door);
			//door win sound
			this.player.state="doorwin";
		}
		
	},
	showPlayer:function(){
		for(var x=this.player.mapColumn-2;x<=this.player.mapColumn+2;++x){
			for(var y=this.player.mapRow-2;y<=this.player.mapRow+2;++y){
				if(x>=0 && y>=0 && x<this.mapOptions.columns && y<this.mapOptions.rows){
					this.atlas.columns[this.player.atlasColumn].rows[this.player.atlasRow].columns[x].cells[y].effect="explored";
				}
			}
		}
		this.atlas.columns[this.player.atlasColumn].rows[this.player.atlasRow].columns[this.player.mapColumn].cells[this.player.mapRow].creature="tagon";
		this.updatePlayerStats();
	},
	hidePlayer:function(){
		this.atlas.columns[this.player.atlasColumn].rows[this.player.atlasRow].columns[this.player.mapColumn].cells[this.player.mapRow].creature="none";
	},
	movePlayer:function(deltaX,deltaY){
		if(this.player.state!="play") return;
		this.hidePlayer();
		var nextAtlasColumn = this.player.atlasColumn;
		var nextAtlasRow = this.player.atlasRow;
		var nextMapColumn = this.player.mapColumn+deltaX;
		var nextMapRow = this.player.mapRow+deltaY;
		
		if(nextMapColumn<0){
			nextMapColumn+=this.mapOptions.columns;
			nextAtlasColumn--;
		}
		if(nextMapColumn>=this.mapOptions.columns){
			nextMapColumn-=this.mapOptions.columns;
			nextAtlasColumn++;
		}
		if(nextMapRow<0){
			nextMapRow+=this.mapOptions.rows;
			nextAtlasRow--;
		}
		if(nextMapRow>=this.mapOptions.rows){
			nextMapRow-=this.mapOptions.rows;
			nextAtlasRow++;
		}
		
		var terrain = this.atlas.columns[nextAtlasColumn].rows[nextAtlasRow].columns[nextMapColumn].cells[nextMapRow].terrain;
		if(!this.terrains[terrain].passable){
			nextAtlasColumn = this.player.atlasColumn;
			nextAtlasRow = this.player.atlasRow;
			nextMapColumn = this.player.mapColumn;
			nextMapRow = this.player.mapRow;
		}else{
			var creature = this.atlas.columns[nextAtlasColumn].rows[nextAtlasRow].columns[nextMapColumn].cells[nextMapRow].creature;
			if(creature!="none"){
				if(this.player.weapons[this.creatures[creature].weapon]){
					this.achievement(this.creatures[creature].achievement);
					//kill sound
					this.player.creatures[creature]=true;
					this.atlas.columns[nextAtlasColumn].rows[nextAtlasRow].columns[nextMapColumn].cells[nextMapRow].creature="none";
					this.atlas.columns[nextAtlasColumn].rows[nextAtlasRow].columns[nextMapColumn].cells[nextMapRow].terrain=this.creatures[creature].dead;
					nextAtlasColumn = this.player.atlasColumn;
					nextAtlasRow = this.player.atlasRow;
					nextMapColumn = this.player.mapColumn;
					nextMapRow = this.player.mapRow;
				}else{
					this.achievement(this.endGameAchievements.dead);
					//dead sound
					this.player.state="deadfail";
					nextAtlasColumn = this.player.atlasColumn;
					nextAtlasRow = this.player.atlasRow;
					nextMapColumn = this.player.mapColumn;
					nextMapRow = this.player.mapRow;
					this.atlas.columns[nextAtlasColumn].rows[nextAtlasRow].columns[nextMapColumn].cells[nextMapRow].terrain="deadtagon";
				}
			}else{
				var item=this.atlas.columns[nextAtlasColumn].rows[nextAtlasRow].columns[nextMapColumn].cells[nextMapRow].item;
				if(this.items[item].takeable){
					this.achievement(this.items[item].achievement);
					//item sound
					this.atlas.columns[nextAtlasColumn].rows[nextAtlasRow].columns[nextMapColumn].cells[nextMapRow].item="none";
					this.player[this.items[item].inventory][item]=true;
				}else if(!this.items[item].passable){
					nextAtlasColumn = this.player.atlasColumn;
					nextAtlasRow = this.player.atlasRow;
					nextMapColumn = this.player.mapColumn;
					nextMapRow = this.player.mapRow;
				}else{
					if(this.player.keys[this.items[item].key]){
						if(this.items[item].inventory!=null){
							this.achievement(this.items[item].achievement);
							this.player[this.items[item].inventory][item]=true;
						}
						//door sound
						item=this.items[item].destination;
						nextAtlasColumn = this.items[item].atlasColumn;
						nextAtlasRow = this.items[item].atlasRow;
						nextMapColumn = this.items[item].mapColumn;
						nextMapRow = this.items[item].mapRow;
					}
				}
			}
		}
		
		this.player.mapColumn=nextMapColumn;
		this.player.mapRow=nextMapRow;
		this.player.atlasColumn=nextAtlasColumn;
		this.player.atlasRow=nextAtlasRow;
		
		if(this.player.state=="play"){
			this.showPlayer();
		}
		this.map=this.atlas.columns[this.player.atlasColumn].rows[this.player.atlasRow];
		this.draw();
	},
	handleKey:function(key){
		var result=false;
		if(key==this.keys.left){
			this.movePlayer(-1,0);
			result=true;
		}else if(key==this.keys.right){
			this.movePlayer(1,0);
			result=true;
		}else if(key==this.keys.up){
			this.movePlayer(0,-1);
			result=true;
		}else if(key==this.keys.down){
			this.movePlayer(0,1);
			result=true;
		}
		if(result){
			this.draw();
		}
		return result;
	},
	achievement:function(achievementId){
		if(achievementId==null) return;
		var baseUrl = "http://gamejolt.com/api/game/v1/trophies/add-achieved/?game_id=33474&username="+this.queryString.gjapi_username+"&user_token="+this.queryString.gjapi_token+"&trophy_id="+achievementId
		var baseUrlWithKey=baseUrl+this.token;
		var signedUrl = baseUrl + "&signature=" + md5(baseUrlWithKey);
		$.ajax({url:signedUrl,success:function(result){ }});		
	}
};
