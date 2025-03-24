// components/DownloadButton.js
import React from 'react';

const DownloadButton = () => {
  return (
    <a
      href="/statics/example.pdf"  // Path to the document in the public folder
      download="example.pdf"  // Optional: name the file when downloading
      className="btn-download"
    >
      Download PDF
    </a>
  );
};

export default DownloadButton;