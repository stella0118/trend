const _root = document.documentElement;
const _mouse = document.querySelector('.mouse');
const _mouse_mid = document.querySelector('.mouse-mid');
const _mouse_guide = document.querySelector('.mouse-guide');

const a = 0.4;	// Div follow mouse - speed
let _s = 60;		// Div size - hover

let x_ = 0;
let y_ = 0;
let _x = 0;
let _y = 0;
let _xm_ = 0;
let _ym_ = 0;
let _x_ = 0;
let _y_ = 0;

_root.addEventListener('mousemove', function(event) {
	_x = event.clientX;
	_y = event.clientY;	
}, false);

_root.addEventListener('mousedown', function(event) {
	_mouse.style.width = _s + 'px';
	_mouse.style.height = _s + 'px';
}, false);

_root.addEventListener('mouseup', function(event) {
	_mouse.style.width = (_s / 1.3) + 'px';
	_mouse.style.height = (_s / 1.3) + 'px';
}, false);

function main() {
	requestAnimationFrame(main);
	x_ += (_x - x_) * a / 2;
	y_ += (_y - y_) * a / 2;
	_x_ += (_x - _x_) * a;
	_y_ += (_y - _y_) * a;
	_xm_ += (_x - _xm_) * a / 1.5;
	_ym_ += (_y - _ym_) * a / 1.5;
	//--
	_mouse.style.left = x_ + 'px';
	_mouse.style.top = y_ + 'px';
	_mouse_mid.style.left = _xm_ + 'px';
	_mouse_mid.style.top = _ym_ + 'px';
	_mouse_guide.style.left = _x_ + 'px';
	_mouse_guide.style.top = _y_ + 'px';
}

window.addEventListener('load', main, false);

let isstatus = false;

function _onrollOver(value) {
	switch(value) {
		case true:
			_mouse.style.width = _s + 'px';
			_mouse.style.height = _s + 'px';
			_mouse.style.border = 2 +'px solid white';
			_mouse.style.opacity = 1;
			break;
		case false:
			_mouse.style.width = (_s / 1.7) + 'px';
			_mouse.style.height = (_s / 1.7) + 'px';
			_mouse.style.border = 20 +'px solid #444758'
			_mouse.style.opacity = 0.1;
			break;
		default:
			break;
	}
}