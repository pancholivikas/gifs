import * as React from 'react';

export const GifsGrid = (props: any) => {
    const { data } = props;
    return (
        <div className='row'>
            {data.map((item: any, index: number) => {
                return (
                    <div className='col-xs-5 col-sm-4 col-md-3 gif-container' key={index}>
                        <img className='responsive-img'
                            src={item.images.fixed_height.url}
                            height='250'
                            onClick={(e) => handleClick(e, item)}/>
                    </div>
                );
            })}
        </div>
    )
}

const handleClick = (event:any, item:any) => {
    event.target.src = (event.target.src === item.images.fixed_height.url)
        ? item.images.fixed_height_still.url : item.images.fixed_height.url
}