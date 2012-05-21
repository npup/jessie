/*global html,isHostObjectProperty,isHostMethod */

/*
Description:
Relies on the `classList` api which is only supported in newer browsers.
*/

var addClass;

if (html && isHostObjectProperty(html, "classList") && isHostMethod(html.classList, "add") ) {
	addClass = function(el, className) {
		return el.classList.add(className);
	};
}