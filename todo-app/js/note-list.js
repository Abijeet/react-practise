class NoteList extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    const notes = this.props.notes.map((note) => {
      return <Note note={note} key={note.id} onDelete={this.props.onDelete} onEdit={this.props.onEdit} onComplete={this.props.onComplete} />
    });
    return (
      <div className="notes">
        {notes}
      </div>
    );
  }
}