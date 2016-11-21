// @flow

import { chan, go, put, timeout } from 'js-csp';
import typeof { Channel } from 'js-csp/lib/impl/channels';

export default function example1(): Channel {
  const ch = chan();

  go(function* () {
    yield put(ch, 'test');
    yield timeout(500);
    yield put(ch, 'bar');

    ch.close();
  });

  return ch;
}
