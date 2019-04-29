import * as React from 'react';
import { SearchComponent } from '../search';


export class GifComponent extends React.Component {
    constructor(props: any) {
        super(props);
        console.log('props  ', props);
    }

    onSearch = (value: string) => {
        console.log(value);
    }

    render() {
        return (
            <div>
                <span>{'dffsdf'}</span>
                <SearchComponent onSearch={this.onSearch} />
            </div>
        );
    }
}
