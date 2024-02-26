import { Request, Response } from 'express';
import { QRCodeService } from '../services/qr-code.service';

const qrCodeService = new QRCodeService();

export class QRCodeController {
  async createQRCode(req: Request, res: Response): Promise<void> {
    try {
      const newQRCodeData = req.body;
      const newQRCode = qrCodeService.createQRCode(newQRCodeData);
      res.status(201).json(newQRCode);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async getQRCodeById(req: Request, res: Response): Promise<void> {
    try {
      const { qrCodeId } = req.params;
      const qrCode = qrCodeService.getQRCodeById(qrCodeId);
      if (!qrCode) {
        res.status(404).json({ error: 'QR code not found' });
      } else {
        res.status(200).json(qrCode);
      }
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async getAllQRCodes(req: Request, res: Response): Promise<void> {
    try {
      const qrCodes = qrCodeService.getAllQRCodes();
      res.status(200).json(qrCodes);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
