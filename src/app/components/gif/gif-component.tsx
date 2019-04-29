import * as React from 'react';
import { SearchComponent } from '../search';
import { httpService } from '../../services'
import { apiKey, searchUrl } from '../../config/constant'
import { GifsGrid } from './gifs-grid'
import './gifs.less';

interface IGifComponentState {
    offset: number;
    searchString: string;
    gifsArray: Array<any>;
}

export class GifComponent extends React.Component<{}, IGifComponentState> {
    constructor(props: any) {
        super(props);
        this.state = {
            offset: 0,
            searchString: '',
            gifsArray: []
        };
    }

    onSearch = (value: string) => {
        this.setState({
            searchString: value,
            offset: 0
        }, () => {
            this.fetchData();
        })

    }

    fetchData = () => {
        let { offset, searchString } = this.state;
        const url = `${searchUrl}?q=${searchString}&api_key=${apiKey}&limit=20&offset=${offset}`;
        httpService(url).then(data => {
            console.log(data)
            this.setState({
                offset: ++offset,
                gifsArray: [...this.state.gifsArray, ...data.data]
            });
        })
    }

    loadMore = () => {
        return (
            <div className='btn-primary btn-load' onClick={this.fetchData}>{'LOAD MORE'}</div>
        )
    }

    render() {
        const { gifsArray } = this.state;
        return (
            <div className='gifs-main-container'>
                <SearchComponent onSearch={this.onSearch} />
                <GifsGrid data={gifsArray} />
                {gifsArray.length > 0 && this.loadMore()}
            </div>
        );
    }
}
