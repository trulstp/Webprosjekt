import React,  { Component } from 'react';
import axios from 'axios'
import './styles.css'

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

    componentDidMount() {
        this.getStudents();
    }
    
    getStudents() {
        document.getElementById('studentlist').innerHTML = '';
        axios.get('http://localhost:4000/app/students')
            .then((response) => {
                const data = response.data;
                console.log('Data found!!! :D')
                
                this.printStudents(data);
            })
            .catch(() => {
                console.log('No data found :(')
            })
    }

    printStudents(studentsData){
        const studentlist = document.getElementById('studentlist');

        studentsData.forEach((student) => {
            studentlist.innerHTML += '<tr><td>' + student.studentID + '</td><td>' + student.surName + '</td><td>' + student.firstName + '</td><td>' + student.age + '</td><td>' + student.nationality + '</td><td>' + student.degreeProgram + '</td></tr>'
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
                <h1>Student administration</h1>
                <div className='container-form background-blue'>
                    <div className='form-container'>
                        <h2>Register student</h2>
                        <form onSubmit={this.onSubmit}>
                            <label htmlFor='input-name'>First name:</label>
                            <input type = 'text' 
                            id='input-name'
                            placeholder='First Name' 
                            onChange={this.changeFirstName} 
                            value={this.state.firstName} 
                            className='input-field'
                            />

                            <label htmlFor='input-surname'>Surname:</label>
                            <input type = 'text'
                            id='input-surname'
                            placeholder='Surname'
                            onChange={this.changeSurName}
                            value={this.state.surName}
                            className='input-field'
                            />

                            <label htmlFor='input-id'>StudentID:</label>
                            <input type = 'integer'
                            id='input-id'
                            placeholder='StudentID'
                            onChange={this.changeStudentID}
                            value={this.state.studentID}
                            className='input-field'
                            />

                            <label htmlFor='input-age'>Age:</label>
                            <input type = 'number'
                            id='input-age'
                            placeholder='Age'
                            onChange={this.changeAge}
                            value={this.state.age}
                            className='input-field'
                            />

                            <label htmlFor='input-nationality'>Nationality:</label>
                            <input type = 'text'
                            id='input-nationality'
                            placeholder='Nationality'
                            onChange={this.changeNationality}
                            value={this.state.nationality}
                            className='input-field'
                            />

                            <label htmlFor='input-degree'>Degree Program:</label>
                            <input type = 'text'
                            id='input-degree'
                            placeholder='Degree Program'
                            onChange={this.changeDegreeProgram}
                            value={this.state.degreeProgram}
                            className='input-field'
                            />

                            <input type='submit' className='btn-submit' value='Submit'/>
                        </form>
                    </div>
                </div>

                <div>
                    <div className='container'>
                        <h2>List of students</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>StudentID</th>
                                    <th>Surname</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Nationality</th>
                                    <th>Degree</th>
                                </tr>
                            </thead>
                            <tbody id='studentlist'>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;