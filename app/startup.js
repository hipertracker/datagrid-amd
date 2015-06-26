import React from 'react'
import DataTableContainer from 'es6!app/modules/DataTableContainer'

import { columns, rows } from 'es6!./mock'
React.render(<DataTableContainer columns={columns}
                                 rows={rows}/>, document.getElementById('app'));

