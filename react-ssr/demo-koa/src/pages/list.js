import React from 'react';
import {observer, inject} from 'mobx-react';

@inject('store_list')
@observer
export default class extends React.Component{
    render() {
        const {list} = this.props.store_list;
        return (
            <main className="list">
                {
                    list.map((item, i) => {
                        return <div key={i}>{item.name}</div>
                    })
                }
            </main>
        )
    }
}
