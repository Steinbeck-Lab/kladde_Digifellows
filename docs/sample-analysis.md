---
title: Sample Analysis
description: Entry for information such as melting point, GC-result and IR-spectra.
---

> *The following instructions are only based on OC2-Praktikum.*

## 1. Click `Add product`

1. Enter your customised batch name. Personally I suggest using numbers only (e.g. "001"). 
2. A pop-up window would prompt you to specify the molecule for this product, which is already standing in your scheme. Information of the molecule such as the molecular formula, molecular weight and the theoretical yield would be generated automatically. Your product has by default 100% purity. 
3. You may now enter `g` and the yielding would be calculated automatically. If you have collected different fractions of products and side products, you may specify them in `kind` next to theoretical yield.

## 2. Click view <img alt="View this products's associated sample (create if it does not exist)" style="width:.75em; vertical-align:centre; margin: 0 0.25em 0 0" src="../assets/images/img_sample-analysis-view.png">

Now you should land on the sample page. Alternatively you may access each specifc sample page through double clicking the sample on the Home page, or through selecting the sample and clicking the "Open/edit sample" tile.

> The following information targets only *OC2-Praktikum*.

<details>
  <summary><strong>Overview</strong> Overview of general information of your sample</summary> 
  The "Title" of your sample can be any customised name and can be edited in any of the following tabs. 

  The overview of general information such as the molecular formula and molecular weight, IR and NMR data etc. can be printed as PDF here. A barcode is automatically generated specifcally to this sample.
</details>

<details class="kl-static">
  <summary><strong>Stock</strong>Stock information about the sample (e.g. location).</summary>
</details>

<details>
  <summary><strong>Safety</strong> GHS, H- & P-statements</summary>
  Safety information that was imported into the reagent table in ELN is not synchronized here, since this page is designated for syntheses of customised schemes in researches. If necessary you may add your GHS, H- and P-statements here manually.
</details>

<details>
  <summary><strong>Physical</strong> Entries of the physical properties of your sample</summary> 
    <ul>
      <li><b>bp [°C]</b> , <b>mp [°C]</b>: boiling point and melting point. Add the corresponding DOI for literature values, and add your own experimental value by clicking <img img alt="add" style="height:1.25em; vertical-align:center; margin: 0 0.25em 0 0;" src="../assets/images/img_sample-analysis-phy-add.png">, remove with <img img alt="remove" style="height:1.25em; vertical-align:center; margin: 0 0.25em 0 0" src="../assets/images/img_sample-analysis-phy-remove.png"></li>
      <li><font color="red"> <!--review meaning --><b>nd</b>: refractive index</font></li>
      <li><font color="red"><!---- review meaning ---><b>[&#945]</b>: optical activty / rotation </font></li>
      <li><font color="red"><!---- review meaning of "low" and "high" --->
    <b>Rf</b>: retention factor for thin-layer chromatorgraphy (TLC). The outer <img class="function-icon" alt="add" src="../assets/images/img_sample-analysis-phy-add.png">/ <img class="function-icon" alt="remove" src="../assets/images/img_sample-analysis-phy-remove.png"> for each TLC performed. The inner <img class="function-icon" alt="add" src="../assets/images/img_sample-analysis-phy-add.png">/ <img alt="remove" class="function-icon" src="../assets/images/img_sample-analysis-phy-remove.png"> for each solvent used. 
    <p>Select the solvent used, the ratio of the solvent system (eluent), plate used, enter the measured distance the spot traveled in "low" and that of the eluent front in "high", then enter the calculated Rf in the empty field on the right.</p>
    <img alt="calculation of Rf" src="../assets/images/img_sample-analysis-tlc.png">
    </font></li>
  </ul>
</details>

<details>
  <summary><strong>Spectra</strong>Overview of attached spectra (e.g. IR, NMR, UV/Vis etc.) of your sample</summary>
  Upon clicking any attached spectrum shown on the right you may view your spectrum here. For addition of spectra and data analysis, click the coloured dot on the top right corner of the tile to open the corresponding page.
  <img alt="click the coloured at the top right corner of the tile to visit analysis page" src="../assets/images/img_sample-analysis-tile-dot.png">
  <p style="margin: 1rem 0;">For more information please visit <a href="../ir/">IR</a>, <a href="../nmr/">NMR</a> and <a href="../ms/">MS</a>.</p>
</details>

<details>
  <summary><strong>Images</strong>Attachment of images e.g. photos of your TLC.</summary>
  Supported formats: <code>.tiff</code>, <code>.png</code>, <code>.gif</code> and <code>.jpeg</code>. For more information <a href="https://docs.c6h6.org/docs/eln/samples/sample-edition/images/">click here</a>.
</details>

<details>
  <summary><strong>Molecule</strong>Chemical editor and identifier of the sample</summary>
  <img alt="layout of the page" src="../assets/images/img_sample-analysis-molecule-overview.png">
    <ol style="margin: 1rem 0">
      <li>If you write a title in this tab, it will be automatically updated in the `Title` tab of the over views and will appear in the final report. <a href="https://docs.c6h6.org/docs/eln/samples/sample-edition/includes/titletab/">Click here</a> for more information.</li>
      <li>The keywords appear in the main table of the homepage. You would be able to search for your sample in the homepage according to those keywords.</li>
      <li>If necessary you may edit the chemical structure of a specifc sample of yours here (e.g. E/Z diastereomers). The new molecular formula and molecular weight will be automatically calculated, and the structure will be updated in all views of this tile.</li>
      <li>If you change the molecular formula, the new one will appear in the report.</li>
      <li>The canonized molecular formula depends directly on the molecular formula. It is updated every time the molecular formula changes.</li>
      <li> <a href="https://en.wikipedia.org/wiki/Mass_(mass_spectrometry)#Exact_mass">Exact mass</a> and molecular weight, calculated from the molecular formula.</li>
      <li> Information about the molecular formula: monoisotopic mass, unsaturation and element analysis.</li>
      <li>IUPAC names and synonyms. Different languages can be used and are specified according to the <a href="https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes">ISO country codes</a>.</li>
    </ol>
</details>

<details class="kl-static">
  <summary><strong>Biomolecules</strong>Records of peptidic or nucleic sequences for biochemical analysis.
</details>

## 3. Use your product in multi-step syntheses
For a multi-step synthesis you may use the product code of your product in the previous synthesis in the next entry. You can find the product code on the top left corner on the sample page.

<img style="width: var(--kl-measure)" alt="product code on the top left corner of sample page" src="../assets/images/img_sample-analysis-product-code.png"/>

<details>
  <summary>Can't I just create the product sample from the beginning and add it to my reaction scheme?</summary>
 You can, but first you have to have the chemical structure in your scheme (aka. the chemical editor). Otherwise you are just creating an empty product sample and all the automatic calculations in the background would not run. Plus the reagent list is originally not designed for a backward calculation like we do in the <i>Praktikum</i>. The suggested workflow is actually more or less "exploiting" the features.
</details>

## `Add empty sample` and Related samples
- `Add product` is designated for the product you obtained in the synthesis of this entry. `Add sample` can be used e.g. for a specific reagent of a specific batch in your synthesis.
