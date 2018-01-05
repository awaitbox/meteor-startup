/**
 * Await for Meteor to be ready (on the client or server).
 */
export default
async function meteorStartup( _passThrough ) {
    await new Promise(r => Meteor.startup(r))
    return _passThrough
}
