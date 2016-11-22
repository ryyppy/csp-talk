// @flow

import React from 'react';
import { Channel } from 'js-csp/lib/impl/channels';
import { put, putAsync, chan, take, go, CLOSED } from 'js-csp';

import {
  CodePane,
  Code,
} from 'spectacle';

type Props = {
  source: string,
  runFn: () => Channel,
};

type State = {
  result?: string[],
};

export default class DemoBox extends React.Component {
  props: Props;
  state: State;

  listener: Channel;

  constructor(props: Props) {
    super(props);

    this.state = {};

    const { runFn } = props;

    const reset = () => this.setState({result: []});

    const addLine = (line: string): void => {
      const result = (
        this.state.result == null ? [line] : 
        this.state.result.concat(line)
      );
      this.setState({ ...this.state, result });
    };

    // Start polling for the click events
    const ch = chan();

    go(function * () {
      while((yield take(ch)) !== CLOSED) {
        reset();

        // After a click was received, start the routine
        const routine = runFn();

        let line;
        while((line = yield take(routine)) !== CLOSED) {
          addLine(line);
        }
      }
    });

    this.listener = ch;
  }

  render() {
    const { source } = this.props;

    const result = this.state.result || [];
    const onClick = () => putAsync(this.listener, 'clicky'); 

    return (
      <div>
      <CodePane lang="jsx" source={source} margin="20px auto" />
      <Code>{result.join('\n')}</Code>
      <input type="button" onClick={onClick} value="Run"/>
      </div>
    );
  }
}
