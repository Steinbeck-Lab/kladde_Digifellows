import {useMemo} from 'react';
import {useDocsSidebar} from '@docusaurus/plugin-content-docs/client';

export const ENTRY_CLASS = 'kl-entry';
export const ABOUT_CLASS = 'kl-about';
export const TEAM_CLASS = 'kl-team';

const classesOf = (item) => (item.className ?? '').split(/\s+/).filter(Boolean);
const isEntry = (item) => classesOf(item).includes(ENTRY_CLASS);
const pageOf = (item) => ({docId: item.docId, href: item.href, label: item.label});

function collect(items, section, out) {
  for (const item of items) {
    if (item.type === 'category' && isEntry(item)) {
      // An entry with pages of its own: the category links to the entry, its items are the pages.
      out.push({
        number: String(out.length + 1).padStart(2, '0'),
        docId: item.customProps?.docId,
        href: item.href,
        label: item.label,
        section,
        pages: item.items.filter((page) => page.type === 'link').map(pageOf),
      });
    } else if (item.type === 'category') {
      collect(item.items, item.label, out);
    } else if (item.type === 'link' && item.docId && isEntry(item)) {
      out.push({
        number: String(out.length + 1).padStart(2, '0'),
        docId: item.docId,
        href: item.href,
        label: item.label,
        section,
        pages: [],
      });
    }
  }
  return out;
}

/** The numbered workflow entries, in sidebar order. */
export function useEntries() {
  const sidebar = useDocsSidebar();
  return useMemo(() => (sidebar ? collect(sidebar.items, null, []) : []), [sidebar]);
}

function findClasses(items, docId, inherited) {
  for (const item of items) {
    const classes = [...inherited, ...classesOf(item)];
    if (item.type === 'category') {
      if (item.customProps?.docId === docId) return classes;
      const found = findClasses(item.items, docId, classes);
      if (found) return found;
    } else if (item.type === 'link' && item.docId === docId) {
      return classes;
    }
  }
  return null;
}

/** The sidebar classes of a doc: its own and those of the categories above it. */
export function useDocClasses(docId) {
  const sidebar = useDocsSidebar();
  return useMemo(() => (sidebar && findClasses(sidebar.items, docId, [])) || [], [sidebar, docId]);
}
