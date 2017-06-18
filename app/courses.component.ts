import { Component } from 'angular2/core';
import { CourseService } from './course.service';

@Component({
    selector : 'courses',
    template : `<h2>Courses</h2>
               {{ title }}
               <ul>
                 <li *ngFor="#i of courses">
                     {{i}}
                 </li>
               </ul>
                 `,
    providers:[CourseService]
})
export class CourseComponent {
   title  = "The courses title page";
   courses;

   constructor(courseService: CourseService){
     this.courses = courseService.getCourses();
   }
}