/*****************************************************************************
 * Copyright (c) 2023 CEA LIST, Obeo.
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License 2.0
 * which accompanies this distribution, and is available at
 * https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *  Obeo - Initial API and implementation
 ***************************************************************************/

import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export const PrimitiveRadioIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      width="512.000000pt"
      height="512.000000pt"
      viewBox="0 0 512.000000 512.000000"
      aria-labelledby="title"
      role="img"
      {...props}>
      <g>
        <title>Primitive radio widget icon</title>
        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#333333" stroke="none">
          <path d="M2330 5110 c-199 -18 -464 -78 -649 -146 -237 -88 -529 -254 -727 -414 -101 -82 -302 -283 -384 -384 -160 -198 -326 -490 -414 -727 -124 -336 -178 -742 -146 -1097 19 -216 76 -470 146 -661 88 -237 254 -529 414 -727 82 -101 283 -302 384 -384 198 -160 490 -326 727 -414 336 -124 742 -178 1097 -146 216 19 470 76 661 146 237 88 529 254 727 414 101 82 302 283 384 384 160 198 326 490 414 727 70 191 127 445 146 661 32 355 -22 761 -146 1097 -88 237 -254 529 -414 727 -82 101 -283 302 -384 384 -198 160 -490 326 -727 414 -337 124 -747 178 -1109 146z m405 -510 c486 -46 924 -251 1269 -596 675 -676 796 -1699 298 -2514 -157 -257 -415 -515 -672 -672 -544 -333 -1188 -397 -1778 -176 -279 104 -523 262 -736 474 -625 626 -781 1564 -390 2347 378 757 1185 1214 2009 1137z" />
          <path d="M2375 3825 c-680 -95 -1155 -702 -1087 -1388 62 -625 524 -1087 1149 -1149 562 -55 1089 257 1303 773 130 311 130 687 0 998 -222 537 -778 848 -1365 766z" />
        </g>
      </g>
    </SvgIcon>
  );
};
