import React from 'react';
import { AnchorHTMLAttributes } from 'react';

export function OutLink(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a {...props} target='_blank' rel='noreferrer' />;
}
