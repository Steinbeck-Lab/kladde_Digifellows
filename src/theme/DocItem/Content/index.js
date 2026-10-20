/**
 * Every page opens like a notebook entry, above a condition line of ruled boxes: the entry number
 * and the date of the last update.
 *
 * The markdown container repeats @theme-original/DocItem/Content, so that a portrait page can
 * print its description under the name as a subtitle, inside the same title header.
 */
import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import Heading from '@theme/Heading';
import MDXContent from '@theme/MDXContent';
import {TEAM_CLASS, useDocClasses, useEntries} from '@site/src/lib/entries';
import styles from './styles.module.css';

const HOME_ENTRY_NUMBER = '00';

function Markdown({children, subtitle}) {
  const {metadata, frontMatter, contentTitle} = useDoc();
  // The theme's rule: show the front-matter title unless the page opens with its own h1.
  const title = !frontMatter.hide_title && contentTitle === undefined ? metadata.title : null;

  return (
    <div className={clsx(ThemeClassNames.docs.docMarkdown, 'markdown')}>
      {title && (
        <header>
          <Heading as="h1">{title}</Heading>
          {subtitle && <p className="kl-subtitle">{subtitle}</p>}
        </header>
      )}
      <MDXContent>{children}</MDXContent>
    </div>
  );
}

function formatDate(timestamp, locale) {
  return new Intl.DateTimeFormat(locale, {day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC'}).format(
    new Date(timestamp),
  );
}

export default function ContentWrapper(props) {
  const {metadata, frontMatter} = useDoc();
  const {i18n} = useDocusaurusContext();
  const entry = useEntries().find((item) => item.docId === metadata.id);
  const isHome = metadata.id === 'index';
  const number = entry?.number ?? (isHome ? HOME_ENTRY_NUMBER : undefined);
  const isProfile = useDocClasses(metadata.id).includes(TEAM_CLASS);

  return (
    <div
      className={clsx('kl-page', isHome && 'kl-page--home', entry && 'kl-page--entry')}
      style={entry ? {'--kl-entry-number': `"${entry.number}"`} : undefined}>
      <div className={clsx(styles.strip, 'kl-condition')}>
        <dl className={styles.condition}>
          {number && (
            <div>
              <dt>Entry</dt>
              <dd>{number}</dd>
            </div>
          )}
          {metadata.lastUpdatedAt && (
            <div>
              <dt>Updated</dt>
              <dd>{formatDate(metadata.lastUpdatedAt, i18n.currentLocale)}</dd>
            </div>
          )}
        </dl>
      </div>
      <Markdown subtitle={isProfile ? frontMatter.description : undefined}>{props.children}</Markdown>
    </div>
  );
}
