import React from 'react';
import {observer, inject} from 'mobx-react';

@inject('store_home')
@observer
export default class extends React.Component{
    render() {
        const {userInfo} = this.props.store_home;
        return (
            <main className="home">
                <div className="info-warp">
                    <div className="label">姓名</div> <div className="al">{userInfo.name}</div>
                    <div className="label">id</div> <div className="al">{userInfo.id}</div>
                    <div className="label">idcard</div> <div className="al">{userInfo.idcard}</div>
                </div>
            </main>
        )
    }
}
