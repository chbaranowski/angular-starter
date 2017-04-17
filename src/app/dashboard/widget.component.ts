import { OnDestroy } from '@angular/core/core';
import { Component, OnInit, Input, ViewContainerRef, ComponentFactoryResolver, Type, ReflectiveInjector, ViewChild } from '@angular/core';
import { DashboardModule } from './dashboard.module';

@Component({
  selector: 'widget',
  template: '',
})
export class WidgetComponent implements OnInit, OnDestroy {

  @Input() type: string;

  @Input() config: any;

  currentComponent = null;

  constructor(private resolver: ComponentFactoryResolver,
    private dynamicComponentContainer: ViewContainerRef) {
  }

  ngOnInit() {
    const componentType = DashboardModule.componentTypes.find(widgetType => widgetType.name === this.type);

    // We create an injector to pass down
    const injector = ReflectiveInjector.fromResolvedProviders([], this.dynamicComponentContainer.parentInjector);

    // We create a factory out of the component we want to create
    const factory = this.resolver.resolveComponentFactory(componentType);

    // We create the component using the factory and the injector
    const component = factory.create(injector);

    // We bind the inputs of the component to the config objects
    factory.inputs.forEach(input => {
      const inputValue = this.config[input.propName];
      if (inputValue) {
        component.instance[input.propName] = inputValue;
      }
    });

    // We insert the component into the dom container
    this.dynamicComponentContainer.insert(component.hostView);

    this.currentComponent = component;
  }

  ngOnDestroy() {
    this.currentComponent.destroy();
  }

}
