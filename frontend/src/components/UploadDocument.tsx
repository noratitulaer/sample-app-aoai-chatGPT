import React, { useState } from 'react';

const UploadDocument = () => {
  const [uploading, setUploading] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setFileName(file.name);

    // ➡️ Hier zou je de file kunnen uploaden naar een backend of blob
    // Voor nu doen we alleen een console.log en simuleren upload
    console.log('Bestand geselecteerd:', file);

    // Simulatie van een upload (vervang dit met echte uploadcode)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    alert(`'${file.name}' is geüpload (gesimuleerd).`);
    setUploading(false);
  };

  return (
    <div className="p-4 bg-white border border-gray-200 rounded-xl shadow mt-4">
      <label className="block mb-2 text-sm font-medium text-gray-700">Upload een document</label>
      <input
        type="file"
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-900 file:mr-4 file:py-2 file:px-4 file:border-0
                   file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700
                   hover:file:bg-blue-100"
      />
      {uploading && <p className="mt-2 text-blue-600">Uploaden...</p>}
      {!uploading && fileName && <p className="mt-2 text-green-600">Klaar: {fileName}</p>}
    </div>
  );
};

export default UploadDocument;
