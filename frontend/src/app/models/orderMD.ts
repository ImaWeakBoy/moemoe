// tslint:disable-next-line:class-name
export class glassProperty {
  ball: string;
  astigmatism: string;
  angle: string;
  add: string;
  hv: string;
  bf: string;
}

// tslint:disable-next-line:class-name
export class orderM {
  sheetID: number;
  sheetNo: string;
  sheetDate: Date;
  custID: number;
  totalAmt: number;
  fRBall: string;
  fRP: glassProperty;
  fLP: glassProperty;
  nRP: glassProperty;
  nLP: glassProperty;
}

// tslint:disable-next-line:class-name
export class orderD {
  sheetID: number;
  seqNo: number;
  frame: string;
  frameAmt: string;
  glass: string;
  glassAmt: string;
  totAmt: string;
  creaDate: Date;
  editDate: Date;
}
