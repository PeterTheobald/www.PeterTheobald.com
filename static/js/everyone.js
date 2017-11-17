// Everyone Explorer
// Peter@PeterTheobald.com 2017
//
// Allow the user to dig through a lifetime of memory of everyone you've every met
// in a visual 'bubble' graph.

// framework choices: processing, processingjs, paperjs, D3
// Only D3 has built in force layouts

$(document).ready(function() {
  startEveryoneExplorer();
});


var nextID=1;
var everyoneGraph = {id:0, name:"ME"};
// main everyone data structure:
// start node is "me",
// has fields 'id', 'name', 'type' (person, group)
// list of links to other nodes each with 'label', and subnode

// Each node has virtual links for 'family' 'school' 'job' 'event'
// virtual nodes are displayed as hints to add links but aren't stored

// toDo: add load/save everyoneGraph to local JSON file

function startEveryoneExplorer() {
		var canvas = document.getElementById('everyone-canvas');
		paper.setup(canvas);
		var path = new paper.Path.Circle( {center:paper.view.center, radius:50, strokeColor:'black', fillColor:'#d0d0d0'});
		paper.view.draw();
	}

// drawEveryoneGraph
// draw large current node in center with lines out to smaller connected nodes
// with lines out to connected nodes. Use force layout to fit them in.
// use zoomLevel=number of connections to branch out, default 2
// scale is based on how many level we are trying to fit and the view size
// ME and current node are 0.16 x min(view.width,view.weight)
// all other nodes get smaller with distance from current: 0.16 x min(w,h) x 0.75^distance
//
// set up interaction for clicks:
//   current node name: rename
//   other node: move node to current (center and scale)
//   link: same as node
//   virtual link (family,job,event,school): create new link and node and rename node

