var express = require( 'express' );
var app = express();

app.get( '/', function( req, res ) {
    res.send( 'hi' );
});

app.use( express.static( __dirname ) );

app.listen( 3000 );
console.log( 'server running on 3000' );