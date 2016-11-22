// @flow

// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Code,
  CodePane,
  List,
  ListItem,
  Image,
  Text,
  Deck,
  Heading,
  Slide,
  Spectacle,
} from 'spectacle';

import CodeSlide from 'spectacle-code-slide';
import DemoBox from './DemoBox';

import ex1 from '../examples/1';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');


const images = {
  // avatar: require('../assets/avatar_square.jpg'),
};

preloader(images);

const theme = createTheme({
  primary: '#9d37fc',
  secondary: '#37016b',
  tertiary: 'white',
}, {
  primary: { name: 'Helvetica', color: 'black' },
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={['zoom', 'slide']} transitionDuration={500}>
          <Slide transition={['zoom']}>
            <Heading>CSP in JavaScript:</Heading>
            <Heading textColor="secondary">Why Generators Are Awesome!</Heading>

            <Text margin="50px 0 0 0px" textColor="">Patrick Stapfer</Text>
            <Text>Twitter: @ryyppy</Text>
          </Slide>
          <Slide transition={['zoom']}>
            <Heading>Let's build a CLI 😂 </Heading>
          </Slide>
          <CodeSlide
            textSize="20"
            transition={[]}
            lang="jsx"
            code={require('!!raw!../examples/1.example')}
            ranges={[
              { loc: [0, 19], title: 'Setting the Stage!' },
              { loc: [0, 3], note: 'will recursively find a given file, starting from `cwd`'},
              { loc: [4, 7], note: 'will parse our YAML config properly'},
              { loc: [8, 11], note: 'will authenticate our user and return an access token'},
              { loc: [12, 15], note: 'will query some site information for a given sitegroup'},
              { loc: [16, 19], note: 'will output our sites... this is very basic tho'},
            ]}/>
          <CodeSlide
            textSize="20"
            transition={[]}
            lang="jsx"
            code={require('!!raw!../examples/2.example')}
            ranges={[
              { loc: [0, 17], title: '$ io list sites' },
              { loc: [0, 17], title: 'Some Async Stuff to Do!' },
              { loc: [0, 1], note: 'Let\s assume this is the function our CLI interface (yargs,..) calls'},
              { loc: [1, 4], note: 'First we need to read and parse the config-file...'},
              { loc: [5, 10], note: 'Then we need to authenticate the user...'},
              { loc: [6, 7], note: 'Note how authentication is dependent on the configPromise'},
              { loc: [12, 13], note: 'And now the ceremony of getting the context together in one then...'},
              { loc: [15, 16], note: 'FINALLY get the sites'},
              { loc: [0, 17], title: 'Not very readable...' },
            ]}/>
          <Slide transition={['zoom', 'fade']}>
            <Heading>Async / Await to the Rescue?</Heading>
          </Slide>
          <CodeSlide
            textSize="20"
            transition={[]}
            lang="jsx"
            code={require('!!raw!../examples/3.example')}
            ranges={[
              { loc: [0, 20], title: 'async / await & Promises' },
              { loc: [0, 1], note: 'We need "async function" to get "await"' },
              { loc: [2, 3], note: 'Synchronous way of working with promises' },
              { loc: [10, 15] },
              { loc: [1, 19], note: 'On error, await will throw an error...' },
              { loc: [15, 19], note: '... and end up in catch' },
              { loc: [0, 20], title: 'Neat, right?' },
              { loc: [0, 20], title: 'Not really :-(' },
              { loc: [17, 18], note: 'How do we know which error this was?' },
              { loc: [17, 18], note: 'How do we do complex error workflows?' },
              { loc: [17, 18], title: 'Let\'s try some individual error handling!' },
            ]}/>
          <CodeSlide
            textSize="20"
            transition={[]}
            lang="jsx"
            code={require('!!raw!../examples/4.example')}
            ranges={[
              { loc: [0, 34], title: 'Oh dear...' },
              { loc: [4, 11], note: 'Now we have to...' },
              { loc: [12, 25], note: '...handle...' },
              { loc: [26, 33], note: '...every single await...' },
              { loc: [9, 10], note: 'Footguns included!' },
              { loc: [23, 24], note: 'Footguns included!' },
              { loc: [0, 34], title: 'WE CAN MAKE THIS DRY, RIGHT?' },
            ]}/>
          <CodeSlide
            textSize="20"
            transition={[]}
            lang="jsx"
            code={require('!!raw!../examples/5.example')}
            ranges={[
              { loc: [0, 31], title: 'Let\'s Handle Custom Errors?' },
              { loc: [1, 3], note: 'I cannot tell you how wrong that is' },
              { loc: [1, 3], note: 'Let us assume our API wraps errors in our custom error objects' },
              { loc: [6, 19], note: 'Now we can have our original implementation' },
              { loc: [20, 28], note: 'But we\'ve got to deal with this' },
              { loc: [20, 28], note: 'Plus: No control over workflow again' },
              { loc: [20, 28], title: 'I wanted something better.' },
            ]}/>
          <Slide transition={['zoom', 'fade']}>
            <Heading margin="0px 0px 50px">Entering CSP!</Heading>
            <Heading textColor="secondary">= Communicating Sequential Processes</Heading>
          </Slide>
          <Slide transition={['zoom', 'fade']}>
            <Heading>What's that?</Heading>
            <List>
              <ListItem>Concept for concurrency in async systems</ListItem>
              <ListItem>Strong mathematical foundation</ListItem>
              <ListItem>Clojure & ClojureScript (core.async)</ListItem>
              <ListItem>Golang (goroutines)</ListItem>
              <ListItem>Channels</ListItem>
              <ListItem>Processes</ListItem>
            </List>
          </Slide>
          <CodeSlide
            textSize="20"
            transition={[]}
            lang="jsx"
            code={require('!!raw!../examples/6.example')}
            ranges={[
              { loc: [0, 12], title: 'JS-CSP Channels'},
              { loc: [0, 1] },
              { loc: [2, 3] },
              { loc: [4, 6] },
              { loc: [7, 8] },
              { loc: [4, 5] },
              { loc: [10, 11] },
              { loc: [8, 9] },
              { loc: [5, 6] },
              { loc: [11, 12] },
              { loc: [11, 12], note: 'For every put, there needs to be a take -> Otherwise blocking!'},
            ]}/>
          <CodeSlide
            textSize="20"
            transition={[]}
            lang="jsx"
            code={require('!!raw!../examples/7.example')}
            ranges={[
              { loc: [0, 12], title: 'JS-CSP Processes (go)'},
              { loc: [1, 2], note: 'takeAsync for taking values outside of processes' },
              { loc: [3, 5], note: 'take & put helper for interaction INSIDE processes' },
              { loc: [11, 19], note: 'go starts a process and returns a CHANNEL assigned to routine' },
              { loc: [13, 16], note: 'Generators pause on yield' },
              { loc: [17, 18], note: 'A returned value will be the single output of the routine Channel' },
              { loc: [11, 19], note: 'routine is now waiting for input (like a mini-thread)!' },
              { loc: [20, 27], note: 'Now we start our producer...' },
              { loc: [21, 22], note: '... put the first value in...' },
              { loc: [14, 15], note: 'take receives the value and logs it...' },
              { loc: [30, 31], note: 'take receives the value and logs it...' },

              { loc: [22, 23], note: '... put the second value in...' },
              { loc: [14, 15], note: 'take receives the value and logs it...' },
              { loc: [31, 32], note: 'take receives the value and logs it...' },

              { loc: [23, 24], note: '... and put the third value in...' },
              { loc: [14, 15], note: 'take receives the value and logs it...' },
              { loc: [32, 33], note: 'take receives the value and logs it...' },

              { loc: [23, 24], note: 'Remember: For every put, needs to be a take!' },
              { loc: [25, 26], note: 'Closing the channel will tell our routine to stop the while' },
              { loc: [14, 15], note: 'take gets a CLOSED message' },
              { loc: [17, 18], note: 'we reach the end of the goroutine (routine now contains a value)' },
              { loc: [28, 29], note: 'The routine channel now has the return value as a result...' },
              { loc: [33, 34], note: '... which will be logged here' },
              { loc: [0, 12], title: 'So how is this practical?'},
            ]}/>
          <Slide transition={['zoom', 'fade']}>
            <Text bold textSize="45" textColor="secondary">Back to Our Original Example</Text>
            <CodePane
              textSize="20"
              lang="jsx"
              source={require('!!raw!../examples/8.example')}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={['zoom', 'fade']}>
            <Text bold textSize="45" textColor="secondary">$ io list sites</Text>
            <CodePane
              textSize="20"
              lang="jsx"
              source={require('!!raw!../examples/9.example')}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={['zoom', 'fade']}>
            <Heading>``\_(ツ)_/¯</Heading>
          </Slide>
          <Slide transition={['zoom', 'fade']}>
            <Heading>Advantages</Heading>
            <List>
              <ListItem>Channels are lazy</ListItem>
              <ListItem>Error handling is more explicit</ListItem>
              <ListItem>Channels offer better composability</ListItem>
              <ListItem>Processes can easily yield progress values</ListItem>
              <ListItem>Processes can hide transient state</ListItem>
              <ListItem>Have you ever tried to cancel a Promise?</ListItem>
            </List>
          </Slide>
          <Slide transition={['zoom', 'fade']}>
            <Heading>Some Showcases</Heading>
            <List>
              <ListItem>React Component (DemoBox)</ListItem>
              <ListItem>My Current CLI WIP</ListItem>
            </List>
          </Slide>
          <Slide transition={['zoom', 'fade']}>
            <DemoBox source={require('!!raw!../examples/1.js')} runFn={ex1} />
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
