import React,  { Component } from 'react';
import axios from 'axios'
import './styles.css'

class FindStudent extends Component{
    constructor(){
        super();
        this.state = {
            firstName:'',
            surName:'',
            studentID:'',
            age:'',
            nationality:'',
            degreeProgram:''
        }
        this.changeStudentID = this.changeStudentID.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }

    printStudent(){
        const studentlist = document.getElementById('studentlist');
        studentlist.innerHTML = '';

        studentlist.innerHTML += '<tr><td>' + this.state.studentID + '</td><td>' + this.state.surName + '</td><td>' + this.state.firstName + '</td><td>' + this.state.age + '</td><td>' + this.state.nationality + '</td><td>' + this.state.degreeProgram + '</td></tr>'
    }

    changeStudentID(event){
        this.setState({
            studentID:event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault()

        let foundStudent = {
            studentID: this.state.studentID
        }
        
        foundStudent = Number(foundStudent.studentID)

        axios.get(`http://localhost:4000/app/${foundStudent}`)
        .then((response) => {
            const data = response.data;

            console.log('Data found!!! :D')

            if (data.student.length !== 0) {
                this.setState({
                    firstName: data.student[0].firstName,
                    surName: data.student[0].surName,
                    age:data.student[0].age,
                    nationality:data.student[0].nationality,
                    degreeProgram:data.student[0].degreeProgram
                })
                
                this.printStudent()
            }

            else {
                document.getElementById('studentlist').innerHTML='';
                alert(`Could not find student with ID: ${this.state.studentID}`)
            }
        })
        
    }

    render() {
        return(
            <div>
                <h1>Student administration</h1>
                <div className='container'>
                    <h2>Search for student</h2>
                    <form onSubmit={this.onSubmit}>
                        <label htmlFor='input-id'>StudentID: </label>
                        <input type = 'text' 
                        id='input-id'
                        placeholder='StudentID' 
                        onChange={this.changeStudentID}
                        value={this.state.studentID} 
                        className='input-field'
                        />

                        <input type='submit' className='btn-submit' value='Search'/>
                    </form>

                    <h2>Student</h2>
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
        )
    }
}

export default FindStudent;