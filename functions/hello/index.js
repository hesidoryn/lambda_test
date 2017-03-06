var fs = require('fs');
var Handlebars = require('handlebars');

console.log('starting function');
exports.handle = function(e, ctx, cb) {
  console.log('processing event: %j', e);
  var homeTemplate = fs.readFileSync('hoome.hbs').toString();
  var homeTemplateCompiled = Handlebars.compile(homeTemplate);
  var data = {'ip': ctx.source_ip};
  var result = homeTemplateCompiled(data);
  cb(null, ctx.source_ip);
}
