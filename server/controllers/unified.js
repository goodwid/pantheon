import { UNIFIED_KEEP_ALIVE_INTERVAL } from 'constants';
import { FETCH_UNIFIED_ID } from 'ducks/devices';
import store from 'store';

const unifiedController = (next) => ({
  initialize() {
    const keepAlive = () => store.dispatch({
      type: FETCH_UNIFIED_ID,
      next
    });

    keepAlive();

    setInterval(keepAlive, UNIFIED_KEEP_ALIVE_INTERVAL);
  }
});

export default unifiedController;
