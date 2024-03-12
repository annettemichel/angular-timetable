import {Component} from '@angular/core';
import {Appointment} from "../models/appointment";
import {OnInit} from "@angular/core";

@Component({
  selector: 'app-timetable-list',
  templateUrl: './timetable-list.component.html',
  styleUrl: './timetable-list.component.scss'
})
export class TimetableListComponent implements OnInit{

  newAppointmentDescription: string = "";
  newAppointmentDate: Date = new Date();
  appointments: Appointment[] = [];

  ngOnInit(): void {
    let storedAppointments = localStorage.getItem("appointments");
    this.appointments = storedAppointments ? JSON.parse(storedAppointments) : []
  }

  addAppointment() {
    if (this.newAppointmentDescription.trim().length && this.newAppointmentDate) {
      let newAppointment: Appointment = {
        id: Date.now(),
        description: this.newAppointmentDescription,
        date: this.newAppointmentDate
      }
      this.appointments.push(newAppointment);

      //Reset the form
      this.newAppointmentDescription = "";
      this.newAppointmentDate = new Date();

      //Add appointment to local Storage
      localStorage.setItem("appointments", JSON.stringify(this.appointments))
    }
  }

  deleteAppointment(index: number) {
    this.appointments.splice(index, 1);

    //Delete appointment from local Storage
    localStorage.setItem("appointments", JSON.stringify(this.appointments))
  }
}
