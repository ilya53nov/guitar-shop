import { isRejectedWithValue, Middleware, MiddlewareAPI } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

export const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!
    if (isRejectedWithValue(action)) {

      if (Array.isArray(action.payload.data.message)) {
        action.payload.data.message.map((item: string) => toast.error(item));
      }
      
      toast.error(action.payload.data.message);

    }

    return next(action)
  }