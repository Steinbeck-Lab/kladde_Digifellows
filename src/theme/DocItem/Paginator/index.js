/**
 * Page links at the end of an entry. Pages under About stand on their own and get none.
 * The targets follow the sidebar order, unless a page sets
 * pagination_next / pagination_prev (or pagination_next: null to end the chain) in its front
 * matter. A page can also relabel a link with pagination_next_label / pagination_prev_label.
 */
import React from 'react';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import DocPaginator from '@theme/DocPaginator';
import {ABOUT_CLASS, useDocClasses} from '@site/src/lib/entries';

const relabel = (link, label) => (link && typeof label === 'string' && label.trim() ? {...link, title: label.trim()} : link);

export default function DocItemPaginator() {
  const {metadata, frontMatter} = useDoc();
  const classes = useDocClasses(metadata.id);
  if (classes.includes(ABOUT_CLASS)) return null;
  return (
    <DocPaginator
      className="kl-paginator"
      previous={relabel(metadata.previous, frontMatter.pagination_prev_label)}
      next={relabel(metadata.next, frontMatter.pagination_next_label)}
    />
  );
}
