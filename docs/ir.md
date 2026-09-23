---
title: IR
description: Tools for IR spectra simulation and analysis.
---
[With IR Spectra, not Sample: IR spectra]: #
# Infrared Sepctroscopy (IR)
## 1. Export your IR-spectrum as `.txt`
Please consult your lab supervisor about the export of your IR dataset. `.txt` is often recommended since most of the programmes (not limited to this ELN) can intepret it well.
> Export in **wavenumber (cm<sup>-1</sup>)** and in transmittance mode **%T**.

## 2. Upload your spectrum and perform auto-peak picking
### If you come from the previous page [Sample Analysis](../sample-analysis):
1. After <gloss note="see under Spectra"> <a href="../sample-analysis#2-click-view-">clicking the red dot of the IR tile</a></gloss> and landing on the IR page, drag and drop your `.txt` file.
2. In the pop-up window, keep the default extention `.jdx` in filename like it is. Adjust the x- and y-units if necessary.
3. Click the filename in "Spectra" to view the spectrum below. Inside the "Auto peak picking" module on the right enter the desired range and `Execute auto peak picking`. If too many or too few peaks are picked, adjust the "Noise level" accordingly. Depending on the quality of the spectrum this might need a few tries.
  > **Manual peak picking**: alternatively press Alt + click to pick your peaks. Inside the table "IR peaks" you may view peaks that have been picked and delete the unnecessary ones. 
4. Above the display module you may copy the values (either wavelengths and wavenumbers or just the wavenumbers) and use them for your lab report. Click <img class="function-icon" src="../assets/images/img_ir-svg.png"/> to export your spectrum as <gloss note="A scalable graphic format without losing any quality">SVG</gloss> or <img class="function-icon" src="../assets/images/img_ir-pdf.png"/> to save as PDF.

### If you start from Home page:
1. Click your sample once to select, and select the tile "IR spectra".
2. Drag and drop your `.txt` file. In the pop-up window, keep the default extention `.jdx` in filename like it is. Adjust the x- and y-units if necessary. 
3. Click the filename in the "List of IR files" to view your spectrum. 
4. Inside the module "Preferences" on the right go directly to "Auto peak picking parameters" and enter the desired range and start `Auto peak picking` (we may ignore the settings above at the moment). If too many or too few peaks are picked, adjust the "Min max ratio" accordingly. Depending on the quality of the spectrum this might need a few tries.
  > **Manual peak picking**: alternatively press Alt + click to pick your peaks. Inside the table "IR peaks" you may view peaks that have been picked and delete the unnecessary ones. 
5. Beneath the display module you may copy the values (either wavelengths and wavenumbers or just the wavenumbers) by clicking <img class="function-icon" src="../assets/images/img_ir-export.png"/> and use them for your lab report. Click <img class="function-icon" src="../assets/images/img_ir-svg.png"/> to export your spectrum as <gloss note="A scalable graphic format without losing any quality">SVG</gloss> or <img class="function-icon" src="../assets/images/img_ir-pdf.png"/> to save as PDF.

>[Click here](https://docs.c6h6.org/docs/eln/uuid/3fc7caa33b9b3eb50bb48920f4788725) to learn more about other functions in the IR analysis tool (e.g. advanced setup in "Preferences").

## 3. Compare your spectrum with simulated spectrum and literature
It is very likely that you can find IR spectra of your product in the *Praktikum* in databanks recommended by your lab supervisor (e.g. [SDBS](https://sdbs.db.aist.go.jp/), [SciFinder](https://scifinder-n.cas.org/)) for comparison.

Nevertheless, if you do lack a reference spectrum for comparison, or you would like to learn about the theoretical spectrum of a compound, the **IR prediction** tool is strongly recommended.

> This tool is also very helpful for studying physical chemistry about IR.

1. On Home page select your sample. Select the tile "IR prediction".
2. If necessary, amend your molecule in the [chemical editor](../reaction-scheme).
3. For most cases "semi-empirical quantum mechanics" delivers good results already. Click `Predict` to view the simulated spectrum.
4. **The tool is simulating the location of ground tones and possible overtones of the molecule!** Thus e.g. typical broad signales from amines and alkohol resulted from intermolecular bonding would not be depicted. Combined signales, Fermi-resonance etc. might also be something you see in your sample but not in the theoretical spectrum.
5. Upon hovering at the "modes" in the table the corresponding vibrations would be visualised on the right in "JSMol animation" and the bond(s) involved would be highlighted in the bottom-right module.

> So feel free to play around with it and come back here if you need learning tools to visualise the IR vibrations for studying physical chemistry.

> [Click here](https://docs.c6h6.org/docs/eln/uuid/10b6a7229db7dd815afcc75e77c2d6cd) to learn more about the theoretical fundamentals behind the predication tool.
