---
title: NMR
description: Tools for NMR spectra simulation and analysis, powered by NMRium.
---
# Nuclear Magnetic Resonance (NMR)
The [NMR Platform FSU Jena](https://www.nmr.uni-jena.de/de/index.php) has already integrated the ELN SciPeaks for sample requests and analyses. For further information, you may visit the website or refer directly to the slides [here](https://www.nmr.uni-jena.de/downloads/lehre/NMR-Seminar1_vs100726_pdf.pdf) (log in with URZ credentials, e.g. ab12cde).

## 1. Attach your NMR data
> Your sample should already be listed before creating the request. If it does not come from any of your ELN entries (not a product), click <img class="function-icon" alt="add sample" src="../assets/nmr/img_nmr-add-sample.png"> above the list to create one.
><dl><dt><strong>Reference</strong></dt><dd>initials + number (e.g. Max Mustermann first synthesis = "MM001")</dd><dt><strong>Batch</strong></dt><dd>a customised sample name specific to your fraction <br>(e.g. Sandmeyer, first fraction = "SM-Fr1")</dd></dl>

<tabs>
  <tab label="Create measurement request"> 
    <p>If the sample has not yet been measured:</p>
    <ul>
      <li>From <a href="https://www.nmr.uni-jena.de/de/index.php">NMR Platform FSU Jena</a>
        <ol style="list-style-type: decimal">
          <li>Click "Create measurement request". The redirected ELN home page looks slightly different from Kladde.</li>
          <li>Go to the "NMR" tab, select a sample, click "NMR request" <img class="function-icon" alt="NMR request" src="../assets/nmr/img_nmr-NMR-request.png">.</li>
        </ol>
      <li>From Kladde</li>
        <description>Select a sample, and click "NMR request" <img class="function-icon" alt="NMR request" src="../assets/nmr/img_nmr-NMR-request2.png">.</description>
    </ul>
    <p>Fill in the request form accordingly. Please consult your practical supervisor or your supervising assistant for details.</p>
  </tab>
  <tab label="Upload existing NMR data">
    <p>If the sample has already been measured or the NMR data already exists (download your NMR data <code>.zip</code> from <a href="https://data.nmr.uni-jena.de/service/#samples">LOGS</a> if necessary):</p>
    <ol>
      <li>Open Kladde. Select your sample on Home page and click "Upload NMR spectra" <img class="function-icon" alt="Upload NMR spectra" src="../assets/nmr/img_nmr-upload.png">.</li>
      <li>Drag and drop the original <code>.zip</code> folder (also compatible for folder with two measurements, e.g. 1H + 13C). Information about the spectrum/spectra would be automatically extracted and shown <font color="red">above the spectrum preview. </font></li>
      <!--sepctrum preview is still stale -->
      <!--If a pop-up window is prompted, enter a customised name for the file with <code>.jdx</code> extension (e.g. <code>CSY001-SM-Fr1-13C.jdx</code>).  -->
    </ol>
</tabs>


## 2. Analyse NMR data
1. Return to Home page. Select a sample and click "Analyse NMR"
