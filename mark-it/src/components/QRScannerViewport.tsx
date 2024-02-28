import useAddSequenceStore from "../AddSequenceStore";

const QRScannerViewport = () => {
  const QRCode = useAddSequenceStore((state) => state.QRCode);
  const setQRCode = useAddSequenceStore((state) => state.setQRCode);

  const onClick = () => {
    setQRCode('12345');
    console.log('QR code set to 12345');
  };
  return (
    <div className='flex flex-col text-center items-center'>
      <div className='aspect-square w-[100vw] bg-slate-400 mb-2 max-w-xl' onClick={onClick}></div>
      <p>Scan a barcode or MarkIt sticker to begin.</p>
    </div>
  );
};

export default QRScannerViewport;
