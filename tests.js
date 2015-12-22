QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

QUnit.test( "keylogger api behavior", function( assert ) {
  var doc = $( document ),
    keys = new KeyLogger( doc );
 
  // Trigger the key event
  doc.trigger( $.Event( "keydown", { keyCode: 9 } ) );
 
  // Verify expected behavior
  assert.deepEqual( keys.log, [ 9 ], "correct key was logged" );
});