function acakSerial(panjangSerial) {
  let char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let serialNumber = "";
  let jumlahSerial = 250;
  let arraySerial = new Array();
  //Mengacak Character
  while (jumlahSerial >= arraySerial.length) {
    for (i = 0; i < panjangSerial; i++) {
      randomChar = Math.floor(Math.random() * char.length);
      serialNumber += char.substring(randomChar, randomChar + 1);
    }
    //Memotong string dengan strip (-)
    String.prototype.splice = function (idx1, idx2, idx3, rem, str) {
      return (
        this.slice(0, idx1) +
        str +
        this.slice(idx1, idx2) +
        str +
        this.slice(idx2, idx3) +
        str +
        this.slice(idx3 + Math.abs(rem))
      );
    };
    temp = serialNumber.splice(4, 8, 12, 0, "-");
    arraySerial.push(temp);
    serialNumber = "";
  }
  //Menanmpilkan Array dengan index
  arraySerial.forEach(function (item, index) {
    console.log(index, item);
  });
}
let panjangSerial = 16;
acakSerial(panjangSerial);
