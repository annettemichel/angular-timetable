import { Component } from '@angular/core';
import {Appointment} from "../models/appointment";

@Component({
  selector: 'app-timetable-list',
  templateUrl: './timetable-list.component.html',
  styleUrl: './timetable-list.component.scss'
})
export class TimetableListComponent {
  newAppointmentDescription : string = "";
  newAppointmentDate : Date = new Date();
  appointments: Appointment[] = [];

  addAppointment(){
    if(this.newAppointmentDescription.trim().length && this.newAppointmentDate){
      let newAppointment : Appointment = {
        id : Date.now(),
        description : this.newAppointmentDescription,
        date : this.newAppointmentDate
      }
      this.appointments.push(newAppointment);

      //Reset the form
      this.newAppointmentDescription = "";
      this.newAppointmentDate = new Date();
    }
  }
}
