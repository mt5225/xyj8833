var links = [];
var casper = require('casper').create();

function getLinks() {
    var links = document.querySelectorAll('.productTitle a');
    return Array.prototype.map.call(links, function(e) {
        return e.getAttribute('href');
    });
}

casper.start('http://www.sierratradingpost.com/s~patagonia/?perPage=96', function() {
});

casper.then(function() {
    // aggregate results for the 'patagonia' search
    links = this.evaluate(getLinks);
});


casper.run(function() {
    // echo results in some pretty fashion
    this.echo(links.length + ' links found:');
    this.echo(' - ' + links.join('\n - ')).exit();
});