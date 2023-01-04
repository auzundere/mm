/* MagicMirror² Default Modules List
 * Modules listed below can be loaded without the 'default/' prefix. Omitting the default folder name.
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 */
const defaultModules = [
	"alert",
	"calendar",
	"uscalendar",
	"schoolcalendar",
	"clock",
	"compliments",
	// "helloworld",
	// "homework",
	"assignment",
	"newsfeed",
	"schoolnewsfeed",
	"updatenotification",
	"weather"
];
// const defaultModules = ["schoolcalendar"];

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
	module.exports = defaultModules;
}
