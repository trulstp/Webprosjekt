import React,  { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'

class App extends Component {
    constructor(){
        super()
        this.state = {
            firstName:'',
            surName:'',
            studentID:'',
            age:'',
            nationality:'',
            degreeProgram:''
        }
        this.changeFirstName = this.changeFirstName.bind(this)
        this.changeSurName = this.changeSurName.bind(this)
        this.changeStudentID = this.changeStudentID.bind(this)
        this.changeAge = this.changeAge.bind(this)
        this.changeNationality = this.changeNationality.bind(this)
        this.changeDegreeProgram = this.changeDegreeProgram.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changeFirstName(event){
        this.setState({
            firstName:event.target.value
        })
    }

    changeSurName(event){
        this.setState({
            surName:event.target.value
        })
    }

    changeStudentID(event){
        this.setState({
            studentID:event.target.value
        })
    }

    changeAge(event){
        this.setState({
            age:event.target.value
        })
    }

    changeNationality(event){
        this.setState({
            nationality:event.target.value
        })
    }

    changeDegreeProgram(event){
        this.setState({
            degreeProgram:event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault()

        const registered = {
            firstName: this.state.firstName,
            surName: this.state.surName,
            studentID: this.state.studentID,
            age: this.state.age,
            nationality: this.state.nationality,
            degreeProgram: this.state.degreeProgram
        }

        axios.post('http://localhost:4000/app/register', registered)
            .then(response => console.log(response.data))

            this.setState({
                firstName:'',
                surName:'',
                studentID:'',
                age:'',
                nationality:'',
                degreeProgram:''
            })
    }
    
    render() {
        return ( 
            <div>
                <div className='container'>
                    <div className='form-div'>
                        <form onSubmit={this.onSubmit}>
                            <input type = 'text' 
                            placeholder='First Name' 
                            onChange={this.changeFirstName} 
                            value={this.state.firstName} 
                            className='form-control form-group'
                            />

                            <input type = 'text'
                            placeholder='Surname'
                            onChange={this.changeSurName}
                            value={this.state.surName}
                            className='form-control form-group'
                            />

                            <input type = 'integer'
                            placeholder='StudentID'
                            onChange={this.changeStudentID}
                            value={this.state.studentID}
                            className='form-control form-group'
                            />

                            <input type = 'integer'
                            placeholder='Age'
                            onChange={this.changeAge}
                            value={this.state.age}
                            className='form-control form-group'
                            />

                            <input type = 'text'
                            placeholder='Nationality'
                            onChange={this.changeNationality}
                            value={this.state.nationality}
                            className='form-control form-group'
                            />

                            <input type = 'text'
                            placeholder='Degree Program'
                            onChange={this.changeDegreeProgram}
                            value={this.state.degreeProgram}
                            className='form-control form-group'
                            />

                            <input type='submit' className='btn btn-danger btn-block' value='Submit'/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;