export class DiffieHellman {
    constructor(p, g) {
        this.p = p
        this.g = g
        if (this.p % 2 == 0) throw new Error("Error, only impar numbers");

        
    }
    getPublicKey(privateKey) {
        if (privateKey > 1 && this.p != privateKey && privateKey < this.p) return  (this.g ** privateKey) % this.p
        else throw new Error("Error");
        
    }

    getSecret(theirPublicKey, myPrivateKey) {
        if (theirPublicKey > 0 && myPrivateKey > 0) return (theirPublicKey ** myPrivateKey) % this.p
        else throw new Error("Error");        
    }
  }
  