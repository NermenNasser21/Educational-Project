import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


declare var bootstrap: any;
 interface Course {
  id:number ,
    image:string ,
    title:string , 
    duration:string ,
    level :string ,
    rating :string ,
    studentsNum:string,
    instructorImg:string,
    instructorName:string

}

@Component({
  selector: 'app-managecourses',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './managecourses.component.html',
  styleUrl: './managecourses.component.css'
})
export class ManagecoursesComponent {


  courses =[
  { id:1,
    image:'course-react.jpg',
    title:'How to easily create a website with React', 
    duration:'5h 30m',
    level :'Begginer',
    rating :'4.5',
    studentsNum:'3,000',
    instructorImg:'avatar-1.jpg',
    instructorName: 'Claire Robertson'

  },
  { id:2,
    image:'course-graphql.jpg',
    title:'GraphQL: introduction to graphQL for beginners', 
    duration:'7h 30m',
    level :'Begginer',
    rating :'5.5',
    studentsNum:'1,400',
    instructorImg:'avatar-2.jpg',
    instructorName: 'Ted Hawkins'

  },
  { id:3,
    image:'course-angular.jpg',
    title:'Angular - the complete guide for beginner', 
    duration:'4h 30m',
    level :'Begginer',
    rating :'7.5',
    studentsNum:'2,100',
    instructorImg:'avatar-3.jpg',
    instructorName: 'Claire Robertson'

  },
  { id:4,
    image:'course-python.jpg',
    title:'The Python Course: build web application', 
    duration:'2h 30m',
    level :'Intermediate',
    rating :'6.5',
    studentsNum:'13,690',
    instructorImg:'avatar-4.jpeg',
    instructorName: 'Juanita Bell'

  },
  { id:5,
    image:'course-gatsby.jpg',
    title:'Gatsby JS: build blog with GraphQL and React', 
    duration:'3h 56m',
    level :'Begginer',
    rating :'4.5',
    studentsNum:'9,370',
    instructorImg:'avatar-5.jpeg',
    instructorName: 'Morris Mccoy'

  },
  { id:6,
    image:'course-javascript.jpg',
    title:'JavaScript: modern javaScript from the', 
    duration:'2h 46m',
    level :'Advance',
    rating :'4.5',
    studentsNum:'3,000',
    instructorImg:'avatar-6.jpg',
    instructorName: 'Ted Hawkins'

  },
  { id:7,
    image:'course-css.jpg',
    title:'CSS: ultimate CSS course from beginner to advanced', 
    duration:'1h 30m',
    level :'Begginer',
    rating :'4.5',
    studentsNum:'17,000',
    instructorImg:'avatar-7.jpg',
    instructorName: 'Juanita Bell'

  },
   { id:8,
    image:'course-wordpress.jpg',
    title:'Wordpress: complete WordPress theme & plugin', 
    duration:'2h 30m',
    level :' Intermediate',
    rating :'4.5',
    studentsNum:'16,500',
    instructorImg:'avatar-8.jpg',
    instructorName: 'Claire Robertson'

  },

   { id:9,
    image:'course-node.jpg',
    title:'Node.js Tutorials - For beginners and professionals', 
    duration:'2h 30m',
    level :'Beginner',
    rating :'4.5',
    studentsNum:'12,245',
    instructorImg:'avatar-9.jpg',
    instructorName: 'Morris Mccoy'

  },

  ];

 selectedCourse: any = {};

  deleteCourse(id: number) {
    const confirmed = confirm('Are you sure you want to delete this course?');
    if (confirmed) {
    this.courses = this.courses.filter(course => course.id !== id);
    }
  }


  editCourse(course: any) {
    this.selectedCourse = { ...course }; 
  }

  updateCourse() {
    const index = this.courses.findIndex(c => c.id === this.selectedCourse.id);
    if (index !== -1) {
      this.courses[index] = { ...this.selectedCourse };
    }

    // Closing the modal
    const modalEl = document.getElementById('editCourseModal');
    const modalInstance = bootstrap.Modal.getInstance(modalEl);
    modalInstance?.hide();
  }



newCourse: Course = { id:0,
    image:'',
    title:'', 
    duration:'',
    level :'',
    rating :'',
    studentsNum:'',
    instructorImg:'',
    instructorName: '' };

addCourse() {
  const newId = this.courses.length > 0 ? Math.max(...this.courses.map(c => c.id)) + 1 : 1;
  const courseToAdd = { ...this.newCourse, id: newId };
  this.courses.push(courseToAdd);
  this.newCourse = { id:0,
    image:'',
    title:'', 
    duration:'',
    level :'',
    rating :'',
    studentsNum:'',
    instructorImg:'',
    instructorName: '' };

  const modalEl = document.getElementById('addCourseModal');
  const modalInstance = bootstrap.Modal.getInstance(modalEl);
  modalInstance?.hide();
}
onCourseImageSelected(event: any) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      this.newCourse.image = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
}

onInstructorImageSelected(event: any) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      this.newCourse.instructorImg = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
}
}
