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
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {ArrowUpRight} from '@site/src/components/Icons';
import styles from './styles.module.css';

export default function OpenScipeaks() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <>
      <Link className="kl-action" to={siteConfig.customFields.elnUrl}>
        <Translate id="kladde.open.label" description="Label of the link that opens the ELN">
          Open Scipeaks
        </Translate>
        <ArrowUpRight />
      </Link>
      <p className={styles.note}>
        <Translate id="kladde.open.vpn" description="Reminder to use the university VPN when logging in from outside">
          Logging in from off campus? Connect to the Uni Jena VPN first.
        </Translate>
      </p>
    </>
  );
}
