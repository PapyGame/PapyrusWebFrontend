/*******************************************************************************
 * Copyright (c) 2021, 2023 Obeo.
 * This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v2.0
 * which accompanies this distribution, and is available at
 * https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *     Obeo - initial API and implementation
 *******************************************************************************/
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useFooterStyles = makeStyles((theme) => ({
  footer: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(2),
    '& > *': {
      marginLeft: theme.spacing(0.5),
      marginRight: theme.spacing(0.5),
    },
  },
}));

export const Footer = () => {
  const classes = useFooterStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant="caption">&copy; {new Date().getFullYear()} Obeo. Powered by </Typography>
      <Link
        variant="caption"
        href="https://gitlab.eclipse.org/eclipse/papyrus/org.eclipse.papyrus-web"
        rel="noopener noreferrer"
        target="_blank">
        Papyrus Web
      </Link>
    </footer>
  );
};
