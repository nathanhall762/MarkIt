import useAddSequenceStore from '../ZustandStore';

const QRScannerViewport = () => {
  const setQRCode = useAddSequenceStore((state) => state.setQRCode);

  // Function to generate a simple UUID-like string
  const generateUUID = () => {
    const s4 = () =>
      Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4() + s4() + s4()}`;
  };

  const onClick = () => {
    const newQRCode = generateUUID(); // Generate a new UUID-like string
    setQRCode(newQRCode); // Set the new UUID-like string as the QR code
    console.log('QR code set to', newQRCode);
  };

  return (
    <div className='flex flex-col text-center items-center'>
      <div
        className='aspect-square w-[100vw] bg-ltbg2 dark:bg-dkbg2 mb-2 max-w-xl'
        onClick={onClick}></div>
      <p>Scan a barcode or MarkIt sticker to begin.</p>
    </div>
  );
};

export default QRScannerViewport;
