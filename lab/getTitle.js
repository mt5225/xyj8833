var casper = require('casper').create();

casper.start('http://www.sierratradingpost.com/', function() {
    this.echo(this.getTitle());
});

casper.run();