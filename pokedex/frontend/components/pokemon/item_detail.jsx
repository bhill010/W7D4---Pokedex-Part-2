import React from 'react';

class ItemDetail extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    console.log(this.props)
    return(
      <div>
        hi
      </div>
    );
  }
}

export default ItemDetail;

// {this.props.map((item) => <Item key={item.id} )
