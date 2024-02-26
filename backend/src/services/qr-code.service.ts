import { QRCode } from '../models/Qr-code';

export class QRCodeService {
  private qrCodes: QRCode[] = [];

  createQRCode(newQRCode: QRCode): QRCode {
    // Generate a unique ID for the QR code
    const id = Math.random().toString(36).substring(2, 9);
    const qrCodeWithId: QRCode = { ...newQRCode, id };
    this.qrCodes.push(qrCodeWithId);
    return qrCodeWithId;
  }

  getQRCodeById(qrCodeId: string): QRCode | undefined {
    return this.qrCodes.find(qrCode => qrCode.id === qrCodeId);
  }

  getAllQRCodes(): QRCode[] {
    return this.qrCodes;
  }
}
