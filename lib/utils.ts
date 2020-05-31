function ab2base64(buf: ArrayBuffer): string {
  return btoa(String.fromCharCode(...new Uint8Array(buf)));
}

function base642ab(base64Str: string): ArrayBuffer {
  return Uint8Array.from(atob(base64Str), c => c.charCodeAt(0));
}

function ab2hex(buffer: ArrayBuffer): string {
  return [...new Uint8Array(buffer)]
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");
}

function hex2ab(hex: any): ArrayBuffer {
  return new Uint8Array(
    hex.match(/[\da-f]{2}/gi).map((h: any) => {
      return parseInt(h, 16);
    })
  );
}

function ab2str(buf: ArrayBuffer): string {
  return String.fromCharCode.apply(null, Array.from(new Uint16Array(buf)));
}

function str2ab(str: string) : ArrayBuffer {
  var buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
  var bufView = new Uint16Array(buf);
  for (var i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
}

function isEmptyOrNull(obj: any): boolean {
  if (!obj) return true;
  return Object.entries(obj).length === 0;
}

function parseJwt(token: string) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  return JSON.parse(window.atob(base64));
}

const base58 = (function(alpha) {
  var alphabet =
      alpha || "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
    base = alphabet.length;
  return {
    encode: function(enc: number) {
      var encoded = "";
      while (enc) {
        var remainder = enc % base;
        enc = Math.floor(enc / base);
        encoded = alphabet[remainder].toString() + encoded;
      }
      return encoded;
    },
    decode: function(dec: string) {
      if (typeof dec !== "string")
        throw new Error('"decode" only accepts strings.');
      var decoded = 0;
      while (dec) {
        var alphabetPosition = alphabet.indexOf(dec[0]);
        if (alphabetPosition < 0)
          throw new Error(
            '"decode" can\'t find "' +
              dec[0] +
              '" in the alphabet: "' +
              alphabet +
              '"'
          );
        var powerOf = dec.length - 1;
        decoded += alphabetPosition * Math.pow(base, powerOf);
        dec = dec.substring(1);
      }
      return decoded;
    }
  };
})();

async function signWithKey(privateKey: CryptoKey, data: ArrayBuffer) {
  try {
    let signature = await window.crypto.subtle.sign(
      {
        name: "ECDSA",
        hash: { name: "SHA-256" }
      },
      privateKey,
      data
    );
    if (signature) {
      return signature;
    }
  } catch (e) {
    console.log(`error: ${e}`);
    return undefined;
  }
}

/*async function createDID(privateKey: CryptoKey, publicKeyHex: string) {
  let deltaId = await window.crypto.subtle.digest(
    "SHA-256",
    hex2ab(publicKeyHex)
  );
  let change = {
    id: ab2hex(deltaId), // sign and anchor to dlt
    publicKey: [
      {
        id: "keys-0",
        type: "EcdsaP256",
        publicKeyHex: publicKeyHex,
        role: "register"
      }
    ]
  };
  let sig = await signWithKey(privateKey, str2ab(JSON.stringify(change)));
  let delta = {
    change: change,
    by: {
      key: "keys-0",
      sig: ab2hex(sig)
    }
  };
  // generate delta
  // sign it and save it to microledger
  // sign 0 anchor it
}*/

export {
  ab2base64,
  base642ab,
  ab2str,
  str2ab,
  ab2hex,
  hex2ab,
  isEmptyOrNull,
  parseJwt,
  base58,
  signWithKey
};
