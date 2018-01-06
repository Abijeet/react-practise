class SaveNote extends React.Component {
  constructor (props) {
    super(props);
    let note = props.note;
    this.state = {
      text: note && note.text ? note.text : '',
      id: note && note.id ? note.id : null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    return (
      <form className="form-inline">
          <input type="text" className="form-control mb-2 mr-sm-2" value={this.state.text} onChange={this.handleChange}/>
          <button type="submit" className="btn btn-primary mb-2" onClick={this.handleSubmit}>Save</button>
      </form>
    );
  }
  handleSubmit (e) {
    e.preventDefault();
    let noteText = this.state.text;
    if (!noteText || noteText.trim().length === 0) {
      alert('No text!');
      return;
    }

    this.props.onSave(this.state.id, this.state.text);
    this.setState({
      text: ''
    });
  }
  handleChange(event) {
    this.setState({text: event.target.value});
  }
}

