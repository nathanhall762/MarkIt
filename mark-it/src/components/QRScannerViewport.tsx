import useAddSequenceStore from '../ZustandStore';
import QRScanner from './QRScanner';

const QRScannerViewport = () => {
  // const setQRCode = useAddSequenceStore((state) => state.setQRCode);

  // Function to generate a simple UUID-like string
  // const generateUUID = () => {
  //   const s6 = () =>
  //     Math.floor((1 + Math.random()) * 0x1000000)
  //       .toString(16)
  //       .substring(1);
  //   return `${s6()}`;
  // };

  // const onClick = () => {
  //   const newQRCode = generateUUID(); // Generate a new UUID-like string
  //   setQRCode(newQRCode); // Set the new UUID-like string as the QR code
  //   console.log('QR code set to', newQRCode);
  // };

  return (
    <div className='flex flex-col text-center items-center'>
      <div className='aspect-square w-[100vw] bg-ltbg1 dark:bg-dkbg1 mb-2 max-w-md'>
        <QRScanner />
      </div>
      <p>Scan a barcode or MarkIt sticker to begin.</p>
    </div>
  );
};

export default QRScannerViewport;
