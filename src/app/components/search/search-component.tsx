import * as React from 'react';


interface ISearchComponentProps {
    onSearch: Function;
}

interface ISearchComponentState {
    searchValue: string;
}

export class SearchComponent extends React.Component<ISearchComponentProps, ISearchComponentState> {
    constructor(props: any) {
        super(props);
        this.state = {
            searchValue: ''
        };
    }

    onChange = (event: any) => {
        this.setState({
            searchValue: event.target.value
        });
    }

    onSubmit = () => {
        this.props.onSearch(this.state.searchValue);
    }

    render() {
        return (
            <div className='input-group mb-3'>
                <input type='text' className='form-control' placeholder='Search GIFs' onChange={this.onChange} />
                <div className='input-group-append'>
                    <button className='btn btn-outline-secondary' type='submit' onClick={this.onSubmit}>Submit</button>
                </div>
            </div>
        );
    }
}
