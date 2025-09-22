export const downloadBrochure = () => {
  const pdfPath = '/brochure-oct-2.pdf';
  
  // Create a link element
  const link = document.createElement('a');
  link.href = pdfPath;
  link.download = 'GRI_Training_Brochure.pdf';
  
  // Append to the document body
  document.body.appendChild(link);
  
  // Trigger the download
  link.click();
  
  // Clean up
  document.body.removeChild(link);
}; 