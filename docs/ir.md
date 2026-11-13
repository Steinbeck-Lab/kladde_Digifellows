---
title: IR
description: Tools for IR spectra simulation and analysis.
---
# <img class="function-icon" style="vertical-align: middle" src="../assets/ir/img_ir-tile-icon.png"> Infrared Spectroscopy (IR) 

## Walkthrough
<video muted controls alt="screen recording of uploading an IR spectrum" poster="../assets/ir/thumbnail_ir-add.png">
  <source src="../assets/ir/ir-add.mp4" type="video/mp4">
</video>

## 1. Export your IR-spectrum as `.txt`
Please consult your lab supervisor about the export of your IR dataset. `.txt` is often recommended since most of the programmes (not limited to this ELN) can interpret it well.
> Export in **wavenumber (cm<sup>-1</sup>)** and in transmittance mode **%T**.

## 2. Upload your spectrum and perform auto-peak picking

You may access the IR spectra page both from the sample page (see [Sample Analysis](../sample-analysis)), or from Home page by clicking your sample once to select then the tile "IR spectra".
1. Drag and drop your `.txt` file.
2. In the pop-up window, keep the default extension `.jdx` in filename like it is. Ideally you should have exported your `.txt` with x-values in wavenumbers (cm<sup>-1</sup>) and y-values in transmittance (\%).
3. Select the uploaded spectrum in the "List of IR files" to view. 
4. "Auto peak picking" can be performed inside the module Preferences on the right. Enter a suitable range (in *Praktikum* usually it is 400-4000 cm<sup>-1</sup>) and click "Auto peak picking". 
5. If too many or too few peaks are picked, adjust the "Min max ratio" accordingly. Depending on the quality of the spectrum this might need a few tries.
> **Manual peak picking**: Press Alt + click to pick your peaks. Inside the table "IR peaks" you may view peaks that have been picked and delete the unnecessary ones.
<details>
  <summary><strong>Controls</strong></summary> 
  <ul> 
    <li>Scroll up and down with mouse wheel/trackpad</li>
    <li>Click and drag a rectangle to zoom in. Double click to return.</li>
    <li>Press Shift and drag to move around. Double click to return.</li>
  </ul>
</details>

6. You may already assign the corresponding functional groups inside the table "IR peaks". 
7. Beneath the display module you may copy the values <img class="function-icon" alt="Export Data" src="../assets/ir/img_ir-export.png"/> and use them for your lab report. Click <img class="function-icon" alt="export as svg" src="../assets/ir/img_ir-svg.png"/> to export your spectrum as <gloss note="A scalable graphic format without losing any quality">SVG</gloss> or <img class="function-icon" alt="print" src="../assets/ir/img_ir-pdf.png"/> to save as PDF.

## 3. Compare your spectrum with simulated spectrum and literature
:::note[Coming soon: Superimposed view]

The team is currently integrating [vibrations.cheminfo](https://vibrations.cheminfo.org/) into SciPeaks to bring you this new feature to compare experimental and simulated IR spectra with superimposed view. ☕

In the meantime, the standalone application is already available, so feel free to try it out!

:::

It is very likely that you can find IR spectra of your product in the *Praktikum* in databanks recommended by your lab supervisor (e.g. [SDBS](https://sdbs.db.aist.go.jp/), [SciFinder](https://scifinder-n.cas.org/)) for comparison.

Nevertheless, if you do lack a reference spectrum for comparison, or you would like to learn about the theoretical spectrum of a compound, the **IR prediction** tool is strongly recommended.

> This tool is also very helpful for studying IR in physical chemistry.

1. On Home page select your sample. Select the tile "IR prediction" <img class="function-icon" alt="IR prediction" src="../assets/ir/img_ir-tile-icon.png">.
2. If necessary, amend your molecule in the chemical editor ([tutorial](../reaction-scheme)).
3. "Semi-empirical quantum mechanics" usually fits better. Click `Predict` to view the simulated spectrum.
> [Click here](https://docs.c6h6.org/docs/eln/uuid/10b6a7229db7dd815afcc75e77c2d6cd) to learn more about the theoretical fundamentals (e.g. force-field vs semi-empirical quantum mechanics).
4. **The simulations only consider an isolated molecule in gas phase for which the intensities and frequencies are typically different from the experimental ones.** The intensities are particularly poor for the force-field method. Also, they do not consider any broadening effects (e.g., hydrogen bonds, solvents, rotational fine structure).
5. Interactive visualisation of the vibration modes with JSMol:

    <video muted controls alt="screen recording of visualisation of IR vibration modes">
      <source src="../assets/ir/ir-predict.mp4" type="video/mp4">
    </video>
    <ol style="list-style-type: lower-alpha;"> 
      <li>Pick a specific signal in the graph and click the highlighted bar above to view the animated vibration.</li>
      <li>Click onto a mode in the list of modes to view its signal in the graph and the animated vibration</li>
      <li>Hover over an atom in the molecule shown at bottom right to see relevant vibration modes. Click a bond to see the most relevant vibration.</li>
    </ol>

> Do feel free to play around with it and come back here if you need learning tools to visualise the IR vibrations. [Click here](https://docs.c6h6.org/docs/eln/uuid/10b6a7229db7dd815afcc75e77c2d6cd#using-the-view) for further information about the simulator.
