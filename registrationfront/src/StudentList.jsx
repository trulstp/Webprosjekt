import React,  { Component } from 'react';
import axios from 'axios'
import './styles.css'

class StudentList extends Component{
    constructor(){
        super();
        this.state = {
            studentID:''
        }
        this.changeStudentID = this.changeStudentID.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

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

    changeStudentID(event){
        this.setState({
            studentID:event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault()

        if (this.state.studentID !== '') {
            let deleteStudent = {
                studentID: this.state.studentID
            }
            
            deleteStudent = Number(deleteStudent.studentID)
    
            console.log(deleteStudent)
    
            axios.delete(`http://localhost:4000/app/${deleteStudent}`)
                .then(response => console.log(response.data))
            
            this.setState({
                studentID:''
            })
            document.getElementById('message').innerHTML = 'Deleted student'
            this.getStudents();
        }

        else {
            document.getElementById('message').innerHTML = 'Please write a studentID'
        }
    }

    render() {
        return(
            <div>
                <h1>Student administration</h1>
                <div className='container'>
                    <h2>Delete student</h2>
                    <form onSubmit={this.onSubmit}>
                        <label htmlFor='input-id'>StudentID: </label>
                        <input type = 'text' 
                        id='input-id'
                        placeholder='StudentID' 
                        onChange={this.changeStudentID}
                        value={this.state.studentID} 
                        className='input-field'
                        />

                        <input type='submit' className='btn-submit' value='Delete'/>
                    </form>
                    <p id='message'></p>

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
        )
    }
}

export default StudentList;