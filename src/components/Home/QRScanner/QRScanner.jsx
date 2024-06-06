const QRScanner = () => {
  return (
    <div className="my-16">
      <div className="w-fit mx-auto text-center spcae-y-1 my-2">
        <h2 className="text-3xl font-bold">Automated QR Scanner</h2>
        <p className="text-gray-500">
          Scan & Verify The Attendees Directly By Our QR Scanning <br />
          Solution.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8 my-8">
        <div className="bg-gray-200 min-h-44 p-4 rounded-xl flex flex-col justify-center">
          <h2 className="text-2xl font-bold">One Click</h2>
          <p className="text-gray-500">Qr Verification system</p>
        </div>
        <div className="bg-gray-200 min-h-44 p-4 rounded-xl flex flex-col justify-center">
          <h2 className="text-2xl font-bold">One Click</h2>
          <p className="text-gray-500">Qr Verification system</p>
        </div>
        <div className="bg-gray-200 min-h-44 p-4 rounded-xl flex flex-col justify-center">
          <h2 className="text-2xl font-bold">One Click</h2>
          <p className="text-gray-500">Qr Verification system</p>
        </div>
        <div className="bg-gray-200 min-h-44 p-4 rounded-xl flex flex-col justify-center">
          <h2 className="text-2xl font-bold">One Click</h2>
          <p className="text-gray-500">Qr Verification system</p>
        </div>
      </div>
    </div>
  );
};

export default QRScanner;
