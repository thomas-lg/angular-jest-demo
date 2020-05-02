# angular-jest-demo

This project was made to show some testing scenarios for [Angular](https://angular.io/) with [Jest](https://jestjs.io/).
It is more like a quick draft to show how testing can be done. I might add some use case to it when I encounter new scenarios. (But I'm spending a lot of times on other tech 😍)

## The App

Pretty easy stuff here, there's a landing page. Then you can access a counter between 0 and 10. This counter is related to a display that show if the number is odd or even. Another page is available, in case I have time to add some async call test.

## Running Test

```
npm i
npm test
OR
npm run test:watch // rerun tests automatically
OR
npm run coverage // generate a coverage folder
```

## Testing politics

### Components

The different components are unit tested which means that those tests are only dependant to one component/class.

### Containers

Unit testing for containers can depend on components or no (meaning that we are stubbing the nested component).
The thing is, if a component is well tested at the component level, there is no reason that it behave abnormally at the container level.

Sometimes you need to use the real nested component, then you have to make sure that the `TestBed` declare it and everything related to it (and that can really be painfull 😅).

## Testing Scenarios

### Components

#### ngOnChanges / Input

The `EvenOddComponent` can be tested by itself cause is only purpose is to display even or odd. It is taking an `Input` and then compute the right label to display.

We are using the TestHostComponent pattern to test it.

```ts
@Component({
	template: `<app-even-odd [counter]="counter"></app-even-odd> `,
})
class TestHostComponent {
	counter: number;
}
```

This component is mocking a parent that will send an `counter Input` with the goal to trigger the `ngOnChanges` methods.

Check the test out [here](src/app/components/even-odd/even-odd.component.spec.ts).

What we're doing in the `it` is just saying.

- set `counter` of TestHostComponent to x
- Detect Changes
- Check that the label is now updated with the right value

[Display component](src/app/components/display/display.component.spec.ts) does the same without the ngOnChanges logic.

Ez pz right!

#### Output

Testing that the emit event has been trigger is no big deal.

The easiest way to achieve it is to spy on the emit method and make sure that it has been called. The [button](src/app/components/button/button.component.spec.ts) testing file should be self explainatory.

The logic inside this components is that the user can increment/decrement but the value must stay between a specified range.

ie: the range is 0 < x < 10, if x = 7 and value to increment is 5, then we increment by 3 to stay in the range. (I hope it makes sense 🤔)

We are using `toHaveBeenCalledWith` to make sure that the emit value is the right one.

### Containers

There are many ways to test containers. One can be to use let sub component as they are or stub them. In the [counter](src/app/containers/counter/counter.component.spec.ts) most of the sub components are stub because they are already tested. The only things i want to make sure here is that `modify` does its job. I could have let both `ButtonComponent` to test that they behave well inside the Container, but I decided not in this case. Not saying that this is not worth it!

## More ...

Check out the other test file even if there aren't really complete. Might find something useful for ya. I'll try to add some other use case during my angular journey.

[Angular ressources](https://angular.io/guide/testing) / [Angular with Jest](https://www.xfive.co/blog/testing-angular-faster-jest/)

Check out my other stuff!

- [git-bisect-demo](https://github.com/thomas-lg/git-bisect-demo): Definitely check that out if you never heard of git bisect!

- [react-webpack-starterkit](https://github.com/thomas-lg/react-webpack-starterkit): Might be a bit outdated to be honest 😅

## Author

Thomas Le Gougaud [@thomas-lg](https://github.com/thomas-lg)
