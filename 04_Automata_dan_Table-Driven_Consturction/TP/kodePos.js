class KodePos {
    constructor() {
      this.kodePosTable = {
        Batununggal: "40266",
        Kujangsari: "40287",
        Mengger: "40267",
        Wates: "40256",
        Cijaura: "40287",
        Jatisari: "40286",
        Margasari: "40286",
        Sekejati: "40286",
        Kebonwaru: "40272",
        Maleer: "40274",
        Samoja: "40273",
      };
    }
  
    getKodePos(kelurahan) {
      return this.kodePosTable[kelurahan] || "Kelurahan tidak ditemukan";
    }
  }
  
  module.exports = KodePos;