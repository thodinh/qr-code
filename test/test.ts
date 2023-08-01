import { writeFile } from 'fs';
import { generateQRCode } from '../src/logic/generate';
import { QRCodeGeneratorState } from '../src/logic/types';

const qrMsg: QRCodeGeneratorState = {
    text: 'Hello World',
    minVersion: 1,
    maxVersion: 40,
    maskPattern: 2,
    boostECC: false,
    ecc: 'L',
    margin: 1,
    rotate: 0,
    backgroundImage: '#888888',
    darkColor: '#000000',
    effect: 'crystalize',
    effectCrystalizeRadius: 9.5,
    effectLiquidifyDistortRadius: 4,
    effectLiquidifyRadius: 4,
    effectLiquidifyThreshold: 116,
    effectTiming: 'after',
    invert: false,
    lightColor: '#ffffff',
    marginNoise: false,
    marginNoiseOpacity: 1,
    marginNoiseRate: 0.5,
    marginNoiseSpace: 'extreme',
    markerInnerShape: 'square',
    markerShape: 'square',
    markerStyle: 'square',
    markerSub: 'square',
    markers: [],
    pixelStyle: 'square',
    renderPointsType: 'all',
    scale: 30,
    seed: -1,
    transformPerspectiveX: 0,
    transformPerspectiveY: 0,
    transformScale: 1.2,
} as QRCodeGeneratorState
;(async() => {
    const qr = await generateQRCode(qrMsg)
    writeFile('qr.png', qr.toBuffer(), (err) => {
        if (!err) console.log('QR Code generated successfully!');
    })
})();