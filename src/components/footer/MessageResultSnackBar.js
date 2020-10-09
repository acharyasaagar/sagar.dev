import React, { useState } from 'react'

import Alert from '@material-ui/lab/Alert'
import Snackbar from '@material-ui/core/Snackbar'

const MessageResultSnackBar = props => {
  return (
    <div>
      <Snackbar
        open={props?.snackBar?.open}
        autoHideDuration={6000}
        onClose={props?.snackBar?.onClose}
      >
        <Alert
          onClose={props?.snackBar?.onClose}
          severity={props?.snackBar?.severity}
          variant="filled"
        >
          {props?.snackBar?.message}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default MessageResultSnackBar
