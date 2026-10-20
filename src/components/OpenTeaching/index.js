/**
 * The second action on the welcome page: the exercises that go with the practical. It takes the
 * same green label shape as Open Scipeaks (`.kl-action` in custom.css), and its address lives in
 * docusaurus.config.js, where the navbar item reads it too.
 */
import React from 'react';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {ArrowUpRight} from '@site/src/components/Icons';

export default function OpenTeaching() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Link className="kl-action2" to={siteConfig.customFields.teachingUrl}>
      <Translate id="kladde.teaching.label" description="Label of the link that opens the exercises">
        Open Exercises
      </Translate>
      <ArrowUpRight />
    </Link>
  );
}
