// This is efficient method since this operation is simpler than reggex expression.
export default function isAlphaNumeric(char) {
  var code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && //numeric 0-9
    !(code > 64 && code < 91) && // upper Alpa A-Z
    !(code > 96 && code < 123)
  ) {
    //Lower alpha a-z
    return false;
  }
  return true;
}
