/* MagicMirror² Test config for default clock module
 *
 * By Sergey Morozov
 * MIT Licensed.
 */
let config = {
	timeFormat: 12,

	modules: [
		{
			module: "clock",
			position: "top_right"
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
	module.exports = config;
}
