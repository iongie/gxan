# Gixan Icon [![license](https://img.shields.io/npm/l/react-md)]

Component for Angular

## Installation

```sh
npm i @gixan/icon
```

## Usage
First you need to include the GxIconModule in your module
```typescript
import { GxIconModule } from '@gixan/icon';

@NgModule({
    imports: [
        GxIconModule
    ],
    ...
})
```

Next, you need to include the configuration in your component
```typescript
import { Icon, Color, Type } from '@gixan/icon';

...
export class AppComponent {
  icon : Icon = {
    color: Color.blue,
    size: 24,
    type: Type.add
  }
}
```

```html
<gx-icon [icon]="icon"></gx-icon>
```