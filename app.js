var express = require( 'express' );
var app = express();

app.use( express.static( __dirname + '/public/' ) );

app.get( '/', function( req, res ) {
    res.send( 'hi' );
});

app.listen( 3000 );
console.log( 'server running on 3000' );









