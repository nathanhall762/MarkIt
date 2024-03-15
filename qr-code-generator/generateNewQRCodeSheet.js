const PDFDocument = require('pdfkit');
const qr = require('qr-image');
const fs = require('fs');

function generateUUID() {
  // Generates a 6-digit hexadecimal UUID
  return [...Array(6)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
}

function generateNewQRCodeSheet() {
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream('QRCodeSheet.pdf'));

  // Convert cm to points (PDFKit uses points, 1 inch = 72 points, 1 inch ≈ 2.54 cm)
  const cmToPoints = (cm) => (cm / 2.54) * 72;

  // Update these based on the label specifications
  const topMargin = cmToPoints(1.15);
  const sideMargin = cmToPoints(0.9);
  const gapBetweenStickers = cmToPoints(0.5); // Gap between stickers

  const codesPerRow = 7; // Adjust if needed based on actual label width
  const codesPerColumn = 9; // Adjust if needed based on actual label height
  const qrSize = cmToPoints(2.4); // Placeholder, adjust based on actual sticker size
  const padding = gapBetweenStickers; // Use gap as padding around QR code

  // Calculate starting positions based on margins
  const startX = sideMargin; // Adjust startX based on side margin
  const startY = topMargin; // Adjust startY based on top margin

  for (let i = 0; i < codesPerColumn; i++) {
    for (let j = 0; j < codesPerRow; j++) {
      const uuid = generateUUID();
      const qrSvg = qr.imageSync(uuid, { type: 'png', size: 10 });

      const xPosition = startX + j * (qrSize + padding);
      const yPosition = startY + i * (qrSize + padding);

      doc.image(qrSvg, xPosition, yPosition, { width: qrSize, height: qrSize });
    }
  }

  doc.end();
}

generateNewQRCodeSheet();
