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

// Import custom component
import Interactive from '../assets/interactive';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');


const images = {
  city: require('../assets/city.jpg'),
  kat: require('../assets/kat.png'),
  logo: require('../assets/formidable-logo.svg'),
  markdown: require('../assets/markdown.png'),
  avatar: require('../assets/avatar_square.jpg'),
  amazeeio: require('../assets/amazeeio-logo.png'),
};

preloader(images);

const theme = createTheme({
  primary: '#9d37fc',
  secondary: '#37016b',
}, {
  primary: { name: 'Helvetica', color: 'black' },
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={['zoom', 'slide']} transitionDuration={500}>
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
            <Heading>Entering CSP!</Heading>
            <Heading textColor="white">Communicating Sequential Processes</Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
