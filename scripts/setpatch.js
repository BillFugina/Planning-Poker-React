var versiony = require('versiony')
var patch = process.argv[2]
if (patch){
  console.log('setpatch - patch specified: ' + patch)
}
else {
  var currentPatch = versiony.from('package.json').get().split('.')[2];
  patch = (currentPatch * 1) + 1;
  console.log('setpatch - No patch specified. Incrementing from ' + currentPatch + ' to ' + patch)
}
var oldVersion = versiony.from('package.json').get()
versiony
  .from('package.json')
  .patch(patch)
  .to()
  .to('src/version.json')
var newVersion = versiony.get()
console.log('setpatch - Version changed from ' + oldVersion + ' to ' + newVersion)

