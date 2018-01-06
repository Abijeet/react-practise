class Note extends React.Component {
  constructor (props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.state = {
      isEditing: false
    };
  }
  handleEdit () {
    this.setState({
      isEditing: true
    });
  }
  handleDelete () {
    let confirm = window.confirm('Are you sure you want to delete this note?');
    if (!confirm) {
      return;
    }
    this.props.onDelete(this.props.note);
  }
  handleSave (id, text) {
    this.props.onEdit(this.props.note.id, text);
    this.setState({
      isEditing: false
    });
  }
  render () {
    const isEditing = this.state.isEditing;
    return (
      <div className="note-container container">
          {isEditing ? (
            <SaveNote onSave={this.handleSave} note={this.props.note} />
          ): (
            <div className="row">
              <div className="note col-sm-10">
                {this.props.note.text}
              </div>
              <button className="btn btn-default" onClick={this.handleEdit}>Edit</button>
              <button className="btn btn-danger" onClick={this.handleDelete}>Delete</button>
            </div>
          )}
      </div>
    );
  }
}