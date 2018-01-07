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
        <div className="row mb-3">
            <form className="col form-inline save-note">
              <input type="text" className="form-control mr-2" value={this.state.text} onChange={this.handleChange} placeholder="Enter your note here..."/>
              <button type="submit" className="btn btn-primary" onClick={this.handleSubmit} title="Save"><span className="oi oi-file"></span></button>
            </form>
        </div>
    );
  }
  handleSubmit (e) {
    e.preventDefault();
    let noteText = this.state.text;
    if (!noteText || noteText.trim().length === 0) {
      alert('The note has no text.');
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

