var OSinfo = require('../modules/OSinfo');

process.stdin.setEncoding('utf-8');
process.stdin.on('reable', function() {
  var input = process.stdin.read();
  if (input !== null) {
    var instruction = input.toString().trim();
    switch(instruction) {
      case '/exit':
        process.stdout.write('Quitting app!\n');
        process.exit();
        break;
      case '/mynode v':
        console.log(process.versions);     
        break;
      case 'mysystem v':
        console.log(process.env);
        break;
      case '/getOSinfo':
        OSinfo.print();
        break;
      default:
        process.stderr.write('Wrong instruction!\n');    
    };
  }
});
