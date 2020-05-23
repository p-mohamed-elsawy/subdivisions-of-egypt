# Egyptian governorates and cities in Arabic and English


List of cities and towns in Egypt

Uses data from https://en.wikipedia.org/wiki/List_of_cities_and_towns_in_Egypt

<img src="https://cdn.worldvectorlogo.com/logos/typescript.svg" width="70"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/280px-Unofficial_JavaScript_logo_2.svg.png" width="70"> <img src="https://www.benmvp.com/static/bf5110fcdc155bf03a62c7863573ec65/9f2d5/ecmascript-logo.png" width="70">

## Example

``` ts
import { getGovernorates, getGovernoratesWithSubregions, getGovernorate, getSubregions} from 'subdivisions-of-egypt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(){
    console.log(getGovernorates())  // List of all governorates
    console.log(getGovernoratesWithSubregions())  // List of all governorates with subregions
    console.log(getGovernorate(GovernorateID))  // Specific governorate data
    console.log(getSubregions(GovernorateID))  // Get all the cities in governorate
  }
}
```


## Methods

Usage:


### getGovernorates()

 Returns all governorates

### getGovernoratesWithSubregions()

Returns all governorates with subregions

### getGovernorate(GovernorateID)

Specific governorate data

### getSubregions(GovernorateID)

Get all the cities in governorate

## Install

``` cli
npm i subdivisions-of-egypt
```

## License

MIT