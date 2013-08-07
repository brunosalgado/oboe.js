/*
 * A lot of tests have been converted over from jstd. While I like the jasmine syntax better,
 * for a faster conversion a lot of the assertions have been kept in jstd style.
 * 
 * This file just bridges that over to jasmine style. Future tests should use Jasmine directly
 * and at some point I should convert them over.
 */

function assertEquals(expected, actual) {
   expect(actual).toEqual(expected);
}

function assertTrue(actual) {
   expect(actual).toBe(true);
}

function assertFalse(actual) {
   expect(actual).toBe(false);
}
function fail(message) {
   throw new Error(message);
}

/**
 * While converting over, it is useful for tests not to fail because TestCase
 * isn't defined. Make no attempt to run the tests, just stub it out.
 * @param name
 * @param tests
 */
function TestCase(name, tests){}