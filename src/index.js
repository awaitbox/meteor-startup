/**
 * Await for Meteor to be ready (on the client or server).
 */
module.exports = function meteorStartup( _passThrough ) {
    return new Promise(resolve => {
        Meteor.startup(() => resolve( _passThrough ))
    })
}
