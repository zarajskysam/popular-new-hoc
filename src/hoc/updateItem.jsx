import React from 'react';
import New from '../components/New';
import Popular from '../components/Popular';

export function updateItem (Component) {
    return class extends React.Component {
      
      renderItem() {
        if (this.props.views < 100) {
          return <New><Component {...this.props}/></New>;
        }
        if (this.props.views >= 1000) {
          return <Popular><Component {...this.props}/></Popular>;
        }
        return <Component {...this.props}/>
      }

      render() {
        return this.renderItem();
      }
    }
}