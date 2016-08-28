import React, {Component} from 'react';
import Remarkable from 'remarkable';

export default class Comments extends Component {
  rawMarkup(){
    var md = new Remarkable();
    var rawMarkup = md.render(this.props.children.toString());
    return { __html: rawMarkup };
   }
   render(){
      var md = new Remarkable();
      return(
        <div className="comment">
            <h2 className="commentAuthor">
            {this.props.author}
            </h2>
          <span dangerouslySetInnerHTML={this.rawMarkup()} />
        </div>
     );

   }
}
