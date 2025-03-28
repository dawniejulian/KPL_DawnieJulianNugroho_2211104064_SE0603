const KodePos = require("./kodePos");
const DoorMachine = require("./doorMachine");

const kodePos = new KodePos();
console.log("Kode Pos Batununggal: " + kodePos.getKodePos("Batununggal"));
console.log("Kode Pos Kujangsari: " + kodePos.getKodePos("Kujangsari"));

const doorMachine = new DoorMachine();
doorMachine.openDoor();
doorMachine.changeState("Terbuka");
doorMachine.openDoor();