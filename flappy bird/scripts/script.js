const s = require("Scene");
const p = require("Patches");
const r = require('Reactive');




//p.setPoint2DValue("r1", r.point2d(s.root.findFirst('bird/canvas0/bird_rect').then, s.root.findFirst('bird/canvas0/bird_rect').transform.y));

Promise.all([s.root.findFirst("bird_rect"),
			s.root.findFirst('border_bot'),
			s.root.findFirst('border_top')])
			.then(function(object){
			const bird = objects[0];
			const bottom_border = objects[1];
			const top_border = objects[2];



			p.setPoint2DValue("r1",r.point2d(bird).transform.x,r.point2d(bird).transform.y);
			p.setPoint2DValue("r2",r.point2d(bottom_border).transform.x,r.point2d(bottom_border).transform.y);
			p.setPoint2DValue("r3",r.point2d(top_border).transform.x,r.point2d(top_border).transform.y);
});

//p.setPoint2DValue("r2", r.point2d(s.root.findFirst('border_bot').transform.x, s.root.findFirst('border_bot').transform.y));
//p.setPoint2DValue("r3", r.point2d(s.root.findFirst('border_top').transform.x, s.root.findFirst('border_top').transform.y));
