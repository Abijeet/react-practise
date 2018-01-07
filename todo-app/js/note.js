class Note extends React.Component {
  constructor (props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
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
  handleComplete () {
    this.props.onComplete(this.props.note);
  }
  render () {
    const isEditing = this.state.isEditing;
    return (
      <div className="note-container">
          {isEditing ? (
            <SaveNote onSave={this.handleSave} note={this.props.note} />
          ): (
            <div className="row mb-3">
              <div className={`note col pt-2 ${this.props.note.isComplete ? 'complete': ''}`}>
                {this.props.note.text}
              </div>
              <div className="col-sm-auto">
                <button className="btn btn-success mr-2" onClick={this.handleComplete} title={this.props.note.isComplete ? 'Mark as not done' : 'Mark as done'}>
                  <span className={`oi ${ this.props.note.isComplete ? 'oi-x': 'oi-check'}`}></span>
                </button>
                <button className={`btn btn-info mr-2 ${this.props.note.isComplete ? 'd-none': ''}`} onClick={this.handleEdit}  title="Edit">
                  <span className="oi oi-pencil"></span>
                </button>
                <button className="btn btn-danger" onClick={this.handleDelete} title="Delete"><span className="oi oi-trash"></span></button>
              </div>
            </div>
          )}
      </div>
    );
  }
}