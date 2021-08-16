# Understanding Angular
[https://angular.io/guide]()

---

### Displaying value with interpolation
file.ts
```ts
currentCustomer = 'Maria'
```
file.html
```html
<h3>Current customer: {{ currentCustomer }}</h3>
```
### Template statements
file.html
```html
<button (click)="deleteHero()">Delete hero</button>
```
>calls the function when the button is clicked
```html
<button (click)="onSave($event)">Save</button>
<button 
  *ngFor="let hero of heroes" 
  (click)="deleteHeroe(hero)">
  {{ hero.name }}
</button>
<form #heroForm (ngSubmit)="onSubmit(heroForm">...</form>
```
1. Clicking the button -> save
2. Delete all heroes that have a certain name
3. submit the form

### Binding to a property
```html
<img [src]="itemImageUrl">
```
Evaluate as a dynamic expression other than a static one
### change the style with angular
```html
<p [ngClass]="classes">
  binding to the classes property to make this blue
</p>
```
### Toggling button functionality
To disable a button's functionality depending on a Boolean value, bind the DOM disabled property to a property in the class that is true or false.
```html
<!-- Bind button disabled state to `isUnchanged` property -->
<button [disabled]="isUnchanged">Disabled Button</button>
```
Because the value of the property isUnchanged is true in the AppComponent, Angular disables the button.
```ts
isUnchanged = true;
```
### Bind values between components
To set the model property of a custom component, place the target, here childItem, between square brackets [] followed by an equal sign and the property. Here, the property is parentItem.
```html
<app-item-detail [childItem]="parentItem"></app-item-detail>
```
To use the target and the property, you must declare them in their respective classes.

Declare the target of childItem in its component class, in this case ItemDetailComponent.

For example, the following code declares the target of childItem in its component class, in this case ItemDetailComponent.

Then, the code contains an @Input() decorator with the childItem property so data can flow into it.
```ts
@Input() childItem = '';
```
Next, the code declares the property of parentItem in its component class, in this case AppComponent. In this example the type of childItem is string, so parentItem needs to be a string. Here, parentItem has the string value of lamp.
```ts
parentItem = 'lamp';
```
With this configuration, the view of <app-item-detail> uses the value of lamp for childItem.

### Custom events with EventEmitter
Directives typically raise custom events with an Angular EventEmitter as follows.

1. The directive creates an EventEmitter and exposes it as a property.
2. The directive then calls EventEmitter.emit(data) to emit an event, passing in message data, which can be anything.
3. Parent directives listen for the event by binding to this property and accessing the data through the $event object.

Consider an ItemDetailComponent that presents item information and responds to user actions. Although the ItemDetailComponent has a delete button, it doesn't contain the functionality to delete the hero. It can only raise an event reporting the user's delete request.
```html
<img src="{{itemImageUrl}}" [style.display]="displayNone">
<span [style.text-decoration]="lineThrough">{{ item.name }}
</span>
<button (click)="delete()">Delete</button>
```
The component defines a deleteRequest property that returns an EventEmitter. When the user clicks Delete, the component invokes the delete() method, telling the EventEmitter to emit an Item object.
```ts
// This component makes a request but it can't actually delete a hero.
@Output() deleteRequest = new EventEmitter<Item>();

delete() {
  this.deleteRequest.emit(this.item);
  this.displayNone = this.displayNone ? '' : 'none';
  this.lineThrough = this.lineThrough ? '' : 'line-through';
}
```
The hosting parent component binds to the deleteRequest event of the ItemDetailComponent as follows.
```html
<app-item-detail (deleteRequest)="deleteItem($event)" [item]="currentItem"></app-item-detail>
```
When the deleteRequest event fires, Angular calls the parent component's deleteItem() method with the item.

#### Determining an event target
To determine an event target, Angular checks if the name of the target event matches an event property of a known directive. In the following example, Angular checks to see if myClick is an event on the custom ClickDirective.
```html
<h4>myClick is an event on the custom ClickDirective:</h4>
<button (myClick)="clickMessage=$event" clickable>click with myClick</button>
{{clickMessage}}
```
If the target event name, myClick fails to match an element event or an output property of ClickDirective, Angular reports an "unknown directive" error.
