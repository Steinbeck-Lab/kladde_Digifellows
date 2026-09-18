// @ts-check
// Docs marked with the kl-entry class are the numbered workflow entries (01, 02, …).
// Their numbers come from this order, in the sidebar, on the home index and on each page.
// An entry can hold pages of its own: it becomes a category linking to the entry, and its items
// are listed under it without numbers of their own.
// kl-about marks the pages outside the workflow: they carry no page links at the end.
// kl-team marks the portrait pages, which print their description under the name.

/** @param {string} id */
const entry = (id) => ({type: 'doc', id, className: 'kl-entry'});

/**
 * @param {string} id
 * @param {string} label
 * @param {string[]} pages
 */
const entryWithPages = (id, label, pages) => ({
  type: 'category',
  label,
  className: 'kl-entry',
  collapsible: false,
  // Categories carry no docId of their own; the entry index reads it from here.
  customProps: {docId: id},
  link: {type: 'doc', id},
  items: pages,
});

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  kladde: [
    'index',
    {
      type: 'category',
      label: 'How to start',
      collapsible: false,
      items: [entry('new-entry'), entry('reaction-scheme'), entry('snippets')],
    },
    entryWithPages('sample-analysis', 'Sample Analysis', ['ir', 'nmr', 'ms']),
    entry('report'),
    {
      type: 'category',
      label: 'About',
      className: 'kl-about',
      items: [
        'what-is-eln',
        {type: 'category', label: 'Meet our team', className: 'kl-team', items: ['christoph', 'kevin', 'kohulan', 'soyee']},
        'license',
      ],
    },
  ],
};

export default sidebars;
