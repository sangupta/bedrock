import * as React from 'react';
import { BaseProps, COUNTRIES, getProps, NoProps } from './../BedrockUtils';
import Select from './../components/form/Select';

/**
 * A country selector
 */
export default class CountrySelect extends React.Component<BaseProps, NoProps> {

    getCountries = () => {
        let result = [];
        for (let index = 0; index < COUNTRIES.length; index++) {
            let item = COUNTRIES[index];

            result.push(<option key={item} value={item}>{item}</option>);
        }

        return result;
    }

    render() {
        const extra:any = getProps(this.props);
        
        return <Select {...extra} className={this.props.className}>
            {this.getCountries()}
        </Select>
    }
}
