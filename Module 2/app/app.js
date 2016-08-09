var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
    render: function(){
        return(
            <div>
                <div id="header"></div>
                <div className="container">
                    <div className="column">
                        <InboxPane/>
                    </div>
                    <div className="column">
                        
                    </div>
                    <div className="column">
                        
                    </div>
                </div>
            </div>
        )
    }
});

var InboxPane = React.createClass({
    render: function(){
       return(
        <div id="inbox-pane">
            <h1>Inbox</h1>
            <table>
                <thead>
                    <tr>
                        <th>Chat Received</th>
                        <th>Name</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <InboxItem/>
                </tbody>
            </table>  
        </div>
        )
    }
});

var InboxItem = React.createClass({
    render: function(){
       return(
           <tr>
                <td>5 pm</td>
                <td>Anish loves Pizza</td>
                <td>Confirmed</td>
           </tr>
       )
    }
});

ReactDOM.render(<App />,document.getElementById("main"));