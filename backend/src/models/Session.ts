export interface Session {
    id: string;
    alleyNumber: number;
    qrCode: string;
    startTime: Date;
    endTime?: Date;
  }
  