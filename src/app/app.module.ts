import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { DatabindingPracticeComponent } from './databinding-practice/databinding-practice.component';
import { DirectivesComponent } from './directives/directives.component';
import { DirectivesPracticeComponent } from './directives-practice/directives-practice.component';
import { CustomDatabindingComponent } from './custom-databinding/custom-databinding.component';
import { ChildComponentComponent } from './custom-databinding/child-component/child-component.component';
import { ViewEncapsulationComponent } from './view-encapsulation/view-encapsulation.component';
import { LocalReferenceComponent } from './local-reference/local-reference.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { ContentChildComponent } from './content-child/content-child.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PropertyBindThreeWayComponent } from './form-binding-three-way/property-bind-three-way/property-bind-three-way.component';
import { TwoWayBindThreeWayComponent } from './form-binding-three-way/two-way-bind-three-way/two-way-bind-three-way.component';
import { AngularFormThreeWayComponent } from './form-binding-three-way/angular-form-three-way/angular-form-three-way.component';

@NgModule({
  declarations: [
    AppComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    DatabindingPracticeComponent,
    DirectivesComponent,
    DirectivesPracticeComponent,
    CustomDatabindingComponent,
    ChildComponentComponent,
    ViewEncapsulationComponent,
    LocalReferenceComponent,
    ViewChildComponent,
    NgContentComponent,
    LifecycleHooksComponent,
    ContentChildComponent,
    PropertyBindThreeWayComponent,
    TwoWayBindThreeWayComponent,
    AngularFormThreeWayComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
