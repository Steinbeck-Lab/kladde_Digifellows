---
title: IR
description: Tools for IR spectra simulation and analysis.
---
# <img class="function-icon" style="vertical-align: middle" src="../assets/ir/img_ir-tile-icon.png"> Infrared Spectroscopy (IR) 
## 1. Export your IR-spectrum as `.txt`
Please consult your lab supervisor about the export of your IR dataset. `.txt` is often recommended since most of the programmes (not limited to this ELN) can intepret it well.
> Export in **wavenumber (cm<sup>-1</sup>)** and in transmittance mode **%T**.

## 2. Upload your spectrum and perform auto-peak picking
<tabs>
  <tab label="From Sample Analysis">
    <p>If you come from the previous page <a href="../sample-analysis">Sample Analysis</a></p>
    <ol style="list-style-type: decimal;">
      <li>Drag and drop your <code>.txt</code> file.</li>
      <li>In the pop-up window, keep the default extension <code>.jdx</code> in filename like it is. Adjust the x- and y-units if necessary.</li>
      <li>Select a spectrum in the "List of IR files" to view. Inside the "Auto peak picking" module on the right enter the desired range and "Execute auto peak picking". If too many or too few peaks are picked, adjust the "Noise level" accordingly. Depending on the quality of the spectrum this might need a few tries.</li>
    </ol>
    <blockquote><strong>Manual peak picking</strong>: alternatively press Alt + click to pick your peaks. Inside the table "IR peaks" you may view peaks that have been picked and delete the unnecessary ones.</blockquote>
    <ol start="4">  
      <li>Above the display module you may copy the values (either wavelengths and wavenumbers or just the wavenumbers) and use them for your lab report. Click <img class="function-icon" alt="export as svg" src="../assets/ir/img_ir-svg.png"/> to export your spectrum as <gloss note="A scalable graphic format without losing any quality">SVG</gloss> or <img class="function-icon" alt="print" src="../assets/ir/img_ir-pdf.png"/> to save as PDF.</li>
    </ol>
  </tab>
  <tab label="From Home page">
      <p>If you start from Home page:</p>
      <ol style="list-style-type: decimal;">
        <li>Click your sample once to select, and select the tile "IR spectra" <img class="function-icon" src="../assets/ir/img_ir-tile-icon.png">.</li>
        <li>Drag and drop your <code>.txt</code> file. In the pop-up window, keep the default extension <code>.jdx</code> in filename like it is. Adjust the x- and y-units if necessary.</li>
        <li>Select a spectrum in the "List of IR files" to view.</li>
        <li>Inside the module "Preferences" on the right go directly to "Auto peak picking parameters" and enter the desired range and start "Auto peak picking" (we may ignore the settings above at the moment). If too many or too few peaks are picked, adjust the "Min max ratio" accordingly. Depending on the quality of the spectrum this might need a few tries.</li>
      </ol>
      <blockquote><strong>Manual peak picking</strong>: alternatively press Alt + click to pick your peaks. Inside the table "IR peaks" you may view peaks that have been picked and delete the unnecessary ones.</blockquote>
      <ol start="4">  
        <li>Beneath the display module you may copy the values (either wavelengths and wavenumbers or just the wavenumbers) by clicking <img class="function-icon" alt="copy values" src="../assets/ir/img_ir-export.png"/> and use them for your lab report. Click <img class="function-icon" alt="export as svg" src="../assets/ir/img_ir-svg.png"/> to export your spectrum as <gloss note="A scalable graphic format without losing any quality">SVG</gloss> or <img class="function-icon" alt="print" src="../assets/ir/img_ir-pdf.png"/> to save as PDF.</li>
      </ol>
      <blockquote><a href="https://docs.c6h6.org/docs/eln/uuid/3fc7caa33b9b3eb50bb48920f4788725">Click here</a> to learn more about other functions in the IR analysis tool (e.g. advanced setup in "Preferences").</blockquote>
  </tab>
</tabs>


## 3. Compare your spectrum with simulated spectrum and literature
It is very likely that you can find IR spectra of your product in the *Praktikum* in databanks recommended by your lab supervisor (e.g. [SDBS](https://sdbs.db.aist.go.jp/), [SciFinder](https://scifinder-n.cas.org/)) for comparison.

Nevertheless, if you do lack a reference spectrum for comparison, or you would like to learn about the theoretical spectrum of a compound, the **IR prediction** tool is strongly recommended.

> This tool is also very helpful for studying IR in physical chemistry.

1. On Home page select your sample. Select the tile "IR prediction" <img class="function-icon" src="../assets/ir/img_ir-tile-icon.png">.
2. If necessary, amend your molecule in the chemical editor ([tutorial](../reaction-scheme)).
3. "Semi-empirical quantum mechanics" more often fits better. Click `Predict` to view the simulated spectrum.
> [Click here](https://docs.c6h6.org/docs/eln/uuid/10b6a7229db7dd815afcc75e77c2d6cd) to learn more about the theoretical fundamentals (e.g. force-field vs semi-empirical quantum mechanics).
4. **The simulations only consider an isolated molecule in gas phase for which the intensities and frequencies are typically different from the experimental ones.** The intensities are particularly worse for the force-field method. Also, they do not consider any broadening effects (e.g., hydrogen bonds, solvents, rotational fine structure).
5. Interactive visualisation of the vibration modes with JSMol:

    <video muted controls alt="screen recording of visualisation of IR vibration modes">
      <source src="../assets/ir/ir-predict.mp4" type="video/mp4">
    </video>
    <ol style="list-style-type: lower-alpha;"> 
      <li>Pick a specific signal in the graph and click the highlighted bar above to view the animated vibration.</li>
      <li>Click onto a mode in the list of modes to view of signal in graph and the animated vibration</li>
      <li>Hover at an atom in molecule shown at bottom right to see relevant vibration modes. Click a bond to the most relevant vibration.</li>
    </ol>

> Do feel free to play around with it and come back here if you need learning tools to visualise the IR vibrations. [Click here](https://docs.c6h6.org/docs/eln/uuid/10b6a7229db7dd815afcc75e77c2d6cd#using-the-view) for further information about the simulator.
