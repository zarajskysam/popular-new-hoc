import React from 'react';
import New from '../components/New';
import Popular from '../components/Popular';

export function updateItem (Component) {
    return class extends React.Component {
      constructor(props) {
        super(props);
        this.NewItem = <New><Component {...this.props}/></New>;
        this.PopItem = <Popular><Component {...this.props}/></Popular>
      }
      
      renderItem() {
        if (this.props.views < 100) {
          return this.NewItem;
        }
        if (this.props.views >= 1000) {
          return this.PopItem;
        }
        return <Component {...this.props}/>
      }

      render() {
        return this.renderItem();
      }
    }
}