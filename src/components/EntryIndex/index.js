/**
 * The notebook index: every numbered workflow entry as a full-width label
 * (number, title, section, description).
 * An entry that holds pages of its own shows them as labels on the line below it, sharing its number.
 */
import React from 'react';
import Link from '@docusaurus/Link';
import {translate} from '@docusaurus/Translate';
import {useDocById} from '@docusaurus/plugin-content-docs/client';
import {useEntries} from '@site/src/lib/entries';
import styles from './styles.module.css';

function Page({page}) {
  const doc = useDocById(page.docId);

  return (
    <li>
      <Link to={page.href} className={styles.page}>
        <span className={styles.pageTitle}>{page.label}</span>
        {doc?.description && <span className={styles.pageDescription}>{doc.description}</span>}
      </Link>
    </li>
  );
}

function Entry({entry}) {
  const doc = useDocById(entry.docId);

  return (
    <li className={styles.item}>
      <Link to={entry.href} className={styles.link}>
        <span className={styles.number} aria-hidden="true">
          {entry.number}
        </span>
        <span className={styles.title}>{entry.label}</span>
        {entry.section && <span className={styles.section}>{entry.section}</span>}
        {doc?.description && <span className={styles.description}>{doc.description}</span>}
      </Link>
      {entry.pages.length > 0 && (
        <ul className={styles.pages}>
          {entry.pages.map((page) => (
            <Page key={page.href} page={page} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function EntryIndex() {
  const entries = useEntries();
  return (
    <ol
      className={styles.index}
      aria-label={translate({
        id: 'kladde.index.label',
        message: 'Entries of the Kladde workflow',
        description: 'Accessible name of the numbered entry index on the home page',
      })}>
      {entries.map((entry) => (
        <Entry key={entry.docId} entry={entry} />
      ))}
    </ol>
  );
}
