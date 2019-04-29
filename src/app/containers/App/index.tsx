import * as React from 'react';
import { GifComponent } from '../../components'
import './style.less';

export class App extends React.Component {

  render() {
    return (
      <div className={'container'}>
        {'Simple React'}
        <GifComponent />
      </div>
    );
  }
}
