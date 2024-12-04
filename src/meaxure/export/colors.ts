// Copyright 2020 Jebbs. All rights reserved.
// Use of this source code is governed by the MIT
// license that can be found in the LICENSE file.

import { parseColor } from '../helpers/styles';
import { SMColorAsset } from '../interfaces';

export function getDocumentColors(document: Document): SMColorAsset[] {
  let sw = document.swatches;
  if (sw && sw.length)
    return sw.map((s) => ({
      name: (s as any).name,
      color: parseColor(s.color),
    }));
  return [];
}
