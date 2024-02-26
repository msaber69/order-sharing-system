import express from 'express';
import { QRCodeController } from '../controllers/qr-codeController';

const router = express.Router();
const qrCodeController = new QRCodeController();

router.post('/qr-codes', qrCodeController.createQRCode);
router.get('/qr-codes/:qrCodeId', qrCodeController.getQRCodeById);
router.get('/qr-codes', qrCodeController.getAllQRCodes);

export default router;
