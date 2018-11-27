const generateRamdonString = function(length) {
    let randomString = "";
    const possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; // prettier-ignore
  
    for (var i = 0; i < length; i++) {
      randomString += possibleChars.charAt(
        Math.floor(Math.random() * possibleChars.length)
      );
    }
  
    return randomString;
  };
  
export default generateRamdonString;
  