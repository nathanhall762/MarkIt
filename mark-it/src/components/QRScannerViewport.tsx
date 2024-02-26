const QRScannerViewport = () => {
  return (
    <div className='flex flex-col text-center items-center'>
      <div className='aspect-square w-[100vw] bg-slate-400 mb-2 max-w-xl'></div>
      <p>Scan a barcode or MarkIt sticker to begin.</p>
    </div>
  );
};

export default QRScannerViewport;
