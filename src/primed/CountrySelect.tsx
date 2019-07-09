import * as React from 'react';
import { BaseProps, COUNTRIES } from './../BedrockUtils';
import Select from './../components/form/Select';

/**
 * A country selector
 */
export default class CountrySelect extends React.Component<BaseProps, any> {

    getCountries = () => {
        let result = [];
        for (let index = 0; index < COUNTRIES.length; index++) {
            let item = COUNTRIES[index];

            result.push(<option value={item}>{item}</option>);
        }

        return result;
    }

    render() {
        return <Select className={this.props.className}>
            {this.getCountries()}
        </Select>
    }
}
