import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { DynamicFormsCoreModule } from "@ng2-dynamic-forms/core";
import { DynamicFormPrimeNGComponent } from "./dynamic-form-primeng.component";
import {
    AutoCompleteModule,
    CalendarModule,
    CheckboxModule,
    ChipsModule,
    DropdownModule,
    EditorModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    MultiSelectModule,
    RadioButtonModule,
    SliderModule,
    SpinnerModule,
    RatingModule
} from "primeng/primeng";

@NgModule({

    imports: [
        CommonModule,
        ReactiveFormsModule,
        DynamicFormsCoreModule,
        AutoCompleteModule,
        CalendarModule,
        CheckboxModule,
        ChipsModule,
        DropdownModule,
        EditorModule,
        InputSwitchModule,
        InputTextModule,
        InputTextareaModule,
        MultiSelectModule,
        RadioButtonModule,
        SliderModule,
        SpinnerModule,
        RatingModule
    ],
    declarations: [
        DynamicFormPrimeNGComponent
    ],
    exports: [
        DynamicFormsCoreModule,
        DynamicFormPrimeNGComponent
    ]
})

export class DynamicFormsPrimeNGUIModule {
}