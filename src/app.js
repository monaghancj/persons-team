const React = require('react')
const R = require('ramda')

const App = React.createClass({
  getInitialState: function() {
    return {
      persons: [
      {
        name: 'Tom',
        id: 1
      }, {
        name: 'Trip',
        id: 2
      }, {
        name: 'Derek',
        id: 3
      }, {
        name: 'Kendra',
        id: 4
      }, {
        name: 'Andrea',
        id: 5
      }, {
        name: 'Jared',
        id: 6
      }, {
        name: 'Joshua',
        id: 7
      }, {
        name: 'Chris',
        id: 8
      }, {
        name: 'Alex',
        id: 9
      }, {
        name: 'Joe',
        id: 10
      }, {
        name: 'Cameron',
        id: 11
      }, {
        name: 'Matt',
        id: 12

      }],
      members: [{
        name: 'Tom',
        id: 1
      }, {
        name: 'Trip',
        id: 2
      }]
    };
  },
  addMember (person) {
    return (e) => {
      e.preventDefault()
      var array = []
      this.state.members.map(m => array.push(m))
      array.push(person)
      this.setState({members: array})
    }
  },
  removeMember (member) {
    return (e) => {
      e.preventDefault()
      var array = []
      R.map(m => array.push(m), this.state.members)
      for (var i=0; i < array.length; i++) {
        if (array[i].id === member.id) {
          array.splice(i, 1)
        }
      }
      this.setState({members: array})

    }
  },
  render () {
    return (
      <div>
        <div style={{float: 'left'}}>
          <h3>People</h3>
          <ul>
            {this.state.persons.map(p =>
              <li key={p.id}>
                {p.name}
                <button onClick={this.addMember(p)}>Add Member</button>
              </li>
            )}
          </ul>
        </div>
        <div style={{float: 'left'}}>
          <h3>Team</h3>
          <ul>
            {this.state.members.map(m =>
              <li key={m.id}>
                {m.name}
                <button onClick={this.removeMember(m)}>Remove</button>
              </li>
            )}
          </ul>
        </div>
      </div>
    )
  }
})

module.exports = App
