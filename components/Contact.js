var Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },
  
    render: function() {
        return (
            <div className={'contactItem'}>
                <img className={'contactImage'} src={'./img/contacts.jpg'}/>
                <p className={'contactLabel'}>
                    Imię: {this.props.contact.firstName}
                </p>
                <p classname={'contactLabel'}>
                    nazwisko: {this.props.contact.lastName}
                </p>
                <a className={'contactEmail'} href={'mailto:' + this.props.item.email}>
                    {this.props.item.email}
                </a>
            </div>
        );
    }
});