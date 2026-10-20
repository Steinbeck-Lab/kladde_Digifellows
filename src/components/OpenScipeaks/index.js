/**
 * The first action on the welcome page: open Scipeaks. The link goes straight into the university
 * login, skipping the SciPeaks page that only holds a "log in with Jena University SSO" link.
 * Its address lives in docusaurus.config.js, where the navbar item reads it too.
 *
 * It returns the label and its note loose, so the page can stand this label and Open Exercises on
 * one row with the note wrapping underneath both.
 */
import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {ArrowUpRight} from '@site/src/components/Icons';
import styles from './styles.module.css';

export default function OpenScipeaks() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <>
      <Link className="kl-action" to={siteConfig.customFields.elnUrl}>
        Open Scipeaks
        <ArrowUpRight />
      </Link>
      <p className={styles.note}>
        Logging in from off campus? Connect to the Uni Jena VPN first.
      </p>
    </>
  );
}
