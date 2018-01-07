class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      notes: [],
      noteId: 0
    };

    this.handleSave = this.handleSave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
  }
  render() {
    return (
      <div>
        <h1>TODO - List</h1>
        <SaveNote onSave={this.handleSave} note={null}/>
        <NoteList notes={this.state.notes} onDelete={this.handleDelete} onEdit={this.handleSave} onComplete={this.handleComplete}/>
      </div>
    );
  }
  handleSave (id, text) {
    if (id) {
      // update existing
      let noteIndex = -1;
      for (let i = 0; i < this.state.notes.length; ++i) {
        if (this.state.notes[i].id === id) {
          noteIndex = i;
          break;
        }
      }

      this.setState((prevState) => {
        if (noteIndex === -1) {
          return;
        }
        prevState.notes[noteIndex].text = text;
        return {
          notes: prevState.notes
        };
      });
      return;
    }

    // new note
    let newId = ++this.state.noteId;
    this.setState(prevState => ({
      notes: [...prevState.notes, new MyNote(newId, text)]
    }));
  }
  handleDelete (noteToDelete) {
    this.setState((prevState) => {
      let notes = prevState.notes;
      for (let i = 0; i !== notes.length; ++i) {
        if (notes[i].id === noteToDelete.id) {
          notes.splice(i, 1);
          break;
        }
      }
      return {
        notes: notes
      };
    });
  }
  handleComplete (noteToUpdate) {
    this.setState((prevState) => {
      let notes = prevState.notes;
      for (let i = 0; i !== notes.length; ++i) {
        if (notes[i].id === noteToUpdate.id) {
          notes[i].isComplete = !noteToUpdate.isComplete;
          break;
        }
      }
      return {
        notes: notes
      };
    })
  }
}