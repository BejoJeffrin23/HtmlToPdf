import jsPDF from "jspdf";
import * as htmlToImage from "html-to-image";

export const Print = async () => {
  const doc = new jsPDF("p", "px");
  const charts = document.getElementsByClassName("fuller");

  for (let i = 0; i < charts.length; i++) {
    const chart = charts[i];
    const imgData = await htmlToImage.toPng(chart);

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    const imageWidth = pageWidth;
    const imageHeight = (pageHeight * chart.offsetHeight) / chart.offsetWidth;

    if (i !== 0) {
      doc.addPage();
    }

    doc.addImage(imgData, "PNG", 0, 0, imageWidth, imageHeight);
  }

  doc.save(`Crime.pdf`);
};
