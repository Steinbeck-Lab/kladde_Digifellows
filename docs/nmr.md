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
      <li>From Kladde
        <br>Select a sample, and click "NMR request" <img class="function-icon" alt="NMR request" src="../assets/nmr/img_nmr-NMR-request2.png">.</li>
    </ul>
    <p>Fill in the request form accordingly. Please consult your practical supervisor or your supervising assistant for details.</p>
  </tab>
  <tab label="Upload existing NMR data">
    <p>If the sample has already been measured or the NMR data already exists (download your NMR data <code>.zip</code> from <a href="https://data.nmr.uni-jena.de/service/#samples">LOGS</a> if necessary):</p>
    <ol>
      <li>Open Kladde. Select your sample on Home page and click "Upload NMR spectra" <img class="function-icon" alt="Upload NMR spectra" src="../assets/nmr/img_nmr-upload.png">.</li>
      <li>Drag and drop the original <code>.zip</code> folder (also compatible for folder with two measurements, e.g. 1H + 13C).  If a pop-up window is prompted, enter a customised name for the file with <code>.jdx</code> extension (e.g. <code>CSY001-SM-Fr1-13C.jdx</code>). Information about the spectrum/spectra would be automatically extracted and shown <font color="red">above the spectrum preview. </font></li>
      <!--sepctrum preview is still stale -->
    </ol>
  </tab>
</tabs>

Once the NMR data is ready or successfully uploaded, a tag(s) is shown next to the sample on the Home page. The number in the tag indicates the number of spectra of that kind attached to this sample. 

<video muted autoplay loop alt="screen recording of uploading NMR spectra">
  <source src="../assets/nmr/nmr-1.mp4" type="video/mp4">
</video>


## 2. Analyse NMR data
1. Return to Home page. Select a sample and click \"Analyse NMR\" <img class="function-icon" alt="Analyse NMR" src="../assets/nmr/img_nmr-analyse.png">
2. You may download your NMR data by clicking <img class="function-icon" alt="Download raw data" src="../assets/nmr/img_nmr-download.png"> at the top right corner.
> Check out the <a href="https://docs.nmrium.org/">User manual <img class="function-icon" alt="User manual" src="../assets/nmr/img_nmr-user-manual.png"></a> and the <a href="https://www.nmrium.com/tutorials/spectroscopists/overview">NMRium tutorials <img class="function-icon" alt="NMRium tutorials" src="../assets/nmr/img_nmr-tutorials.png"></a> for detailed intructions.
3. Switch between tabs to view the corresponding spectrum. You may hide spectra if you have multiple ones for that experiment.
4. Click \"Range picking and multiplet analysis". Either use <img class="function-icon" alt="Auto ranges picking" src="../assets/nmr/img_nmr-auto-ranges-picking.png"> or left click and drag to select specific peaks. View the information about the signals on the right in "Ranges / Multiplet analysis". 
5. Select the suitable "Kind" (e.g. NMR solvent for CDCl<sub>3</sub> signals) if needed. Toggle labels you need with the buttons above the table.
6. Point at the peak of choice, click <img class="function-icon" alt="Assign multiplet" src="../assets/nmr/img_nmr-assign-multiplet.png"> and select the corresponding atoms in the module "Chemical structures" on the right or click <img class="function-icon" alt="Float molecule" src="../assets/nmr/img_nmr-float-molecule.png"> to display the molecule inside the spectrum window for the assignment. Add customised assignment labels by clicking <img class="function-icon" alt="Add assignment label" src="../assets/nmr/img_nmr-add-assignment-labell.png"> or enter them under \"Assignment\" in \"Range picking and multiplet analysis".
  > Visit the link [Simple 1D assignment](https://docs.nmrium.org/help/assignment) for tutorial clips and further information. 
7. Click <img class="function-icon" alt="Display publication string" src="../assets/nmr/img_nmr-display-publication-string.png"> and copy the generated string for your lab report.

## 3. Compare with predicted spectra
1. If you would like to compare the predicted spectrum of your sample, click <img class="function-icon" alt="Predict spectra" src="../assets/nmr/img_nmr-predict-spectrum.png">, adjust the parameters if necessary (e.g. higher frequency) and select the type(s) of spectra. Then \"Predict spectrum".
2. Inside the tab of the chosen type a new spectrum is generated. You may change the colour of it by clicking the square on the right or click <img class="function-icon" alt="Distinct spectra coloring" src="../assets/nmr/img_nmr-colour.png"> for automatic contrast coluoring.
3. On the left toggle with <img class="function-icon" alt="Stack spectra" src="../assets/nmr/img_nmr-stack-spectra.png"> to view the predicted and measured spectra in stacked mode or both aligned at the bottom.

## Other NMR tools
The rest of the tools powered by NMRium are excellent for prediction and also as learning tools.
<details>
  <summary><strong><img class="function-icon" style="height:3rem" alt="NMR prediction" src="../assets/nmr/img_nmr-predict.png"> NMR prediction</strong></summary>
  This tools allows predication of NMR spectra of molecules without having to add a sample on your ELN. If you would like to compare the predicted NMR spectra of your existing sample, see Step 8 in <b>2. Analyse NMR data</b> above.
</details>
<details>
  <summary><strong><img class="function-icon" style="height:3rem" alt="NMR simulation" src="../assets/nmr/img_nmr-simulation.png"> NMR simulation</strong></summary>
  This tool allows simulation of second order effect in NMR 1H spectra based on coupling constants, chemical shifts and different spin systems up to ABCDEFGH (roofing effect, AB/AX/ABX-system etc.).
</details>
<details>
  <summary><strong><img class="function-icon" style="height:3rem" alt="Multiplet simulator" src="../assets/nmr/img_nmr-multiplet-sim.png"> Multiplet simulator</strong></summary>
  This tool demonstrates the shape of a signal in NMR 1H spectra (nuclear spin I = 1/2) the corresponding dendogram based on user-defined coupling constants and multiplicities. Secondary effects are neglected here.
</details>
