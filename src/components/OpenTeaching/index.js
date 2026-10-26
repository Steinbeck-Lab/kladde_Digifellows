/**
 * The second action on the welcome page: the exercises that go with the practical. It takes the
 * cover label's shape in faded ink (`.kl-action2` in custom.css), quieter than Open SciPeaks
 * beside it, and its address lives in docusaurus.config.js, where the navbar item reads it too.
 */
import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {ArrowUpRight} from '@site/src/components/Icons';

export default function OpenTeaching() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Link className="kl-action2" to={siteConfig.customFields.teachingUrl}>
      Open Exercises
      <ArrowUpRight />
    </Link>
  );
}
