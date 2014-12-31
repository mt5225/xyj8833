var products = [];
var casper = require('casper').create();


function getproducts() {
    var products = document.querySelectorAll('.productTitle a');
    return Array.prototype.map.call(products, function(e) {
        return {
            "url" : e.getAttribute('href').trim(),
            "title" : e.textContent.trim()
        }});
}

casper.start('http://www.sierratradingpost.com/s~patagonia/?perPage=96', function() {
});

casper.then(function() {
    // aggregate results for the 'patagonia' search
    products = this.evaluate(getproducts);
});


casper.run(function() {
    // echo results in some pretty fashion
    this.echo(products.length + ' products found for patagonia:');
    for (var i = products.length - 1; i >= 0; i--) {
        this.echo(' - ' + JSON.stringify(products[i]));
    };

    this.exit();
});