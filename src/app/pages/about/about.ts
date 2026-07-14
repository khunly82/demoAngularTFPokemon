import { Component, inject } from '@angular/core';
import { AppService } from '../../services/app-service';
import { Loader } from "../../components/loader/loader";

@Component({
  imports: [Loader],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  appService = inject(AppService)
}
